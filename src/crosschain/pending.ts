import { TokenAmount } from '../entities'
import { ChainId } from '../constants'
import { Portal, Synthesis } from './contracts'
import { SynthesizeRequestEvent } from './contracts/Portal'
import { BurnRequestEvent } from './contracts/Synthesis'
import type { Symbiosis } from './symbiosis'
import { getExternalId } from './utils'

export enum PendingRequestState {
    Default = 0,
    Sent,
    Reverted,
}

export type PendingRequestType = 'burn' | 'synthesize'

export interface PendingRequest {
    fromTokenAmount: TokenAmount
    transactionHash: string
    state: PendingRequestState
    internalId: string
    externalId: string
    type: PendingRequestType
    from: string
    to: string
    revertableAddress: string
    chainIdFrom: ChainId
    chainIdTo: ChainId
}

interface GetChainPendingRequestsParams {
    symbiosis: Symbiosis
    activeChainId: ChainId
    chainsIds: ChainId[]
    address: string
    type: PendingRequestType
}

export async function getChainPendingRequests({
    symbiosis,
    activeChainId,
    chainsIds,
    address,
    type,
}: GetChainPendingRequestsParams): Promise<PendingRequest[]> {
    const provider = symbiosis.getProvider(activeChainId)

    await provider.ready

    const otherChains = chainsIds.filter((chainId) => chainId !== activeChainId)

    let events: SynthesizeRequestEvent[] | BurnRequestEvent[]
    let selectedContract: Portal | Synthesis

    const fromBlock = await symbiosis.getFromBlockWithOffset(activeChainId)

    if (type === 'synthesize') {
        selectedContract = symbiosis.portal(activeChainId)

        const eventFragment = selectedContract.interface.getEvent('SynthesizeRequest')

        const topics = selectedContract.interface.encodeFilterTopics(eventFragment, [
            undefined,
            address, // address
            otherChains, // chains IDs
        ])

        events = await selectedContract.queryFilter<SynthesizeRequestEvent>({ address, topics }, fromBlock)
    } else {
        selectedContract = symbiosis.synthesis(activeChainId)

        const eventFragment = selectedContract.interface.getEvent('BurnRequest')

        const topics = selectedContract.interface.encodeFilterTopics(eventFragment, [
            undefined,
            address, // address
            otherChains, // chains IDs
        ])

        events = await selectedContract.queryFilter<BurnRequestEvent>({ address, topics }, fromBlock)
    }

    const pendingRequests: (PendingRequest | null)[] = await Promise.all(
        events.map(async (event) => {
            try {
                const { id, amount: amountFrom, token: tokenIdFrom, from, to, chainID, revertableAddress } = event.args

                const chainId = chainID.toNumber() as ChainId

                const fromToken = symbiosis.findStable(tokenIdFrom, activeChainId)
                if (!fromToken) {
                    return null
                }

                const fromTokenAmount = new TokenAmount(fromToken, amountFrom.toHexString())

                let contractAddress: string
                let getState: (externalId: string) => Promise<number>

                if (type === 'synthesize') {
                    const synthesis = symbiosis.synthesis(chainId)
                    contractAddress = synthesis.address
                    getState = synthesis.synthesizeStates
                } else {
                    const portal = symbiosis.portal(chainId)
                    contractAddress = portal.address
                    getState = portal.unsynthesizeStates
                }

                const externalId = getExternalId({
                    internalId: id,
                    contractAddress,
                    revertableAddress,
                    chainId,
                })

                const { state: otherState } = await selectedContract.requests(externalId)

                // The transaction was not sent from the sender network
                if (otherState !== PendingRequestState.Sent) {
                    return null
                }

                const state = await getState(externalId)

                // The transaction still new/reverted in the receiver network
                if (state === PendingRequestState.Sent) {
                    return null
                }

                return {
                    internalId: id,
                    externalId,
                    from,
                    to,
                    revertableAddress,
                    fromTokenAmount,
                    state,
                    transactionHash: event.transactionHash,
                    type,
                    chainIdTo: chainId,
                    chainIdFrom: activeChainId,
                    status: 'new',
                    transactionHashReverted: undefined,
                }
            } catch {
                // TODO: Capture errors?
                return null
            }
        })
    )

    // Remove failed requests
    return pendingRequests.filter((pendingRequest): pendingRequest is PendingRequest => {
        return pendingRequest !== null
    })
}

export async function getPendingRequests(symbiosis: Symbiosis, address: string): Promise<PendingRequest[]> {
    const chains = symbiosis.chains()
    const chainsIds = chains.map((chain) => chain.id)

    const pendingRequestsPromises: Promise<PendingRequest[]>[] = []

    chains.forEach((chain) => {
        const params: Omit<GetChainPendingRequestsParams, 'type'> = {
            symbiosis,
            chainsIds,
            activeChainId: chain.id,
            address,
        }

        pendingRequestsPromises.push(
            getChainPendingRequests({ ...params, type: 'synthesize' }).catch(() => {
                return []
            }),
            getChainPendingRequests({ ...params, type: 'burn' }).catch(() => {
                return []
            })
        )
    })

    const pendingRequests = await Promise.all(pendingRequestsPromises)

    return pendingRequests.flat()
}
