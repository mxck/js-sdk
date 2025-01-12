/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { Bridge, BridgeInterface } from '../Bridge'

const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'oldMPC',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newMPC',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'effectiveTime',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256',
            },
        ],
        name: 'LogChangeMPC',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'bridge',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'callData',
                type: 'bytes',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'receiveSide',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'oppositeBridge',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256',
            },
        ],
        name: 'OracleRequest',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'admin',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'permission',
                type: 'bool',
            },
        ],
        name: 'SetAdminPermission',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'transmitter',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'status',
                type: 'bool',
            },
        ],
        name: 'SetTransmitterStatus',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_newMPC',
                type: 'address',
            },
        ],
        name: 'changeMPC',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'currentChainId',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_mpc',
                type: 'address',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'isAdmin',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'isTransmitter',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'mpc',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'newMPC',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'newMPCEffectiveTime',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'oldMPC',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: '_callData',
                type: 'bytes',
            },
            {
                internalType: 'address',
                name: '_receiveSide',
                type: 'address',
            },
        ],
        name: 'receiveRequestV2',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: '_callData',
                type: 'bytes',
            },
            {
                internalType: 'address',
                name: '_receiveSide',
                type: 'address',
            },
            {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
            },
        ],
        name: 'receiveRequestV2Signed',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_user',
                type: 'address',
            },
            {
                internalType: 'bool',
                name: '_permission',
                type: 'bool',
            },
        ],
        name: 'setAdminPermission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_transmitter',
                type: 'address',
            },
            {
                internalType: 'bool',
                name: '_status',
                type: 'bool',
            },
        ],
        name: 'setTransmitterStatus',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: '_callData',
                type: 'bytes',
            },
            {
                internalType: 'address',
                name: '_receiveSide',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_oppositeBridge',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256',
            },
        ],
        name: 'transmitRequestV2',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'token',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'withdrawFee',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
]

const _bytecode =
    '0x608060405234801561001057600080fd5b506117b5806100206000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c8063715018a6116100b2578063c00f8a3d11610081578063f2fde38b11610066578063f2fde38b14610291578063f75c2664146102a4578063f7f1baf0146102ac57600080fd5b8063c00f8a3d1461026b578063c4d66de81461027e57600080fd5b8063715018a61461022c57806375f3974b1461023457806384d61c97146102475780638da5cb5b1461025a57600080fd5b8063474a245a116101095780636cbadbfa116100ee5780636cbadbfa146101f05780636cebc9c2146101f65780636fac30071461020957600080fd5b8063474a245a146101b25780635b7b018c146101dd57600080fd5b80631095b6d71461013b57806319117d931461016357806324d7806c14610178578063405fb4f71461019b575b600080fd5b61014e6101493660046113d2565b6102bf565b60405190151581526020015b60405180910390f35b61017661017136600461140e565b61035f565b005b61014e6101863660046113b7565b60656020526000908152604090205460ff1681565b6101a460685481565b60405190815260200161015a565b6066546101c5906001600160a01b031681565b6040516001600160a01b03909116815260200161015a565b61014e6101eb3660046113b7565b610419565b466101a4565b6101766102043660046114f2565b6105a7565b61014e6102173660046113b7565b60696020526000908152604090205460ff1681565b61017661064b565b61017661024236600461140e565b6106b1565b610176610255366004611558565b610763565b6033546001600160a01b03166101c5565b6067546101c5906001600160a01b031681565b61017661028c3660046113b7565b6107ff565b61017661029f3660046113b7565b6108f6565b6101c56109d8565b6101766102ba3660046114a4565b610a03565b6000336102d46033546001600160a01b031690565b6001600160a01b031614806102f857503360009081526065602052604090205460ff165b6103495760405162461bcd60e51b815260206004820152601c60248201527f4f6e6c79206f776e6572206f722061646d696e2063616e2063616c6c0000000060448201526064015b60405180910390fd5b610354848484610a75565b5060015b9392505050565b6033546001600160a01b031633146103b95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610340565b6001600160a01b038216600081815260696020908152604091829020805460ff191685151590811790915591519182527feeec8b4e2d317fc608f301f859237a6081b9813f150a3fcfb02fd54276c8be4091015b60405180910390a25050565b6000336104246109d8565b6001600160a01b031614806104525750336104476033546001600160a01b031690565b6001600160a01b0316145b6104c35760405162461bcd60e51b8152602060048201526024808201527f42726964676556323a206f6e6c79206f776e6572206f72204d50432063616e2060448201527f63616c6c000000000000000000000000000000000000000000000000000000006064820152608401610340565b6001600160a01b0382166105195760405162461bcd60e51b815260206004820152601660248201527f42726964676556323a20616464726573732830783029000000000000000000006044820152606401610340565b6105216109d8565b606780546001600160a01b0392831673ffffffffffffffffffffffffffffffffffffffff19918216811790925560668054938616939091168317905542606881905591907fcda32bc39904597666dfa9f9c845714756e1ffffad55b52e0d344673a219812161058d4690565b60405190815260200160405180910390a45060015b919050565b3360009081526069602052604090205460ff166106065760405162461bcd60e51b815260206004820152601b60248201527f42726964676556323a206e6f742061207472616e736d697474657200000000006044820152606401610340565b7f532dbb6d061eee97ab4370060f60ede10b3dc361cc1214c07ae5e34dd86e6aaf308585858560405161063d959493929190611687565b60405180910390a150505050565b6033546001600160a01b031633146106a55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610340565b6106af6000610bdd565b565b6033546001600160a01b0316331461070b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610340565b6001600160a01b038216600081815260656020908152604091829020805460ff191685151590811790915591519182527f0e7bea53cb2b3130dd1aac8d56b61cc8da7ebab0432e2d1622513523d848f2e7910161040d565b828260601b604051602001610779929190611614565b60405160208183030381529060405280519060200120816107a261079b6109d8565b8383610c3c565b6107ee5760405162461bcd60e51b815260206004820152601b60248201527f42726964676556323a20696e76616c6964207369676e617475726500000000006044820152606401610340565b6107f88585610de6565b5050505050565b600054610100900460ff1680610818575060005460ff16155b61088a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610340565b600054610100900460ff161580156108ac576000805461ffff19166101011790555b6108b4610f27565b6066805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384161790554260685580156108f2576000805461ff00191690555b5050565b6033546001600160a01b031633146109505760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610340565b6001600160a01b0381166109cc5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610340565b6109d581610bdd565b50565b600060685442106109f357506066546001600160a01b031690565b506067546001600160a01b031690565b610a0b6109d8565b6001600160a01b0316336001600160a01b031614610a6b5760405162461bcd60e51b815260206004820152601360248201527f42726964676556323a20666f7262696464656e000000000000000000000000006044820152606401610340565b6108f28282610de6565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529151600092839290871691610aff91906115f8565b6000604051808303816000865af19150503d8060008114610b3c576040519150601f19603f3d011682016040523d82523d6000602084013e610b41565b606091505b5091509150818015610b6b575080511580610b6b575080806020019051810190610b6b9190611445565b6107f85760405162461bcd60e51b815260206004820152602d60248201527f5472616e7366657248656c7065723a3a736166655472616e736665723a20747260448201527f616e73666572206661696c6564000000000000000000000000000000000000006064820152608401610340565b603380546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000806000610c4b8585610ff8565b90925090506000816004811115610c6457610c64611713565b148015610c825750856001600160a01b0316826001600160a01b0316145b15610c9257600192505050610358565b600080876001600160a01b0316631626ba7e60e01b8888604051602401610cba9291906116c6565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909416939093179092529051610d2591906115f8565b600060405180830381855afa9150503d8060008114610d60576040519150601f19603f3d011682016040523d82523d6000602084013e610d65565b606091505b5091509150818015610d78575080516020145b8015610dda575080517f1626ba7e0000000000000000000000000000000000000000000000000000000090610db69083016020908101908401611462565b7fffffffff0000000000000000000000000000000000000000000000000000000016145b98975050505050505050565b6001600160a01b03811660009081526069602052604090205460ff16610e4e5760405162461bcd60e51b815260206004820152601f60248201527f42726964676556323a20756e74727573746564207472616e736d6974746572006044820152606401610340565b600080826001600160a01b031684604051610e6991906115f8565b6000604051808303816000865af19150503d8060008114610ea6576040519150601f19603f3d011682016040523d82523d6000602084013e610eab565b606091505b5091509150818015610ed5575080511580610ed5575080806020019051810190610ed59190611445565b610f215760405162461bcd60e51b815260206004820152601560248201527f42726964676556323a2063616c6c206661696c656400000000000000000000006044820152606401610340565b50505050565b600054610100900460ff1680610f40575060005460ff16155b610fb25760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610340565b600054610100900460ff16158015610fd4576000805461ffff19166101011790555b610fdc611068565b610fe4611128565b80156109d5576000805461ff001916905550565b60008082516041141561102f5760208301516040840151606085015160001a611023878285856111de565b94509450505050611061565b825160401415611059576020830151604084015161104e8683836112cb565b935093505050611061565b506000905060025b9250929050565b600054610100900460ff1680611081575060005460ff16155b6110f35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610340565b600054610100900460ff16158015610fe4576000805461ffff191661010117905580156109d5576000805461ff001916905550565b600054610100900460ff1680611141575060005460ff16155b6111b35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610340565b600054610100900460ff161580156111d5576000805461ffff19166101011790555b610fe433610bdd565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561121557506000905060036112c2565b8460ff16601b1415801561122d57508460ff16601c14155b1561123e57506000905060046112c2565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611292573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166112bb576000600192509250506112c2565b9150600090505b94509492505050565b6000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831660ff84901c601b01611305878288856111de565b935093505050935093915050565b80356001600160a01b03811681146105a257600080fd5b600082601f83011261133b57600080fd5b813567ffffffffffffffff8082111561135657611356611742565b604051601f8301601f19908116603f0116810190828211818310171561137e5761137e611742565b8160405283815286602085880101111561139757600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000602082840312156113c957600080fd5b61035882611313565b6000806000606084860312156113e757600080fd5b6113f084611313565b92506113fe60208501611313565b9150604084013590509250925092565b6000806040838503121561142157600080fd5b61142a83611313565b9150602083013561143a81611771565b809150509250929050565b60006020828403121561145757600080fd5b815161035881611771565b60006020828403121561147457600080fd5b81517fffffffff000000000000000000000000000000000000000000000000000000008116811461035857600080fd5b600080604083850312156114b757600080fd5b823567ffffffffffffffff8111156114ce57600080fd5b6114da8582860161132a565b9250506114e960208401611313565b90509250929050565b6000806000806080858703121561150857600080fd5b843567ffffffffffffffff81111561151f57600080fd5b61152b8782880161132a565b94505061153a60208601611313565b925061154860408601611313565b9396929550929360600135925050565b60008060006060848603121561156d57600080fd5b833567ffffffffffffffff8082111561158557600080fd5b6115918783880161132a565b945061159f60208701611313565b935060408601359150808211156115b557600080fd5b506115c28682870161132a565b9150509250925092565b600081518084526115e48160208601602086016116e7565b601f01601f19169290920160200192915050565b6000825161160a8184602087016116e7565b9190910192915050565b7f726563656976655265717565737456320000000000000000000000000000000081526000835161164c8160108501602088016116e7565b80830190507fffffffffffffffffffffffffffffffffffffffff00000000000000000000000084166010820152602481019150509392505050565b60006001600160a01b03808816835260a060208401526116aa60a08401886115cc565b9581166040840152939093166060820152608001525092915050565b8281526040602082015260006116df60408301846115cc565b949350505050565b60005b838110156117025781810151838201526020016116ea565b83811115610f215750506000910152565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b80151581146109d557600080fdfea2646970667358221220d8508d262dff2b714685cd1dd6e088d2b02f4b050a3b0e900aa4946f1cc52a7864736f6c63430008070033'

type BridgeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: BridgeConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class Bridge__factory extends ContractFactory {
    constructor(...args: BridgeConstructorParams) {
        if (isSuperArgs(args)) {
            super(...args)
        } else {
            super(_abi, _bytecode, args[0])
        }
        this.contractName = 'Bridge'
    }

    deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Bridge> {
        return super.deploy(overrides || {}) as Promise<Bridge>
    }
    getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
        return super.getDeployTransaction(overrides || {})
    }
    attach(address: string): Bridge {
        return super.attach(address) as Bridge
    }
    connect(signer: Signer): Bridge__factory {
        return super.connect(signer) as Bridge__factory
    }
    static readonly contractName: 'Bridge'
    public readonly contractName: 'Bridge'
    static readonly bytecode = _bytecode
    static readonly abi = _abi
    static createInterface(): BridgeInterface {
        return new utils.Interface(_abi) as BridgeInterface
    }
    static connect(address: string, signerOrProvider: Signer | Provider): Bridge {
        return new Contract(address, _abi, signerOrProvider) as Bridge
    }
}
