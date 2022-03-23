/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { Fabric, FabricInterface } from '../Fabric'

const _abi = [
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
                indexed: false,
                internalType: 'address',
                name: 'rToken',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'chainID',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'sToken',
                type: 'address',
            },
        ],
        name: 'RepresentationCreated',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_rtoken',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_chainID',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: '_stokenName',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_stokenSymbol',
                type: 'string',
            },
            {
                internalType: 'uint8',
                name: '_decimals',
                type: 'uint8',
            },
        ],
        name: 'createRepresentationByAdmin',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_origin',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_nonce',
                type: 'uint256',
            },
        ],
        name: 'getAddressComplex',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_creator',
                type: 'address',
            },
            {
                internalType: 'bytes32',
                name: '_bytecodeHash',
                type: 'bytes32',
            },
            {
                internalType: 'uint256',
                name: '_salt',
                type: 'uint256',
            },
        ],
        name: 'getAddressSalted',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_syntTokenAdr',
                type: 'address',
            },
        ],
        name: 'getRealRepresentation',
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
                internalType: 'address',
                name: '_realTokenAdr',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_chainID',
                type: 'uint256',
            },
        ],
        name: 'getSyntRepresentation',
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
                internalType: 'bytes32',
                name: '_key',
                type: 'bytes32',
            },
        ],
        name: 'getSyntRepresentationByKey',
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
                internalType: 'address',
                name: '_synthesis',
                type: 'address',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
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
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'synthesis',
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
                internalType: 'address',
                name: '_to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: '_stoken',
                type: 'address',
            },
        ],
        name: 'synthesize',
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
                internalType: 'address',
                name: '_to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: '_stoken',
                type: 'address',
            },
        ],
        name: 'unsynthesize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
]

const _bytecode =
    '0x608060405234801561001057600080fd5b50612e62806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620000f15760003560e01c80638da5cb5b1162000097578063c4d66de8116200006e578063c4d66de81462000320578063e49029fc1462000349578063e7ca9aaf1462000382578063f2fde38b14620004d257600080fd5b80638da5cb5b14620002a65780639ad390fa14620002b8578063a8160b7614620002e757600080fd5b8063506890a011620000cc578063506890a014620001ee578063715018a614620002655780637cf8f327146200027157600080fd5b806308ab584114620000f6578063161acb4714620001a25780632af896fb14620001da575b600080fd5b62000186600480360360608110156200010e57600080fd5b50604080517fff000000000000000000000000000000000000000000000000000000000000006020828101919091526bffffffffffffffffffffffff19843560601b16602183015282840135603583015292830135605580830191909152825180830390910181526075909101909152805191012090565b604080516001600160a01b039092168252519081900360200190f35b6200018660048036036020811015620001ba57600080fd5b50356001600160a01b039081166000908152606760205260409020541690565b60655462000186906001600160a01b031681565b62000186600480360360408110156200020657600080fd5b5060408051823560601b6bffffffffffffffffffffffff1916602082810191909152928301356034808301919091528251808303909101815260549091018252805190830120600090815260669092529020546001600160a01b031690565b6200026f620004fb565b005b62000186600480360360208110156200028957600080fd5b50356000908152606660205260409020546001600160a01b031690565b6033546001600160a01b031662000186565b6200018660048036036040811015620002d057600080fd5b506001600160a01b03813516906020013562000569565b6200026f60048036036060811015620002ff57600080fd5b506001600160a01b03813581169160208101359160409091013516620009a2565b6200026f600480360360208110156200033857600080fd5b50356001600160a01b031662000a63565b6200026f600480360360608110156200036157600080fd5b506001600160a01b0381358116916020810135916040909101351662000b68565b6200026f600480360360a08110156200039a57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135640100000000811115620003cb57600080fd5b820183602082011115620003de57600080fd5b803590602001918460018302840111640100000000831117156200040157600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092959493602081019350359150506401000000008111156200045557600080fd5b8201836020820111156200046857600080fd5b803590602001918460018302840111640100000000831117156200048b57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903560ff16915062000c0b9050565b6200026f60048036036020811015620004ea57600080fd5b50356001600160a01b031662000c7d565b6033546001600160a01b031633146200055b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b62000567600062000d65565b565b6000606082620005ff5750604080517fd6000000000000000000000000000000000000000000000000000000000000006020820152602560fa1b60218201526bffffffffffffffffffffffff19606086901b1660228201527f8000000000000000000000000000000000000000000000000000000000000000603682015281516017818303018152603790910190915262000993565b607f83116200069a5750604080517fd6000000000000000000000000000000000000000000000000000000000000006020820152602560fa1b60218201526bffffffffffffffffffffffff19606086901b16602282015260f884901b7fff0000000000000000000000000000000000000000000000000000000000000016603682015281516017818303018152603790910190915262000993565b60ff83116200075b5750604080517fd7000000000000000000000000000000000000000000000000000000000000006020820152602560fa1b60218201526bffffffffffffffffffffffff19606086901b1660228201527f8100000000000000000000000000000000000000000000000000000000000000603682015260f884901b7fff0000000000000000000000000000000000000000000000000000000000000016603782015281516018818303018152603890910190915262000993565b61ffff83116200081d5750604080517fd8000000000000000000000000000000000000000000000000000000000000006020820152602560fa1b60218201526bffffffffffffffffffffffff19606086901b1660228201527f820000000000000000000000000000000000000000000000000000000000000060368201527fffff00000000000000000000000000000000000000000000000000000000000060f085901b16603782015281516019818303018152603990910190915262000993565b62ffffff8311620008e05750604080517fd9000000000000000000000000000000000000000000000000000000000000006020820152602560fa1b60218201526bffffffffffffffffffffffff19606086901b1660228201527f830000000000000000000000000000000000000000000000000000000000000060368201527fffffff000000000000000000000000000000000000000000000000000000000060e885901b1660378201528151601a818303018152603a90910190915262000993565b50604080517fda000000000000000000000000000000000000000000000000000000000000006020820152602560fa1b60218201526bffffffffffffffffffffffff19606086901b1660228201527f840000000000000000000000000000000000000000000000000000000000000060368201527fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1660378201528151601b818303018152603b9091019091525b80516020909101209392505050565b6065546001600160a01b03163314620009ed5760405162461bcd60e51b815260040180806020018281038252602181526020018062002de36021913960400191505060405180910390fd5b806001600160a01b0316639dc29fac84846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801562000a4557600080fd5b505af115801562000a5a573d6000803e3d6000fd5b50505050505050565b600054610100900460ff168062000a7d575060005460ff16155b62000af15760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840162000552565b600054610100900460ff1615801562000b14576000805461ffff19166101011790555b62000b1e62000dcf565b606580547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038416179055801562000b64576000805461ff00191690555b5050565b6065546001600160a01b0316331462000bb35760405162461bcd60e51b815260040180806020018281038252602181526020018062002de36021913960400191505060405180910390fd5b806001600160a01b03166340c10f1984846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801562000a4557600080fd5b6033546001600160a01b0316331462000c675760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000552565b62000c76858585858562000ea9565b5050505050565b6033546001600160a01b0316331462000cd95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000552565b6001600160a01b03811662000d575760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840162000552565b62000d628162000d65565b50565b603380546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff168062000de9575060005460ff16155b62000e5d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840162000552565b600054610100900460ff1615801562000e80576000805461ffff19166101011790555b62000e8a62001170565b62000e9462001235565b801562000d62576000805461ff001916905550565b604080516bffffffffffffffffffffffff19606088901b16602080830191909152603480830188905283518084039091018152605490920183528151918101919091206000908152606690915220546001600160a01b0316801562000f405760405162461bcd60e51b815260040180806020018281038252602981526020018062002e046029913960400191505060405180910390fd5b600084848460405162000f5390620012f1565b60ff82166040820152606080825284519082015283518190602080830191608084019188019080838360005b8381101562000f9957818101518382015260200162000f7f565b50505050905090810190601f16801562000fc75780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b8381101562000ffc57818101518382015260200162000fe2565b50505050905090810190601f1680156200102a5780820380516001836020036101000a031916815260200191505b5095505050505050604051809103906000f0801580156200104f573d6000803e3d6000fd5b5090508660676000836001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508060666000898960405160200180836001600160a01b031660601b81526014018281526020019250505060405160208183030381529060405280519060200120815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055507fe33e6b41ee9908e3919a380a52ae7059282c36b87adeee0d2ac1b05dfc50be6f87878360405180846001600160a01b03168152602001838152602001826001600160a01b03168152602001935050505060405180910390a150505050505050565b600054610100900460ff16806200118a575060005460ff16155b620011fe5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840162000552565b600054610100900460ff1615801562000e94576000805461ffff1916610101179055801562000d62576000805461ff001916905550565b600054610100900460ff16806200124f575060005460ff16155b620012c35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840162000552565b600054610100900460ff16158015620012e6576000805461ffff19166101011790555b62000e943362000d65565b611ae380620013008339019056fe6101606040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610120523480156200003757600080fd5b5060405162001ae338038062001ae38339810160408190526200005a9162000351565b6040518060400160405280600981526020016853796d62696f73697360b81b81525080604051806040016040528060018152602001603160f81b8152508585620000b3620000ad620001a060201b60201c565b620001a4565b8151620000c8906004906020850190620001f4565b508051620000de906005906020840190620001f4565b5050825160208085019190912083518483012060c082815260e08290524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81890181905281830188905260608201879052608082019490945230818401528151808203909301835290930190925281519190940120919350919060805261010052505050505060f81b7fff00000000000000000000000000000000000000000000000000000000000000166101405250620004299050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546200020290620003d6565b90600052602060002090601f01602090048101928262000226576000855562000271565b82601f106200024157805160ff191683800117855562000271565b8280016001018555821562000271579182015b828111156200027157825182559160200191906001019062000254565b506200027f92915062000283565b5090565b5b808211156200027f576000815560010162000284565b600082601f830112620002ac57600080fd5b81516001600160401b0380821115620002c957620002c962000413565b604051601f8301601f19908116603f01168101908282118183101715620002f457620002f462000413565b816040528381526020925086838588010111156200031157600080fd5b600091505b8382101562000335578582018301518183018401529082019062000316565b83821115620003475760008385830101525b9695505050505050565b6000806000606084860312156200036757600080fd5b83516001600160401b03808211156200037f57600080fd5b6200038d878388016200029a565b94506020860151915080821115620003a457600080fd5b50620003b3868287016200029a565b925050604084015160ff81168114620003cb57600080fd5b809150509250925092565b600181811c90821680620003eb57607f821691505b602082108114156200040d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b60805160a05160c05160e05161010051610120516101405160f81c61165c6200048760003960006101c30152600061074601526000610cff01526000610d4e01526000610d2901526000610cad01526000610cd6015261165c6000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c8063715018a6116100cd578063a457c2d711610081578063d505accf11610066578063d505accf146102bd578063dd62ed3e146102d0578063f2fde38b1461030957600080fd5b8063a457c2d714610297578063a9059cbb146102aa57600080fd5b80638da5cb5b116100b25780638da5cb5b1461026157806395d89b411461027c5780639dc29fac1461028457600080fd5b8063715018a6146102465780637ecebe001461024e57600080fd5b8063313ce56711610124578063395093511161010957806339509351146101f557806340c10f191461020857806370a082311461021d57600080fd5b8063313ce567146101bc5780633644e515146101ed57600080fd5b806306fdde0314610156578063095ea7b31461017457806318160ddd1461019757806323b872dd146101a9575b600080fd5b61015e61031c565b60405161016b9190611541565b60405180910390f35b610187610182366004611517565b6103ae565b604051901515815260200161016b565b6003545b60405190815260200161016b565b6101876101b7366004611468565b6103c4565b60405160ff7f000000000000000000000000000000000000000000000000000000000000000016815260200161016b565b61019b610488565b610187610203366004611517565b610497565b61021b610216366004611517565b6104d3565b005b61019b61022b366004611413565b6001600160a01b031660009081526001602052604090205490565b61021b61053b565b61019b61025c366004611413565b6105a1565b6000546040516001600160a01b03909116815260200161016b565b61015e6105c1565b61021b610292366004611517565b6105d0565b6101876102a5366004611517565b610634565b6101876102b8366004611517565b6106e5565b61021b6102cb3660046114a4565b6106f2565b61019b6102de366004611435565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b61021b610317366004611413565b610856565b60606004805461032b906115c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610357906115c5565b80156103a45780601f10610379576101008083540402835291602001916103a4565b820191906000526020600020905b81548152906001019060200180831161038757829003601f168201915b5050505050905090565b60006103bb338484610938565b50600192915050565b60006103d1848484610a91565b6001600160a01b0384166000908152600260209081526040808320338452909152902054828110156104705760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61047d8533858403610938565b506001949350505050565b6000610492610ca9565b905090565b3360008181526002602090815260408083206001600160a01b038716845290915281205490916103bb9185906104ce908690611596565b610938565b6000546001600160a01b0316331461052d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610467565b6105378282610d9c565b5050565b6000546001600160a01b031633146105955760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610467565b61059f6000610e7b565b565b6001600160a01b0381166000908152600660205260408120545b92915050565b60606005805461032b906115c5565b6000546001600160a01b0316331461062a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610467565b6105378282610ee3565b3360009081526002602090815260408083206001600160a01b0386168452909152812054828110156106ce5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610467565b6106db3385858403610938565b5060019392505050565b60006103bb338484610a91565b834211156107425760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610467565b60007f00000000000000000000000000000000000000000000000000000000000000008888886107718c611060565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006107cc82611088565b905060006107dc828787876110f1565b9050896001600160a01b0316816001600160a01b03161461083f5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610467565b61084a8a8a8a610938565b50505050505050505050565b6000546001600160a01b031633146108b05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610467565b6001600160a01b03811661092c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610467565b61093581610e7b565b50565b6001600160a01b0383166109b35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610467565b6001600160a01b038216610a2f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610467565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316610b0d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610467565b6001600160a01b038216610b895760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610467565b6001600160a01b03831660009081526001602052604090205481811015610c185760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610467565b6001600160a01b03808516600090815260016020526040808220858503905591851681529081208054849290610c4f908490611596565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c9b91815260200190565b60405180910390a350505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461415610cf857507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6001600160a01b038216610df25760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610467565b8060036000828254610e049190611596565b90915550506001600160a01b03821660009081526001602052604081208054839290610e31908490611596565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038216610f5f5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610467565b6001600160a01b03821660009081526001602052604090205481811015610fee5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610467565b6001600160a01b038316600090815260016020526040812083830390556003805484929061101d9084906115ae565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610a84565b6001600160a01b03811660009081526006602052604090208054600181018255905b50919050565b60006105bb611095610ca9565b836040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061110287878787611119565b9150915061110f81611206565b5095945050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561115057506000905060036111fd565b8460ff16601b1415801561116857508460ff16601c14155b1561117957506000905060046111fd565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156111cd573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166111f6576000600192509250506111fd565b9150600090505b94509492505050565b600081600481111561121a5761121a611610565b14156112235750565b600181600481111561123757611237611610565b14156112855760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610467565b600281600481111561129957611299611610565b14156112e75760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610467565b60038160048111156112fb576112fb611610565b141561136f5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610467565b600481600481111561138357611383611610565b14156109355760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610467565b80356001600160a01b038116811461140e57600080fd5b919050565b60006020828403121561142557600080fd5b61142e826113f7565b9392505050565b6000806040838503121561144857600080fd5b611451836113f7565b915061145f602084016113f7565b90509250929050565b60008060006060848603121561147d57600080fd5b611486846113f7565b9250611494602085016113f7565b9150604084013590509250925092565b600080600080600080600060e0888a0312156114bf57600080fd5b6114c8886113f7565b96506114d6602089016113f7565b95506040880135945060608801359350608088013560ff811681146114fa57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561152a57600080fd5b611533836113f7565b946020939093013593505050565b600060208083528351808285015260005b8181101561156e57858101830151858201604001528201611552565b81811115611580576000604083870101525b50601f01601f1916929092016040019392505050565b600082198211156115a9576115a96115fa565b500190565b6000828210156115c0576115c06115fa565b500390565b600181811c908216806115d957607f821691505b6020821081141561108257634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea26469706673582212205e87250faa74071e634140d46a1b80962276d8fb1a805e20c1f0e4752ce219ad64736f6c6343000807003353796d623a2063616c6c6572206973206e6f74207468652073796e74686573697353796d623a20746f6b656e20726570726573656e746174696f6e20616c726561647920657869737473a2646970667358221220e935b64e74785cd5987dba0b5af2a23904a2120e7c71257c35b3b4fc72bf69ee64736f6c63430008070033'

type FabricConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: FabricConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class Fabric__factory extends ContractFactory {
    constructor(...args: FabricConstructorParams) {
        if (isSuperArgs(args)) {
            super(...args)
        } else {
            super(_abi, _bytecode, args[0])
        }
        this.contractName = 'Fabric'
    }

    deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Fabric> {
        return super.deploy(overrides || {}) as Promise<Fabric>
    }
    getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
        return super.getDeployTransaction(overrides || {})
    }
    attach(address: string): Fabric {
        return super.attach(address) as Fabric
    }
    connect(signer: Signer): Fabric__factory {
        return super.connect(signer) as Fabric__factory
    }
    static readonly contractName: 'Fabric'
    public readonly contractName: 'Fabric'
    static readonly bytecode = _bytecode
    static readonly abi = _abi
    static createInterface(): FabricInterface {
        return new utils.Interface(_abi) as FabricInterface
    }
    static connect(address: string, signerOrProvider: Signer | Provider): Fabric {
        return new Contract(address, _abi, signerOrProvider) as Fabric
    }
}