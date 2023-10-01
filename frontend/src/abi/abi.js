export const cert ={
    "contractName": "CertficateMaker",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "tokenURI",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "student",
            "type": "address"
          }
        ],
        "name": "mintNFT",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"tokenURI\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"student\",\"type\":\"address\"}],\"name\":\"mintNFT\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `owner` enables `approved` to manage the `tokenId` token.\"},\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `tokenId` token is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/CertificateMaker.sol\":\"CertficateMaker\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x1e854874c68bec05be100dc0092cb5fbbc71253d370ae98ddef248bbfc3fe118\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ef0fb6e809779426dc2ac201149bbad4aecdc5810874f2843b050e8b5fef8d30\",\"dweb:/ipfs/QmPDRjaNxmcyxLUKvv8Fxk5eWcf7xvC5S9JpbtqvE7Cadu\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xab28a56179c1db258c9bf5235b382698cb650debecb51b23d12be9e241374b68\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://daae589a9d6fa7e55f99f86c0a16796ca490f243fb3693632c3711c0646c1d56\",\"dweb:/ipfs/QmR3zpd7wNw3rcUdekwiv6FYHJqksuTCXLVioTxu6Fbxk3\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708\",\"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\":{\"keccak256\":\"0x5c3501c1b70fcfc64417e9da5cc6a3597191baa354781e508e1e14cc0e50a038\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://899c87a849a94c848818d0afede6961d2c87665af1dd23a5c983e78981a65691\",\"dweb:/ipfs/QmUeFDffQRDmX87FX3MRxN3bmpUxDTWpWLwPJzeAJ3yF6H\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146\",\"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xf96f969e24029d43d0df89e59d365f277021dac62b48e1c1e3ebe0acdd7f1ca1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ec772b45a624be516f1c81970caa8a2e144301e9d0921cbc1a2789fef39a1269\",\"dweb:/ipfs/QmNyjwxCrGhQMyzLD93oUobJXVe9ceJvRvfXwbEtuxPiEj\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee\",\"dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xa4d1d62251f8574deb032a35fc948386a9b4de74b812d4f545a1ac120486b48a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8c969013129ba9e651a20735ef659fef6d8a1139ea3607bd4b26ddea2d645634\",\"dweb:/ipfs/QmVhVa6LGuzAcB8qgDtVHRkucn4ihj5UZr8xBLcJkP6ucb\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xa1e8e83cd0087785df04ac79fb395d9f3684caeaf973d9e2c71caef723a3a5d6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://33bbf48cc069be677705037ba7520c22b1b622c23b33e1a71495f2d36549d40b\",\"dweb:/ipfs/Qmct36zWXv3j7LZB83uwbg7TXwnZSN1fqHNDZ93GG98bGz\"]},\"project:/contracts/CertificateMaker.sol\":{\"keccak256\":\"0x86065a295ee0a83469f7a0e970c32bad85ac372e2bda970c47a2cc62d2f0d899\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bb14f916a272bca26ccee03c4c18b2e0139818412bce46d031394d9309d9b66d\",\"dweb:/ipfs/QmUJSZn9GkiuDyzcQiQE8dEm6YsTz1TEodWTZbH8dX4wZ9\"]}},\"version\":1}",
    "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600f81526020017f4d792043657274696669636174657300000000000000000000000000000000008152506040518060400160405280600381526020017f4e4654000000000000000000000000000000000000000000000000000000000081525081600090816200008f919062000412565b508060019081620000a1919062000412565b505050620000c4620000b8620000ca60201b60201c565b620000d260201b60201c565b620004f9565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200021a57607f821691505b60208210810362000230576200022f620001d2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200029a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200025b565b620002a686836200025b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002f3620002ed620002e784620002be565b620002c8565b620002be565b9050919050565b6000819050919050565b6200030f83620002d2565b620003276200031e82620002fa565b84845462000268565b825550505050565b600090565b6200033e6200032f565b6200034b81848462000304565b505050565b5b8181101562000373576200036760008262000334565b60018101905062000351565b5050565b601f821115620003c2576200038c8162000236565b62000397846200024b565b81016020851015620003a7578190505b620003bf620003b6856200024b565b83018262000350565b50505b505050565b600082821c905092915050565b6000620003e760001984600802620003c7565b1980831691505092915050565b6000620004028383620003d4565b9150826002028217905092915050565b6200041d8262000198565b67ffffffffffffffff811115620004395762000438620001a3565b5b62000445825462000201565b6200045282828562000377565b600060209050601f8311600181146200048a576000841562000475578287015190505b620004818582620003f4565b865550620004f1565b601f1984166200049a8662000236565b60005b82811015620004c4578489015182556001820191506020850194506020810190506200049d565b86831015620004e45784890151620004e0601f891682620003d4565b8355505b6001600288020188555050505b505050505050565b612e7380620005096000396000f3fe6080604052600436106100fe5760003560e01c806370a0823111610095578063a22cb46511610064578063a22cb4651461033a578063b88d4fde14610363578063c87b56dd1461038c578063e985e9c5146103c9578063f2fde38b14610406576100fe565b806370a0823114610290578063715018a6146102cd5780638da5cb5b146102e457806395d89b411461030f576100fe565b8063095ea7b3116100d1578063095ea7b3146101d857806323b872dd1461020157806342842e0e1461022a5780636352211e14610253576100fe565b806301ffc9a71461010357806304f322791461014057806306fdde0314610170578063081812fc1461019b575b600080fd5b34801561010f57600080fd5b5061012a60048036038101906101259190611c64565b61042f565b6040516101379190611cac565b60405180910390f35b61015a60048036038101906101559190611e6b565b610511565b6040516101679190611ee0565b60405180910390f35b34801561017c57600080fd5b50610185610549565b6040516101929190611f7a565b60405180910390f35b3480156101a757600080fd5b506101c260048036038101906101bd9190611fc8565b6105db565b6040516101cf9190612004565b60405180910390f35b3480156101e457600080fd5b506101ff60048036038101906101fa919061201f565b610621565b005b34801561020d57600080fd5b506102286004803603810190610223919061205f565b610738565b005b34801561023657600080fd5b50610251600480360381019061024c919061205f565b610798565b005b34801561025f57600080fd5b5061027a60048036038101906102759190611fc8565b6107b8565b6040516102879190612004565b60405180910390f35b34801561029c57600080fd5b506102b760048036038101906102b291906120b2565b61083e565b6040516102c49190611ee0565b60405180910390f35b3480156102d957600080fd5b506102e26108f5565b005b3480156102f057600080fd5b506102f9610909565b6040516103069190612004565b60405180910390f35b34801561031b57600080fd5b50610324610933565b6040516103319190611f7a565b60405180910390f35b34801561034657600080fd5b50610361600480360381019061035c919061210b565b6109c5565b005b34801561036f57600080fd5b5061038a600480360381019061038591906121ec565b6109db565b005b34801561039857600080fd5b506103b360048036038101906103ae9190611fc8565b610a3d565b6040516103c09190611f7a565b60405180910390f35b3480156103d557600080fd5b506103f060048036038101906103eb919061226f565b610b4f565b6040516103fd9190611cac565b60405180910390f35b34801561041257600080fd5b5061042d600480360381019061042891906120b2565b610be3565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104fa57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061050a575061050982610c66565b5b9050919050565b600061051d6008610cd0565b60006105296008610ce6565b90506105358382610cf4565b61053f8185610f11565b8091505092915050565b606060008054610558906122de565b80601f0160208091040260200160405190810160405280929190818152602001828054610584906122de565b80156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b5050505050905090565b60006105e682610f7e565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061062c826107b8565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361069c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069390612381565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106bb610fc9565b73ffffffffffffffffffffffffffffffffffffffff1614806106ea57506106e9816106e4610fc9565b610b4f565b5b610729576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072090612413565b60405180910390fd5b6107338383610fd1565b505050565b610749610743610fc9565b8261108a565b610788576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077f906124a5565b60405180910390fd5b61079383838361111f565b505050565b6107b3838383604051806020016040528060008152506109db565b505050565b6000806107c483611418565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610835576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082c90612511565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a5906125a3565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6108fd611455565b61090760006114d3565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610942906122de565b80601f016020809104026020016040519081016040528092919081815260200182805461096e906122de565b80156109bb5780601f10610990576101008083540402835291602001916109bb565b820191906000526020600020905b81548152906001019060200180831161099e57829003601f168201915b5050505050905090565b6109d76109d0610fc9565b8383611599565b5050565b6109ec6109e6610fc9565b8361108a565b610a2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a22906124a5565b60405180910390fd5b610a3784848484611705565b50505050565b6060610a4882610f7e565b6000600660008481526020019081526020016000208054610a68906122de565b80601f0160208091040260200160405190810160405280929190818152602001828054610a94906122de565b8015610ae15780601f10610ab657610100808354040283529160200191610ae1565b820191906000526020600020905b815481529060010190602001808311610ac457829003601f168201915b505050505090506000610af2611761565b90506000815103610b07578192505050610b4a565b600082511115610b3c578082604051602001610b249291906125ff565b60405160208183030381529060405292505050610b4a565b610b4584611778565b925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610beb611455565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5190612695565b60405180910390fd5b610c63816114d3565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5a90612701565b60405180910390fd5b610d6c816117e0565b15610dac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da39061276d565b60405180910390fd5b610dba600083836001611821565b610dc3816117e0565b15610e03576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dfa9061276d565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610f0d600083836001611827565b5050565b610f1a826117e0565b610f59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f50906127ff565b60405180910390fd5b80600660008481526020019081526020016000209081610f7991906129cb565b505050565b610f87816117e0565b610fc6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fbd90612511565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611044836107b8565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080611096836107b8565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806110d857506110d78185610b4f565b5b8061111657508373ffffffffffffffffffffffffffffffffffffffff166110fe846105db565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661113f826107b8565b73ffffffffffffffffffffffffffffffffffffffff1614611195576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118c90612b0f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611204576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111fb90612ba1565b60405180910390fd5b6112118383836001611821565b8273ffffffffffffffffffffffffffffffffffffffff16611231826107b8565b73ffffffffffffffffffffffffffffffffffffffff1614611287576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161127e90612b0f565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46114138383836001611827565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61145d610fc9565b73ffffffffffffffffffffffffffffffffffffffff1661147b610909565b73ffffffffffffffffffffffffffffffffffffffff16146114d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114c890612c0d565b60405180910390fd5b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611607576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115fe90612c79565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516116f89190611cac565b60405180910390a3505050565b61171084848461111f565b61171c8484848461182d565b61175b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161175290612d0b565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061178382610f7e565b600061178d611761565b905060008151116117ad57604051806020016040528060008152506117d8565b806117b7846119b4565b6040516020016117c89291906125ff565b6040516020818303038152906040525b915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1661180283611418565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b600061184e8473ffffffffffffffffffffffffffffffffffffffff16611a82565b156119a7578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611877610fc9565b8786866040518563ffffffff1660e01b81526004016118999493929190612d80565b6020604051808303816000875af19250505080156118d557506040513d601f19601f820116820180604052508101906118d29190612de1565b60015b611957573d8060008114611905576040519150601f19603f3d011682016040523d82523d6000602084013e61190a565b606091505b50600081510361194f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161194690612d0b565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506119ac565b600190505b949350505050565b6060600060016119c384611aa5565b01905060008167ffffffffffffffff8111156119e2576119e1611ce2565b5b6040519080825280601f01601f191660200182016040528015611a145781602001600182028036833780820191505090505b509050600082602001820190505b600115611a77578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611a6b57611a6a612e0e565b5b04945060008503611a22575b819350505050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611b03577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611af957611af8612e0e565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611b40576d04ee2d6d415b85acef81000000008381611b3657611b35612e0e565b5b0492506020810190505b662386f26fc100008310611b6f57662386f26fc100008381611b6557611b64612e0e565b5b0492506010810190505b6305f5e1008310611b98576305f5e1008381611b8e57611b8d612e0e565b5b0492506008810190505b6127108310611bbd576127108381611bb357611bb2612e0e565b5b0492506004810190505b60648310611be05760648381611bd657611bd5612e0e565b5b0492506002810190505b600a8310611bef576001810190505b80915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611c4181611c0c565b8114611c4c57600080fd5b50565b600081359050611c5e81611c38565b92915050565b600060208284031215611c7a57611c79611c02565b5b6000611c8884828501611c4f565b91505092915050565b60008115159050919050565b611ca681611c91565b82525050565b6000602082019050611cc16000830184611c9d565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611d1a82611cd1565b810181811067ffffffffffffffff82111715611d3957611d38611ce2565b5b80604052505050565b6000611d4c611bf8565b9050611d588282611d11565b919050565b600067ffffffffffffffff821115611d7857611d77611ce2565b5b611d8182611cd1565b9050602081019050919050565b82818337600083830152505050565b6000611db0611dab84611d5d565b611d42565b905082815260208101848484011115611dcc57611dcb611ccc565b5b611dd7848285611d8e565b509392505050565b600082601f830112611df457611df3611cc7565b5b8135611e04848260208601611d9d565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611e3882611e0d565b9050919050565b611e4881611e2d565b8114611e5357600080fd5b50565b600081359050611e6581611e3f565b92915050565b60008060408385031215611e8257611e81611c02565b5b600083013567ffffffffffffffff811115611ea057611e9f611c07565b5b611eac85828601611ddf565b9250506020611ebd85828601611e56565b9150509250929050565b6000819050919050565b611eda81611ec7565b82525050565b6000602082019050611ef56000830184611ed1565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611f35578082015181840152602081019050611f1a565b60008484015250505050565b6000611f4c82611efb565b611f568185611f06565b9350611f66818560208601611f17565b611f6f81611cd1565b840191505092915050565b60006020820190508181036000830152611f948184611f41565b905092915050565b611fa581611ec7565b8114611fb057600080fd5b50565b600081359050611fc281611f9c565b92915050565b600060208284031215611fde57611fdd611c02565b5b6000611fec84828501611fb3565b91505092915050565b611ffe81611e2d565b82525050565b60006020820190506120196000830184611ff5565b92915050565b6000806040838503121561203657612035611c02565b5b600061204485828601611e56565b925050602061205585828601611fb3565b9150509250929050565b60008060006060848603121561207857612077611c02565b5b600061208686828701611e56565b935050602061209786828701611e56565b92505060406120a886828701611fb3565b9150509250925092565b6000602082840312156120c8576120c7611c02565b5b60006120d684828501611e56565b91505092915050565b6120e881611c91565b81146120f357600080fd5b50565b600081359050612105816120df565b92915050565b6000806040838503121561212257612121611c02565b5b600061213085828601611e56565b9250506020612141858286016120f6565b9150509250929050565b600067ffffffffffffffff82111561216657612165611ce2565b5b61216f82611cd1565b9050602081019050919050565b600061218f61218a8461214b565b611d42565b9050828152602081018484840111156121ab576121aa611ccc565b5b6121b6848285611d8e565b509392505050565b600082601f8301126121d3576121d2611cc7565b5b81356121e384826020860161217c565b91505092915050565b6000806000806080858703121561220657612205611c02565b5b600061221487828801611e56565b945050602061222587828801611e56565b935050604061223687828801611fb3565b925050606085013567ffffffffffffffff81111561225757612256611c07565b5b612263878288016121be565b91505092959194509250565b6000806040838503121561228657612285611c02565b5b600061229485828601611e56565b92505060206122a585828601611e56565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806122f657607f821691505b602082108103612309576123086122af565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061236b602183611f06565b91506123768261230f565b604082019050919050565b6000602082019050818103600083015261239a8161235e565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b60006123fd603d83611f06565b9150612408826123a1565b604082019050919050565b6000602082019050818103600083015261242c816123f0565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b600061248f602d83611f06565b915061249a82612433565b604082019050919050565b600060208201905081810360008301526124be81612482565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006124fb601883611f06565b9150612506826124c5565b602082019050919050565b6000602082019050818103600083015261252a816124ee565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061258d602983611f06565b915061259882612531565b604082019050919050565b600060208201905081810360008301526125bc81612580565b9050919050565b600081905092915050565b60006125d982611efb565b6125e381856125c3565b93506125f3818560208601611f17565b80840191505092915050565b600061260b82856125ce565b915061261782846125ce565b91508190509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061267f602683611f06565b915061268a82612623565b604082019050919050565b600060208201905081810360008301526126ae81612672565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006126eb602083611f06565b91506126f6826126b5565b602082019050919050565b6000602082019050818103600083015261271a816126de565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612757601c83611f06565b915061276282612721565b602082019050919050565b600060208201905081810360008301526127868161274a565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b60006127e9602e83611f06565b91506127f48261278d565b604082019050919050565b60006020820190508181036000830152612818816127dc565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026128817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612844565b61288b8683612844565b95508019841693508086168417925050509392505050565b6000819050919050565b60006128c86128c36128be84611ec7565b6128a3565b611ec7565b9050919050565b6000819050919050565b6128e2836128ad565b6128f66128ee826128cf565b848454612851565b825550505050565b600090565b61290b6128fe565b6129168184846128d9565b505050565b5b8181101561293a5761292f600082612903565b60018101905061291c565b5050565b601f82111561297f576129508161281f565b61295984612834565b81016020851015612968578190505b61297c61297485612834565b83018261291b565b50505b505050565b600082821c905092915050565b60006129a260001984600802612984565b1980831691505092915050565b60006129bb8383612991565b9150826002028217905092915050565b6129d482611efb565b67ffffffffffffffff8111156129ed576129ec611ce2565b5b6129f782546122de565b612a0282828561293e565b600060209050601f831160018114612a355760008415612a23578287015190505b612a2d85826129af565b865550612a95565b601f198416612a438661281f565b60005b82811015612a6b57848901518255600182019150602085019450602081019050612a46565b86831015612a885784890151612a84601f891682612991565b8355505b6001600288020188555050505b505050505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612af9602583611f06565b9150612b0482612a9d565b604082019050919050565b60006020820190508181036000830152612b2881612aec565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612b8b602483611f06565b9150612b9682612b2f565b604082019050919050565b60006020820190508181036000830152612bba81612b7e565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612bf7602083611f06565b9150612c0282612bc1565b602082019050919050565b60006020820190508181036000830152612c2681612bea565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612c63601983611f06565b9150612c6e82612c2d565b602082019050919050565b60006020820190508181036000830152612c9281612c56565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612cf5603283611f06565b9150612d0082612c99565b604082019050919050565b60006020820190508181036000830152612d2481612ce8565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000612d5282612d2b565b612d5c8185612d36565b9350612d6c818560208601611f17565b612d7581611cd1565b840191505092915050565b6000608082019050612d956000830187611ff5565b612da26020830186611ff5565b612daf6040830185611ed1565b8181036060830152612dc18184612d47565b905095945050505050565b600081519050612ddb81611c38565b92915050565b600060208284031215612df757612df6611c02565b5b6000612e0584828501612dcc565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea264697066735822122085b60a5e27fb02fc34554c780115bd328c2df7a370169956c1de1989377407fc64736f6c63430008130033",
    "deployedBytecode": "0x6080604052600436106100fe5760003560e01c806370a0823111610095578063a22cb46511610064578063a22cb4651461033a578063b88d4fde14610363578063c87b56dd1461038c578063e985e9c5146103c9578063f2fde38b14610406576100fe565b806370a0823114610290578063715018a6146102cd5780638da5cb5b146102e457806395d89b411461030f576100fe565b8063095ea7b3116100d1578063095ea7b3146101d857806323b872dd1461020157806342842e0e1461022a5780636352211e14610253576100fe565b806301ffc9a71461010357806304f322791461014057806306fdde0314610170578063081812fc1461019b575b600080fd5b34801561010f57600080fd5b5061012a60048036038101906101259190611c64565b61042f565b6040516101379190611cac565b60405180910390f35b61015a60048036038101906101559190611e6b565b610511565b6040516101679190611ee0565b60405180910390f35b34801561017c57600080fd5b50610185610549565b6040516101929190611f7a565b60405180910390f35b3480156101a757600080fd5b506101c260048036038101906101bd9190611fc8565b6105db565b6040516101cf9190612004565b60405180910390f35b3480156101e457600080fd5b506101ff60048036038101906101fa919061201f565b610621565b005b34801561020d57600080fd5b506102286004803603810190610223919061205f565b610738565b005b34801561023657600080fd5b50610251600480360381019061024c919061205f565b610798565b005b34801561025f57600080fd5b5061027a60048036038101906102759190611fc8565b6107b8565b6040516102879190612004565b60405180910390f35b34801561029c57600080fd5b506102b760048036038101906102b291906120b2565b61083e565b6040516102c49190611ee0565b60405180910390f35b3480156102d957600080fd5b506102e26108f5565b005b3480156102f057600080fd5b506102f9610909565b6040516103069190612004565b60405180910390f35b34801561031b57600080fd5b50610324610933565b6040516103319190611f7a565b60405180910390f35b34801561034657600080fd5b50610361600480360381019061035c919061210b565b6109c5565b005b34801561036f57600080fd5b5061038a600480360381019061038591906121ec565b6109db565b005b34801561039857600080fd5b506103b360048036038101906103ae9190611fc8565b610a3d565b6040516103c09190611f7a565b60405180910390f35b3480156103d557600080fd5b506103f060048036038101906103eb919061226f565b610b4f565b6040516103fd9190611cac565b60405180910390f35b34801561041257600080fd5b5061042d600480360381019061042891906120b2565b610be3565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104fa57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061050a575061050982610c66565b5b9050919050565b600061051d6008610cd0565b60006105296008610ce6565b90506105358382610cf4565b61053f8185610f11565b8091505092915050565b606060008054610558906122de565b80601f0160208091040260200160405190810160405280929190818152602001828054610584906122de565b80156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b5050505050905090565b60006105e682610f7e565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061062c826107b8565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361069c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069390612381565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106bb610fc9565b73ffffffffffffffffffffffffffffffffffffffff1614806106ea57506106e9816106e4610fc9565b610b4f565b5b610729576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072090612413565b60405180910390fd5b6107338383610fd1565b505050565b610749610743610fc9565b8261108a565b610788576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077f906124a5565b60405180910390fd5b61079383838361111f565b505050565b6107b3838383604051806020016040528060008152506109db565b505050565b6000806107c483611418565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610835576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082c90612511565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a5906125a3565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6108fd611455565b61090760006114d3565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610942906122de565b80601f016020809104026020016040519081016040528092919081815260200182805461096e906122de565b80156109bb5780601f10610990576101008083540402835291602001916109bb565b820191906000526020600020905b81548152906001019060200180831161099e57829003601f168201915b5050505050905090565b6109d76109d0610fc9565b8383611599565b5050565b6109ec6109e6610fc9565b8361108a565b610a2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a22906124a5565b60405180910390fd5b610a3784848484611705565b50505050565b6060610a4882610f7e565b6000600660008481526020019081526020016000208054610a68906122de565b80601f0160208091040260200160405190810160405280929190818152602001828054610a94906122de565b8015610ae15780601f10610ab657610100808354040283529160200191610ae1565b820191906000526020600020905b815481529060010190602001808311610ac457829003601f168201915b505050505090506000610af2611761565b90506000815103610b07578192505050610b4a565b600082511115610b3c578082604051602001610b249291906125ff565b60405160208183030381529060405292505050610b4a565b610b4584611778565b925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610beb611455565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5190612695565b60405180910390fd5b610c63816114d3565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5a90612701565b60405180910390fd5b610d6c816117e0565b15610dac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da39061276d565b60405180910390fd5b610dba600083836001611821565b610dc3816117e0565b15610e03576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dfa9061276d565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610f0d600083836001611827565b5050565b610f1a826117e0565b610f59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f50906127ff565b60405180910390fd5b80600660008481526020019081526020016000209081610f7991906129cb565b505050565b610f87816117e0565b610fc6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fbd90612511565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611044836107b8565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080611096836107b8565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806110d857506110d78185610b4f565b5b8061111657508373ffffffffffffffffffffffffffffffffffffffff166110fe846105db565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661113f826107b8565b73ffffffffffffffffffffffffffffffffffffffff1614611195576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118c90612b0f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611204576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111fb90612ba1565b60405180910390fd5b6112118383836001611821565b8273ffffffffffffffffffffffffffffffffffffffff16611231826107b8565b73ffffffffffffffffffffffffffffffffffffffff1614611287576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161127e90612b0f565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46114138383836001611827565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61145d610fc9565b73ffffffffffffffffffffffffffffffffffffffff1661147b610909565b73ffffffffffffffffffffffffffffffffffffffff16146114d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114c890612c0d565b60405180910390fd5b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611607576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115fe90612c79565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516116f89190611cac565b60405180910390a3505050565b61171084848461111f565b61171c8484848461182d565b61175b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161175290612d0b565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061178382610f7e565b600061178d611761565b905060008151116117ad57604051806020016040528060008152506117d8565b806117b7846119b4565b6040516020016117c89291906125ff565b6040516020818303038152906040525b915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1661180283611418565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b600061184e8473ffffffffffffffffffffffffffffffffffffffff16611a82565b156119a7578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611877610fc9565b8786866040518563ffffffff1660e01b81526004016118999493929190612d80565b6020604051808303816000875af19250505080156118d557506040513d601f19601f820116820180604052508101906118d29190612de1565b60015b611957573d8060008114611905576040519150601f19603f3d011682016040523d82523d6000602084013e61190a565b606091505b50600081510361194f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161194690612d0b565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506119ac565b600190505b949350505050565b6060600060016119c384611aa5565b01905060008167ffffffffffffffff8111156119e2576119e1611ce2565b5b6040519080825280601f01601f191660200182016040528015611a145781602001600182028036833780820191505090505b509050600082602001820190505b600115611a77578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611a6b57611a6a612e0e565b5b04945060008503611a22575b819350505050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611b03577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611af957611af8612e0e565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611b40576d04ee2d6d415b85acef81000000008381611b3657611b35612e0e565b5b0492506020810190505b662386f26fc100008310611b6f57662386f26fc100008381611b6557611b64612e0e565b5b0492506010810190505b6305f5e1008310611b98576305f5e1008381611b8e57611b8d612e0e565b5b0492506008810190505b6127108310611bbd576127108381611bb357611bb2612e0e565b5b0492506004810190505b60648310611be05760648381611bd657611bd5612e0e565b5b0492506002810190505b600a8310611bef576001810190505b80915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611c4181611c0c565b8114611c4c57600080fd5b50565b600081359050611c5e81611c38565b92915050565b600060208284031215611c7a57611c79611c02565b5b6000611c8884828501611c4f565b91505092915050565b60008115159050919050565b611ca681611c91565b82525050565b6000602082019050611cc16000830184611c9d565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611d1a82611cd1565b810181811067ffffffffffffffff82111715611d3957611d38611ce2565b5b80604052505050565b6000611d4c611bf8565b9050611d588282611d11565b919050565b600067ffffffffffffffff821115611d7857611d77611ce2565b5b611d8182611cd1565b9050602081019050919050565b82818337600083830152505050565b6000611db0611dab84611d5d565b611d42565b905082815260208101848484011115611dcc57611dcb611ccc565b5b611dd7848285611d8e565b509392505050565b600082601f830112611df457611df3611cc7565b5b8135611e04848260208601611d9d565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611e3882611e0d565b9050919050565b611e4881611e2d565b8114611e5357600080fd5b50565b600081359050611e6581611e3f565b92915050565b60008060408385031215611e8257611e81611c02565b5b600083013567ffffffffffffffff811115611ea057611e9f611c07565b5b611eac85828601611ddf565b9250506020611ebd85828601611e56565b9150509250929050565b6000819050919050565b611eda81611ec7565b82525050565b6000602082019050611ef56000830184611ed1565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611f35578082015181840152602081019050611f1a565b60008484015250505050565b6000611f4c82611efb565b611f568185611f06565b9350611f66818560208601611f17565b611f6f81611cd1565b840191505092915050565b60006020820190508181036000830152611f948184611f41565b905092915050565b611fa581611ec7565b8114611fb057600080fd5b50565b600081359050611fc281611f9c565b92915050565b600060208284031215611fde57611fdd611c02565b5b6000611fec84828501611fb3565b91505092915050565b611ffe81611e2d565b82525050565b60006020820190506120196000830184611ff5565b92915050565b6000806040838503121561203657612035611c02565b5b600061204485828601611e56565b925050602061205585828601611fb3565b9150509250929050565b60008060006060848603121561207857612077611c02565b5b600061208686828701611e56565b935050602061209786828701611e56565b92505060406120a886828701611fb3565b9150509250925092565b6000602082840312156120c8576120c7611c02565b5b60006120d684828501611e56565b91505092915050565b6120e881611c91565b81146120f357600080fd5b50565b600081359050612105816120df565b92915050565b6000806040838503121561212257612121611c02565b5b600061213085828601611e56565b9250506020612141858286016120f6565b9150509250929050565b600067ffffffffffffffff82111561216657612165611ce2565b5b61216f82611cd1565b9050602081019050919050565b600061218f61218a8461214b565b611d42565b9050828152602081018484840111156121ab576121aa611ccc565b5b6121b6848285611d8e565b509392505050565b600082601f8301126121d3576121d2611cc7565b5b81356121e384826020860161217c565b91505092915050565b6000806000806080858703121561220657612205611c02565b5b600061221487828801611e56565b945050602061222587828801611e56565b935050604061223687828801611fb3565b925050606085013567ffffffffffffffff81111561225757612256611c07565b5b612263878288016121be565b91505092959194509250565b6000806040838503121561228657612285611c02565b5b600061229485828601611e56565b92505060206122a585828601611e56565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806122f657607f821691505b602082108103612309576123086122af565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061236b602183611f06565b91506123768261230f565b604082019050919050565b6000602082019050818103600083015261239a8161235e565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b60006123fd603d83611f06565b9150612408826123a1565b604082019050919050565b6000602082019050818103600083015261242c816123f0565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b600061248f602d83611f06565b915061249a82612433565b604082019050919050565b600060208201905081810360008301526124be81612482565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006124fb601883611f06565b9150612506826124c5565b602082019050919050565b6000602082019050818103600083015261252a816124ee565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061258d602983611f06565b915061259882612531565b604082019050919050565b600060208201905081810360008301526125bc81612580565b9050919050565b600081905092915050565b60006125d982611efb565b6125e381856125c3565b93506125f3818560208601611f17565b80840191505092915050565b600061260b82856125ce565b915061261782846125ce565b91508190509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061267f602683611f06565b915061268a82612623565b604082019050919050565b600060208201905081810360008301526126ae81612672565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006126eb602083611f06565b91506126f6826126b5565b602082019050919050565b6000602082019050818103600083015261271a816126de565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612757601c83611f06565b915061276282612721565b602082019050919050565b600060208201905081810360008301526127868161274a565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b60006127e9602e83611f06565b91506127f48261278d565b604082019050919050565b60006020820190508181036000830152612818816127dc565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026128817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612844565b61288b8683612844565b95508019841693508086168417925050509392505050565b6000819050919050565b60006128c86128c36128be84611ec7565b6128a3565b611ec7565b9050919050565b6000819050919050565b6128e2836128ad565b6128f66128ee826128cf565b848454612851565b825550505050565b600090565b61290b6128fe565b6129168184846128d9565b505050565b5b8181101561293a5761292f600082612903565b60018101905061291c565b5050565b601f82111561297f576129508161281f565b61295984612834565b81016020851015612968578190505b61297c61297485612834565b83018261291b565b50505b505050565b600082821c905092915050565b60006129a260001984600802612984565b1980831691505092915050565b60006129bb8383612991565b9150826002028217905092915050565b6129d482611efb565b67ffffffffffffffff8111156129ed576129ec611ce2565b5b6129f782546122de565b612a0282828561293e565b600060209050601f831160018114612a355760008415612a23578287015190505b612a2d85826129af565b865550612a95565b601f198416612a438661281f565b60005b82811015612a6b57848901518255600182019150602085019450602081019050612a46565b86831015612a885784890151612a84601f891682612991565b8355505b6001600288020188555050505b505050505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612af9602583611f06565b9150612b0482612a9d565b604082019050919050565b60006020820190508181036000830152612b2881612aec565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612b8b602483611f06565b9150612b9682612b2f565b604082019050919050565b60006020820190508181036000830152612bba81612b7e565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612bf7602083611f06565b9150612c0282612bc1565b602082019050919050565b60006020820190508181036000830152612c2681612bea565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612c63601983611f06565b9150612c6e82612c2d565b602082019050919050565b60006020820190508181036000830152612c9281612c56565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612cf5603283611f06565b9150612d0082612c99565b604082019050919050565b60006020820190508181036000830152612d2481612ce8565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000612d5282612d2b565b612d5c8185612d36565b9350612d6c818560208601611f17565b612d7581611cd1565b840191505092915050565b6000608082019050612d956000830187611ff5565b612da26020830186611ff5565b612daf6040830185611ed1565b8181036060830152612dc18184612d47565b905095945050505050565b600081519050612ddb81611c38565b92915050565b600060208284031215612df757612df6611c02565b5b6000612e0584828501612dcc565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea264697066735822122085b60a5e27fb02fc34554c780115bd328c2df7a370169956c1de1989377407fc64736f6c63430008130033",
    "immutableReferences": {},
    "generatedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:5231:14",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "66:40:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "77:22:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "93:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "87:5:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "87:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "77:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "49:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "59:6:14",
                  "type": ""
                }
              ],
              "src": "7:99:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "140:152:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "157:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "160:77:14",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "150:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "150:88:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "150:88:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "254:1:14",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "257:4:14",
                          "type": "",
                          "value": "0x41"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "247:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "247:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "247:15:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "278:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "281:4:14",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "271:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "271:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "271:15:14"
                  }
                ]
              },
              "name": "panic_error_0x41",
              "nodeType": "YulFunctionDefinition",
              "src": "112:180:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "326:152:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "343:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "346:77:14",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "336:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "336:88:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "336:88:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "440:1:14",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "443:4:14",
                          "type": "",
                          "value": "0x22"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "433:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "433:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "433:15:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "464:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "467:4:14",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "457:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "457:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "457:15:14"
                  }
                ]
              },
              "name": "panic_error_0x22",
              "nodeType": "YulFunctionDefinition",
              "src": "298:180:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "535:269:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "545:22:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "559:4:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "565:1:14",
                          "type": "",
                          "value": "2"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "555:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "555:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "545:6:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "576:38:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "606:4:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "612:1:14",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "602:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "602:12:14"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "580:18:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "653:51:14",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "667:27:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "681:6:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "689:4:14",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "677:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "677:17:14"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "667:6:14"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "633:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "626:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "626:26:14"
                    },
                    "nodeType": "YulIf",
                    "src": "623:81:14"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "756:42:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x22",
                              "nodeType": "YulIdentifier",
                              "src": "770:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "770:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "770:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "720:18:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "743:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "751:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "740:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "740:14:14"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "717:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "717:38:14"
                    },
                    "nodeType": "YulIf",
                    "src": "714:84:14"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "519:4:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "528:6:14",
                  "type": ""
                }
              ],
              "src": "484:320:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "864:87:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "874:11:14",
                    "value": {
                      "name": "ptr",
                      "nodeType": "YulIdentifier",
                      "src": "882:3:14"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "874:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "902:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "name": "ptr",
                          "nodeType": "YulIdentifier",
                          "src": "905:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "895:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "895:14:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "895:14:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "918:26:14",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "936:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "939:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "keccak256",
                        "nodeType": "YulIdentifier",
                        "src": "926:9:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "926:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "918:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_dataslot_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "ptr",
                  "nodeType": "YulTypedName",
                  "src": "851:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "859:4:14",
                  "type": ""
                }
              ],
              "src": "810:141:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1001:49:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1011:33:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1029:5:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1036:2:14",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1025:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1025:14:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1041:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "1021:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1021:23:14"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "1011:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "divide_by_32_ceil",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "984:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "994:6:14",
                  "type": ""
                }
              ],
              "src": "957:93:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1109:54:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1119:37:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "bits",
                          "nodeType": "YulIdentifier",
                          "src": "1144:4:14"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1150:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "shl",
                        "nodeType": "YulIdentifier",
                        "src": "1140:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1140:16:14"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "1119:8:14"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_left_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "bits",
                  "nodeType": "YulTypedName",
                  "src": "1084:4:14",
                  "type": ""
                },
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1090:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "1100:8:14",
                  "type": ""
                }
              ],
              "src": "1056:107:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1245:317:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1255:35:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBytes",
                          "nodeType": "YulIdentifier",
                          "src": "1276:10:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1288:1:14",
                          "type": "",
                          "value": "8"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "1272:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1272:18:14"
                    },
                    "variables": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulTypedName",
                        "src": "1259:9:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1299:109:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBits",
                          "nodeType": "YulIdentifier",
                          "src": "1330:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1341:66:14",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "shift_left_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "1311:18:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1311:97:14"
                    },
                    "variables": [
                      {
                        "name": "mask",
                        "nodeType": "YulTypedName",
                        "src": "1303:4:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1417:51:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBits",
                          "nodeType": "YulIdentifier",
                          "src": "1448:9:14"
                        },
                        {
                          "name": "toInsert",
                          "nodeType": "YulIdentifier",
                          "src": "1459:8:14"
                        }
                      ],
                      "functionName": {
                        "name": "shift_left_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "1429:18:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1429:39:14"
                    },
                    "variableNames": [
                      {
                        "name": "toInsert",
                        "nodeType": "YulIdentifier",
                        "src": "1417:8:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1477:30:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1490:5:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "1501:4:14"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "1497:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1497:9:14"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "1486:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1486:21:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1477:5:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1516:40:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1529:5:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "toInsert",
                              "nodeType": "YulIdentifier",
                              "src": "1540:8:14"
                            },
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "1550:4:14"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "1536:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1536:19:14"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "1526:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1526:30:14"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "1516:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "update_byte_slice_dynamic32",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1206:5:14",
                  "type": ""
                },
                {
                  "name": "shiftBytes",
                  "nodeType": "YulTypedName",
                  "src": "1213:10:14",
                  "type": ""
                },
                {
                  "name": "toInsert",
                  "nodeType": "YulTypedName",
                  "src": "1225:8:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "1238:6:14",
                  "type": ""
                }
              ],
              "src": "1169:393:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1613:32:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1623:16:14",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1634:5:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "1623:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1595:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "1605:7:14",
                  "type": ""
                }
              ],
              "src": "1568:77:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1683:28:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1693:12:14",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1700:5:14"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "1693:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "identity",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1669:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "1679:3:14",
                  "type": ""
                }
              ],
              "src": "1651:60:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1777:82:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1787:66:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "1845:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "1827:17:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1827:24:14"
                            }
                          ],
                          "functionName": {
                            "name": "identity",
                            "nodeType": "YulIdentifier",
                            "src": "1818:8:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1818:34:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "1800:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1800:53:14"
                    },
                    "variableNames": [
                      {
                        "name": "converted",
                        "nodeType": "YulIdentifier",
                        "src": "1787:9:14"
                      }
                    ]
                  }
                ]
              },
              "name": "convert_t_uint256_to_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1757:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "converted",
                  "nodeType": "YulTypedName",
                  "src": "1767:9:14",
                  "type": ""
                }
              ],
              "src": "1717:142:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1912:28:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1922:12:14",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1929:5:14"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "1922:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "prepare_store_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1898:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "1908:3:14",
                  "type": ""
                }
              ],
              "src": "1865:75:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2022:193:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2032:63:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value_0",
                          "nodeType": "YulIdentifier",
                          "src": "2087:7:14"
                        }
                      ],
                      "functionName": {
                        "name": "convert_t_uint256_to_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "2056:30:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2056:39:14"
                    },
                    "variables": [
                      {
                        "name": "convertedValue_0",
                        "nodeType": "YulTypedName",
                        "src": "2036:16:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "2111:4:14"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "2151:4:14"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nodeType": "YulIdentifier",
                                "src": "2145:5:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2145:11:14"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "2158:6:14"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "convertedValue_0",
                                  "nodeType": "YulIdentifier",
                                  "src": "2190:16:14"
                                }
                              ],
                              "functionName": {
                                "name": "prepare_store_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "2166:23:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2166:41:14"
                            }
                          ],
                          "functionName": {
                            "name": "update_byte_slice_dynamic32",
                            "nodeType": "YulIdentifier",
                            "src": "2117:27:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2117:91:14"
                        }
                      ],
                      "functionName": {
                        "name": "sstore",
                        "nodeType": "YulIdentifier",
                        "src": "2104:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2104:105:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2104:105:14"
                  }
                ]
              },
              "name": "update_storage_value_t_uint256_to_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "1999:4:14",
                  "type": ""
                },
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "2005:6:14",
                  "type": ""
                },
                {
                  "name": "value_0",
                  "nodeType": "YulTypedName",
                  "src": "2013:7:14",
                  "type": ""
                }
              ],
              "src": "1946:269:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2270:24:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2280:8:14",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "2287:1:14",
                      "type": "",
                      "value": "0"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "2280:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "zero_value_for_split_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "2266:3:14",
                  "type": ""
                }
              ],
              "src": "2221:73:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2353:136:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2363:46:14",
                    "value": {
                      "arguments": [],
                      "functionName": {
                        "name": "zero_value_for_split_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "2377:30:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2377:32:14"
                    },
                    "variables": [
                      {
                        "name": "zero_0",
                        "nodeType": "YulTypedName",
                        "src": "2367:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "2462:4:14"
                        },
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "2468:6:14"
                        },
                        {
                          "name": "zero_0",
                          "nodeType": "YulIdentifier",
                          "src": "2476:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "update_storage_value_t_uint256_to_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "2418:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2418:65:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2418:65:14"
                  }
                ]
              },
              "name": "storage_set_to_zero_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "2339:4:14",
                  "type": ""
                },
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "2345:6:14",
                  "type": ""
                }
              ],
              "src": "2300:189:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2545:136:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2612:63:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "name": "start",
                                "nodeType": "YulIdentifier",
                                "src": "2656:5:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2663:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "storage_set_to_zero_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "2626:29:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2626:39:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2626:39:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "start",
                          "nodeType": "YulIdentifier",
                          "src": "2565:5:14"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "2572:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "2562:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2562:14:14"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "2577:26:14",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "2579:22:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "start",
                                "nodeType": "YulIdentifier",
                                "src": "2592:5:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2599:1:14",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2588:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2588:13:14"
                          },
                          "variableNames": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "2579:5:14"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "2559:2:14",
                      "statements": []
                    },
                    "src": "2555:120:14"
                  }
                ]
              },
              "name": "clear_storage_range_t_bytes1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "start",
                  "nodeType": "YulTypedName",
                  "src": "2533:5:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "2540:3:14",
                  "type": ""
                }
              ],
              "src": "2495:186:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2766:464:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2792:431:14",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "2806:54:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "array",
                                "nodeType": "YulIdentifier",
                                "src": "2854:5:14"
                              }
                            ],
                            "functionName": {
                              "name": "array_dataslot_t_string_storage",
                              "nodeType": "YulIdentifier",
                              "src": "2822:31:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2822:38:14"
                          },
                          "variables": [
                            {
                              "name": "dataArea",
                              "nodeType": "YulTypedName",
                              "src": "2810:8:14",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "2873:63:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "dataArea",
                                "nodeType": "YulIdentifier",
                                "src": "2896:8:14"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "startIndex",
                                    "nodeType": "YulIdentifier",
                                    "src": "2924:10:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "divide_by_32_ceil",
                                  "nodeType": "YulIdentifier",
                                  "src": "2906:17:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2906:29:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2892:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2892:44:14"
                          },
                          "variables": [
                            {
                              "name": "deleteStart",
                              "nodeType": "YulTypedName",
                              "src": "2877:11:14",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "3093:27:14",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "3095:23:14",
                                "value": {
                                  "name": "dataArea",
                                  "nodeType": "YulIdentifier",
                                  "src": "3110:8:14"
                                },
                                "variableNames": [
                                  {
                                    "name": "deleteStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "3095:11:14"
                                  }
                                ]
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "startIndex",
                                "nodeType": "YulIdentifier",
                                "src": "3077:10:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3089:2:14",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "3074:2:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3074:18:14"
                          },
                          "nodeType": "YulIf",
                          "src": "3071:49:14"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "name": "deleteStart",
                                "nodeType": "YulIdentifier",
                                "src": "3162:11:14"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "dataArea",
                                    "nodeType": "YulIdentifier",
                                    "src": "3179:8:14"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "len",
                                        "nodeType": "YulIdentifier",
                                        "src": "3207:3:14"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "divide_by_32_ceil",
                                      "nodeType": "YulIdentifier",
                                      "src": "3189:17:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3189:22:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "3175:3:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3175:37:14"
                              }
                            ],
                            "functionName": {
                              "name": "clear_storage_range_t_bytes1",
                              "nodeType": "YulIdentifier",
                              "src": "3133:28:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3133:80:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3133:80:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "2783:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2788:2:14",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "2780:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2780:11:14"
                    },
                    "nodeType": "YulIf",
                    "src": "2777:446:14"
                  }
                ]
              },
              "name": "clean_up_bytearray_end_slots_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "2742:5:14",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "2749:3:14",
                  "type": ""
                },
                {
                  "name": "startIndex",
                  "nodeType": "YulTypedName",
                  "src": "2754:10:14",
                  "type": ""
                }
              ],
              "src": "2687:543:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3299:54:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3309:37:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "bits",
                          "nodeType": "YulIdentifier",
                          "src": "3334:4:14"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "3340:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "shr",
                        "nodeType": "YulIdentifier",
                        "src": "3330:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3330:16:14"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "3309:8:14"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_right_unsigned_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "bits",
                  "nodeType": "YulTypedName",
                  "src": "3274:4:14",
                  "type": ""
                },
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3280:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "3290:8:14",
                  "type": ""
                }
              ],
              "src": "3236:117:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3410:118:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3420:68:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3469:1:14",
                                  "type": "",
                                  "value": "8"
                                },
                                {
                                  "name": "bytes",
                                  "nodeType": "YulIdentifier",
                                  "src": "3472:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "3465:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3465:13:14"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3484:1:14",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "3480:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3480:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "shift_right_unsigned_dynamic",
                            "nodeType": "YulIdentifier",
                            "src": "3436:28:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3436:51:14"
                        }
                      ],
                      "functionName": {
                        "name": "not",
                        "nodeType": "YulIdentifier",
                        "src": "3432:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3432:56:14"
                    },
                    "variables": [
                      {
                        "name": "mask",
                        "nodeType": "YulTypedName",
                        "src": "3424:4:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3497:25:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "3511:4:14"
                        },
                        {
                          "name": "mask",
                          "nodeType": "YulIdentifier",
                          "src": "3517:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "3507:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3507:15:14"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "3497:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "mask_bytes_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "3387:4:14",
                  "type": ""
                },
                {
                  "name": "bytes",
                  "nodeType": "YulTypedName",
                  "src": "3393:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "3403:6:14",
                  "type": ""
                }
              ],
              "src": "3359:169:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3614:214:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3747:37:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "3774:4:14"
                        },
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "3780:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "mask_bytes_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "3755:18:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3755:29:14"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "3747:4:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3793:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "3804:4:14"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3814:1:14",
                              "type": "",
                              "value": "2"
                            },
                            {
                              "name": "len",
                              "nodeType": "YulIdentifier",
                              "src": "3817:3:14"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "3810:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3810:11:14"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "3801:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3801:21:14"
                    },
                    "variableNames": [
                      {
                        "name": "used",
                        "nodeType": "YulIdentifier",
                        "src": "3793:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "extract_used_part_and_set_length_of_short_byte_array",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "3595:4:14",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "3601:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "used",
                  "nodeType": "YulTypedName",
                  "src": "3609:4:14",
                  "type": ""
                }
              ],
              "src": "3533:295:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3925:1303:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3936:51:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "3983:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "3950:32:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3950:37:14"
                    },
                    "variables": [
                      {
                        "name": "newLen",
                        "nodeType": "YulTypedName",
                        "src": "3940:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4072:22:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "4074:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4074:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4074:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "4044:6:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4052:18:14",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "4041:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4041:30:14"
                    },
                    "nodeType": "YulIf",
                    "src": "4038:56:14"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4104:52:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "slot",
                              "nodeType": "YulIdentifier",
                              "src": "4150:4:14"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nodeType": "YulIdentifier",
                            "src": "4144:5:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4144:11:14"
                        }
                      ],
                      "functionName": {
                        "name": "extract_byte_array_length",
                        "nodeType": "YulIdentifier",
                        "src": "4118:25:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4118:38:14"
                    },
                    "variables": [
                      {
                        "name": "oldLen",
                        "nodeType": "YulTypedName",
                        "src": "4108:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "4249:4:14"
                        },
                        {
                          "name": "oldLen",
                          "nodeType": "YulIdentifier",
                          "src": "4255:6:14"
                        },
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "4263:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "clean_up_bytearray_end_slots_t_string_storage",
                        "nodeType": "YulIdentifier",
                        "src": "4203:45:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4203:67:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4203:67:14"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4280:18:14",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "4297:1:14",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulTypedName",
                        "src": "4284:9:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4308:17:14",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "4321:4:14",
                      "type": "",
                      "value": "0x20"
                    },
                    "variableNames": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulIdentifier",
                        "src": "4308:9:14"
                      }
                    ]
                  },
                  {
                    "cases": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "4372:611:14",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "4386:37:14",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "4405:6:14"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "4417:4:14",
                                        "type": "",
                                        "value": "0x1f"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "4413:3:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4413:9:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "4401:3:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4401:22:14"
                              },
                              "variables": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulTypedName",
                                  "src": "4390:7:14",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "4437:51:14",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "4483:4:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "array_dataslot_t_string_storage",
                                  "nodeType": "YulIdentifier",
                                  "src": "4451:31:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4451:37:14"
                              },
                              "variables": [
                                {
                                  "name": "dstPtr",
                                  "nodeType": "YulTypedName",
                                  "src": "4441:6:14",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "4501:10:14",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4510:1:14",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "i",
                                  "nodeType": "YulTypedName",
                                  "src": "4505:1:14",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "4569:163:14",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "4594:6:14"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "arguments": [
                                                {
                                                  "name": "src",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4612:3:14"
                                                },
                                                {
                                                  "name": "srcOffset",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4617:9:14"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "4608:3:14"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "4608:19:14"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "4602:5:14"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4602:26:14"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "4587:6:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4587:42:14"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "4587:42:14"
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "4646:24:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "4660:6:14"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "4668:1:14",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "4656:3:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4656:14:14"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "4646:6:14"
                                      }
                                    ]
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "4687:31:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "srcOffset",
                                          "nodeType": "YulIdentifier",
                                          "src": "4704:9:14"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "4715:2:14",
                                          "type": "",
                                          "value": "32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "4700:3:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4700:18:14"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "4687:9:14"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "4535:1:14"
                                  },
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "4538:7:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "4532:2:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4532:14:14"
                              },
                              "nodeType": "YulForLoop",
                              "post": {
                                "nodeType": "YulBlock",
                                "src": "4547:21:14",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "4549:17:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "4558:1:14"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "4561:4:14",
                                          "type": "",
                                          "value": "0x20"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "4554:3:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4554:12:14"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "4549:1:14"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "pre": {
                                "nodeType": "YulBlock",
                                "src": "4528:3:14",
                                "statements": []
                              },
                              "src": "4524:208:14"
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "4768:156:14",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "4786:43:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "4813:3:14"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "4818:9:14"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "4809:3:14"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4809:19:14"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "4803:5:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4803:26:14"
                                    },
                                    "variables": [
                                      {
                                        "name": "lastValue",
                                        "nodeType": "YulTypedName",
                                        "src": "4790:9:14",
                                        "type": ""
                                      }
                                    ]
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "4853:6:14"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "lastValue",
                                              "nodeType": "YulIdentifier",
                                              "src": "4880:9:14"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "newLen",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4895:6:14"
                                                },
                                                {
                                                  "kind": "number",
                                                  "nodeType": "YulLiteral",
                                                  "src": "4903:4:14",
                                                  "type": "",
                                                  "value": "0x1f"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "and",
                                                "nodeType": "YulIdentifier",
                                                "src": "4891:3:14"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "4891:17:14"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mask_bytes_dynamic",
                                            "nodeType": "YulIdentifier",
                                            "src": "4861:18:14"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4861:48:14"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "4846:6:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4846:64:14"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "4846:64:14"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "4751:7:14"
                                  },
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "4760:6:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "4748:2:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4748:19:14"
                              },
                              "nodeType": "YulIf",
                              "src": "4745:179:14"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "4944:4:14"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "newLen",
                                            "nodeType": "YulIdentifier",
                                            "src": "4958:6:14"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "4966:1:14",
                                            "type": "",
                                            "value": "2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mul",
                                          "nodeType": "YulIdentifier",
                                          "src": "4954:3:14"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4954:14:14"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "4970:1:14",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "4950:3:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4950:22:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "4937:6:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4937:36:14"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "4937:36:14"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "4365:618:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4370:1:14",
                          "type": "",
                          "value": "1"
                        }
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5000:222:14",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "5014:14:14",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5027:1:14",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "value",
                                  "nodeType": "YulTypedName",
                                  "src": "5018:5:14",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "5051:67:14",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "5069:35:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "5088:3:14"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "5093:9:14"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "5084:3:14"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "5084:19:14"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "5078:5:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "5078:26:14"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "5069:5:14"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "name": "newLen",
                                "nodeType": "YulIdentifier",
                                "src": "5044:6:14"
                              },
                              "nodeType": "YulIf",
                              "src": "5041:77:14"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "5138:4:14"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "5197:5:14"
                                      },
                                      {
                                        "name": "newLen",
                                        "nodeType": "YulIdentifier",
                                        "src": "5204:6:14"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "extract_used_part_and_set_length_of_short_byte_array",
                                      "nodeType": "YulIdentifier",
                                      "src": "5144:52:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5144:67:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "5131:6:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5131:81:14"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "5131:81:14"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "4992:230:14",
                        "value": "default"
                      }
                    ],
                    "expression": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "4345:6:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4353:2:14",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "4342:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4342:14:14"
                    },
                    "nodeType": "YulSwitch",
                    "src": "4335:887:14"
                  }
                ]
              },
              "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "3914:4:14",
                  "type": ""
                },
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "3920:3:14",
                  "type": ""
                }
              ],
              "src": "3833:1395:14"
            }
          ]
        },
        "contents": "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n}\n",
        "id": 14,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:34271:14",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "47:35:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "57:19:14",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "73:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "67:5:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "67:9:14"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "57:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "allocate_unbounded",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "40:6:14",
                  "type": ""
                }
              ],
              "src": "7:75:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "177:28:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "194:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "197:1:14",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "187:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "187:12:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "187:12:14"
                  }
                ]
              },
              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
              "nodeType": "YulFunctionDefinition",
              "src": "88:117:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "300:28:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "317:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "320:1:14",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "310:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "310:12:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "310:12:14"
                  }
                ]
              },
              "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
              "nodeType": "YulFunctionDefinition",
              "src": "211:117:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "378:105:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "388:89:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "403:5:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "410:66:14",
                          "type": "",
                          "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "399:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "399:78:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "388:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_bytes4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "360:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "370:7:14",
                  "type": ""
                }
              ],
              "src": "334:149:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "531:78:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "587:16:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "596:1:14",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "599:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "589:6:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "589:12:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "589:12:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "554:5:14"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "578:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_bytes4",
                                "nodeType": "YulIdentifier",
                                "src": "561:16:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "561:23:14"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "551:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "551:34:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "544:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "544:42:14"
                    },
                    "nodeType": "YulIf",
                    "src": "541:62:14"
                  }
                ]
              },
              "name": "validator_revert_t_bytes4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "524:5:14",
                  "type": ""
                }
              ],
              "src": "489:120:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "666:86:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "676:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "698:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "685:12:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "685:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "676:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "740:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_bytes4",
                        "nodeType": "YulIdentifier",
                        "src": "714:25:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "714:32:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "714:32:14"
                  }
                ]
              },
              "name": "abi_decode_t_bytes4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "644:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "652:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "660:5:14",
                  "type": ""
                }
              ],
              "src": "615:137:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "823:262:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "869:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "871:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "871:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "871:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "844:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "853:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "840:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "840:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "865:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "836:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "836:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "833:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "962:116:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "977:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "991:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "981:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1006:62:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1040:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "1051:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1036:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1036:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1060:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_bytes4",
                            "nodeType": "YulIdentifier",
                            "src": "1016:19:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1016:52:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1006:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_bytes4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "793:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "804:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "816:6:14",
                  "type": ""
                }
              ],
              "src": "758:327:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1133:48:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1143:32:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1168:5:14"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1161:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1161:13:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "1154:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1154:21:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "1143:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1115:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "1125:7:14",
                  "type": ""
                }
              ],
              "src": "1091:90:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1246:50:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1263:3:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1283:5:14"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_bool",
                            "nodeType": "YulIdentifier",
                            "src": "1268:14:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1268:21:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1256:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1256:34:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1256:34:14"
                  }
                ]
              },
              "name": "abi_encode_t_bool_to_t_bool_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1234:5:14",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1241:3:14",
                  "type": ""
                }
              ],
              "src": "1187:109:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1394:118:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1404:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1416:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1427:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1412:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1412:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "1404:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1478:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1491:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1502:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1487:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1487:17:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_bool_to_t_bool_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1440:37:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1440:65:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1440:65:14"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "1366:9:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1378:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "1389:4:14",
                  "type": ""
                }
              ],
              "src": "1302:210:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1607:28:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1624:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1627:1:14",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "1617:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1617:12:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1617:12:14"
                  }
                ]
              },
              "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
              "nodeType": "YulFunctionDefinition",
              "src": "1518:117:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1730:28:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1747:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1750:1:14",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "1740:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1740:12:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1740:12:14"
                  }
                ]
              },
              "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
              "nodeType": "YulFunctionDefinition",
              "src": "1641:117:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1812:54:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1822:38:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1840:5:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1847:2:14",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1836:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1836:14:14"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1856:2:14",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "1852:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1852:7:14"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "1832:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1832:28:14"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "1822:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "round_up_to_mul_of_32",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1795:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "1805:6:14",
                  "type": ""
                }
              ],
              "src": "1764:102:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1900:152:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1917:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1920:77:14",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1910:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1910:88:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1910:88:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2014:1:14",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2017:4:14",
                          "type": "",
                          "value": "0x41"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2007:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2007:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2007:15:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2038:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2041:4:14",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "2031:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2031:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2031:15:14"
                  }
                ]
              },
              "name": "panic_error_0x41",
              "nodeType": "YulFunctionDefinition",
              "src": "1872:180:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2101:238:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2111:58:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "2133:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "size",
                              "nodeType": "YulIdentifier",
                              "src": "2163:4:14"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "2141:21:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2141:27:14"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2129:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2129:40:14"
                    },
                    "variables": [
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulTypedName",
                        "src": "2115:10:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2280:22:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "2282:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2282:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2282:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "2223:10:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2235:18:14",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "2220:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2220:34:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "2259:10:14"
                            },
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "2271:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "2256:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2256:22:14"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "2217:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2217:62:14"
                    },
                    "nodeType": "YulIf",
                    "src": "2214:88:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2318:2:14",
                          "type": "",
                          "value": "64"
                        },
                        {
                          "name": "newFreePtr",
                          "nodeType": "YulIdentifier",
                          "src": "2322:10:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2311:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2311:22:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2311:22:14"
                  }
                ]
              },
              "name": "finalize_allocation",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "2087:6:14",
                  "type": ""
                },
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "2095:4:14",
                  "type": ""
                }
              ],
              "src": "2058:281:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2386:88:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2396:30:14",
                    "value": {
                      "arguments": [],
                      "functionName": {
                        "name": "allocate_unbounded",
                        "nodeType": "YulIdentifier",
                        "src": "2406:18:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2406:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "2396:6:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "2455:6:14"
                        },
                        {
                          "name": "size",
                          "nodeType": "YulIdentifier",
                          "src": "2463:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "finalize_allocation",
                        "nodeType": "YulIdentifier",
                        "src": "2435:19:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2435:33:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2435:33:14"
                  }
                ]
              },
              "name": "allocate_memory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "2370:4:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "2379:6:14",
                  "type": ""
                }
              ],
              "src": "2345:129:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2547:241:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2652:22:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "2654:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2654:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2654:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2624:6:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2632:18:14",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "2621:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2621:30:14"
                    },
                    "nodeType": "YulIf",
                    "src": "2618:56:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2684:37:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2714:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "round_up_to_mul_of_32",
                        "nodeType": "YulIdentifier",
                        "src": "2692:21:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2692:29:14"
                    },
                    "variableNames": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "2684:4:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2758:23:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "size",
                          "nodeType": "YulIdentifier",
                          "src": "2770:4:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2776:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2766:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2766:15:14"
                    },
                    "variableNames": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "2758:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_allocation_size_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "2531:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "2542:4:14",
                  "type": ""
                }
              ],
              "src": "2480:308:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2858:82:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "2881:3:14"
                        },
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "2886:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2891:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "calldatacopy",
                        "nodeType": "YulIdentifier",
                        "src": "2868:12:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2868:30:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2868:30:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "2918:3:14"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2923:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2914:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2914:16:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2932:1:14",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2907:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2907:27:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2907:27:14"
                  }
                ]
              },
              "name": "copy_calldata_to_memory_with_cleanup",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "2840:3:14",
                  "type": ""
                },
                {
                  "name": "dst",
                  "nodeType": "YulTypedName",
                  "src": "2845:3:14",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "2850:6:14",
                  "type": ""
                }
              ],
              "src": "2794:146:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3030:341:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3040:75:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3107:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "array_allocation_size_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "3065:41:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3065:49:14"
                        }
                      ],
                      "functionName": {
                        "name": "allocate_memory",
                        "nodeType": "YulIdentifier",
                        "src": "3049:15:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3049:66:14"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "3040:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "array",
                          "nodeType": "YulIdentifier",
                          "src": "3131:5:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "3138:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3124:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3124:21:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3124:21:14"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3154:27:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "array",
                          "nodeType": "YulIdentifier",
                          "src": "3169:5:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3176:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3165:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3165:16:14"
                    },
                    "variables": [
                      {
                        "name": "dst",
                        "nodeType": "YulTypedName",
                        "src": "3158:3:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3219:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                              "nodeType": "YulIdentifier",
                              "src": "3221:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3221:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3221:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "3200:3:14"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3205:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3196:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3196:16:14"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "3214:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "3193:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3193:25:14"
                    },
                    "nodeType": "YulIf",
                    "src": "3190:112:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "3348:3:14"
                        },
                        {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "3353:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "3358:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "copy_calldata_to_memory_with_cleanup",
                        "nodeType": "YulIdentifier",
                        "src": "3311:36:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3311:54:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3311:54:14"
                  }
                ]
              },
              "name": "abi_decode_available_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "3003:3:14",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "3008:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "3016:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "3024:5:14",
                  "type": ""
                }
              ],
              "src": "2946:425:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3453:278:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3502:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                              "nodeType": "YulIdentifier",
                              "src": "3504:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3504:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3504:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "3481:6:14"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3489:4:14",
                                  "type": "",
                                  "value": "0x1f"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3477:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3477:17:14"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "3496:3:14"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "3473:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3473:27:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "3466:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3466:35:14"
                    },
                    "nodeType": "YulIf",
                    "src": "3463:122:14"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3594:34:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "3621:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "3608:12:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3608:20:14"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "3598:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3637:88:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "3698:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3706:4:14",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3694:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3694:17:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "3713:6:14"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "3721:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_available_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "3646:47:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3646:79:14"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "3637:5:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "3431:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "3439:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "3447:5:14",
                  "type": ""
                }
              ],
              "src": "3391:340:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3782:81:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3792:65:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "3807:5:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3814:42:14",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "3803:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3803:54:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "3792:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint160",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3764:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "3774:7:14",
                  "type": ""
                }
              ],
              "src": "3737:126:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3914:51:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3924:35:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "3953:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "3935:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3935:24:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "3924:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3896:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "3906:7:14",
                  "type": ""
                }
              ],
              "src": "3869:96:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4014:79:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4071:16:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4080:1:14",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4083:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "4073:6:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4073:12:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4073:12:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "4037:5:14"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "4062:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "4044:17:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4044:24:14"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "4034:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4034:35:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "4027:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4027:43:14"
                    },
                    "nodeType": "YulIf",
                    "src": "4024:63:14"
                  }
                ]
              },
              "name": "validator_revert_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4007:5:14",
                  "type": ""
                }
              ],
              "src": "3971:122:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4151:87:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4161:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "4183:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "4170:12:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4170:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4161:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "4226:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_address",
                        "nodeType": "YulIdentifier",
                        "src": "4199:26:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4199:33:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4199:33:14"
                  }
                ]
              },
              "name": "abi_decode_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "4129:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "4137:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4145:5:14",
                  "type": ""
                }
              ],
              "src": "4099:139:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4337:561:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4383:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "4385:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4385:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4385:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "4358:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4367:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "4354:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4354:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4379:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "4350:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4350:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "4347:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "4476:287:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "4491:45:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4522:9:14"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4533:1:14",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4518:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4518:17:14"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "4505:12:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4505:31:14"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "4495:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "4583:83:14",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                  "nodeType": "YulIdentifier",
                                  "src": "4585:77:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4585:79:14"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "4585:79:14"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "4555:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4563:18:14",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "4552:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4552:30:14"
                        },
                        "nodeType": "YulIf",
                        "src": "4549:117:14"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4680:73:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4725:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "4736:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4721:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4721:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "4745:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "4690:30:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4690:63:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "4680:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "4773:118:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "4788:16:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4802:2:14",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "4792:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4818:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4853:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "4864:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4849:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4849:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "4873:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "4828:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4828:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "4818:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_string_memory_ptrt_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4299:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "4310:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4322:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "4330:6:14",
                  "type": ""
                }
              ],
              "src": "4244:654:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4949:32:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4959:16:14",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "4970:5:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "4959:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4931:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "4941:7:14",
                  "type": ""
                }
              ],
              "src": "4904:77:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5052:53:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "5069:3:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "5092:5:14"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "5074:17:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5074:24:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5062:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5062:37:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5062:37:14"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5040:5:14",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "5047:3:14",
                  "type": ""
                }
              ],
              "src": "4987:118:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5209:124:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5219:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5231:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5242:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5227:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5227:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5219:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5299:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5312:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5323:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5308:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5308:17:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "5255:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5255:71:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5255:71:14"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5181:9:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "5193:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5204:4:14",
                  "type": ""
                }
              ],
              "src": "5111:222:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5398:40:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5409:22:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "5425:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "5419:5:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5419:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5409:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5381:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "5391:6:14",
                  "type": ""
                }
              ],
              "src": "5339:99:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5540:73:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "5557:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "5562:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5550:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5550:19:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5550:19:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5578:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "5597:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5602:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5593:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5593:14:14"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "5578:11:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "5512:3:14",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "5517:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "5528:11:14",
                  "type": ""
                }
              ],
              "src": "5444:169:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5681:184:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "5691:10:14",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "5700:1:14",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "i",
                        "nodeType": "YulTypedName",
                        "src": "5695:1:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5760:63:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "5785:3:14"
                                  },
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "5790:1:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "5781:3:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5781:11:14"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "src",
                                        "nodeType": "YulIdentifier",
                                        "src": "5804:3:14"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "5809:1:14"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "5800:3:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5800:11:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "5794:5:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5794:18:14"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "5774:6:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5774:39:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5774:39:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "5721:1:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "5724:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "5718:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5718:13:14"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "5732:19:14",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "5734:15:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "5743:1:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5746:2:14",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5739:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5739:10:14"
                          },
                          "variableNames": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "5734:1:14"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "5714:3:14",
                      "statements": []
                    },
                    "src": "5710:113:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "5843:3:14"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "5848:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5839:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5839:16:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5857:1:14",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5832:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5832:27:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5832:27:14"
                  }
                ]
              },
              "name": "copy_memory_to_memory_with_cleanup",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "5663:3:14",
                  "type": ""
                },
                {
                  "name": "dst",
                  "nodeType": "YulTypedName",
                  "src": "5668:3:14",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "5673:6:14",
                  "type": ""
                }
              ],
              "src": "5619:246:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5963:285:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "5973:53:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "6020:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "5987:32:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5987:39:14"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "5977:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6035:78:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "6101:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "6106:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "6042:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6042:71:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6035:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "6161:5:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6168:4:14",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6157:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6157:16:14"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "6175:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "6180:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory_with_cleanup",
                        "nodeType": "YulIdentifier",
                        "src": "6122:34:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6122:65:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6122:65:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6196:46:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "6207:3:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "6234:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "6212:21:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6212:29:14"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6203:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6203:39:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "6196:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5944:5:14",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "5951:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "5959:3:14",
                  "type": ""
                }
              ],
              "src": "5871:377:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6372:195:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6382:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6394:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6405:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6390:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6390:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6382:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6429:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6440:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6425:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6425:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "6448:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6454:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "6444:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6444:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6418:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6418:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6418:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6474:86:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "6546:6:14"
                        },
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "6555:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "6482:63:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6482:78:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6474:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6344:9:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "6356:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "6367:4:14",
                  "type": ""
                }
              ],
              "src": "6254:313:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6616:79:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6673:16:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6682:1:14",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6685:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "6675:6:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6675:12:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6675:12:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "6639:5:14"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "6664:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "6646:17:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6646:24:14"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "6636:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6636:35:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "6629:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6629:43:14"
                    },
                    "nodeType": "YulIf",
                    "src": "6626:63:14"
                  }
                ]
              },
              "name": "validator_revert_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "6609:5:14",
                  "type": ""
                }
              ],
              "src": "6573:122:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6753:87:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6763:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "6785:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "6772:12:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6772:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6763:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "6828:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "6801:26:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6801:33:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6801:33:14"
                  }
                ]
              },
              "name": "abi_decode_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "6731:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "6739:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "6747:5:14",
                  "type": ""
                }
              ],
              "src": "6701:139:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6912:263:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6958:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "6960:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6960:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6960:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "6933:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6942:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "6929:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6929:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6954:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "6925:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6925:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "6922:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "7051:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "7066:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7080:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "7070:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7095:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "7130:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "7141:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7126:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7126:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "7150:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "7105:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7105:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "7095:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6882:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "6893:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "6905:6:14",
                  "type": ""
                }
              ],
              "src": "6846:329:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7246:53:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "7263:3:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "7286:5:14"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "7268:17:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7268:24:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7256:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7256:37:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7256:37:14"
                  }
                ]
              },
              "name": "abi_encode_t_address_to_t_address_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "7234:5:14",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "7241:3:14",
                  "type": ""
                }
              ],
              "src": "7181:118:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7403:124:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "7413:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7425:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7436:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7421:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7421:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7413:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "7493:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7506:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7517:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7502:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7502:17:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "7449:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7449:71:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7449:71:14"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "7375:9:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "7387:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "7398:4:14",
                  "type": ""
                }
              ],
              "src": "7305:222:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7616:391:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "7662:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "7664:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7664:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "7664:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "7637:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7646:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "7633:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7633:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7658:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "7629:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7629:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "7626:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "7755:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "7770:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7784:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "7774:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7799:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "7834:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "7845:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7830:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7830:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "7854:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "7809:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7809:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "7799:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "7882:118:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "7897:16:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7911:2:14",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "7901:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7927:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "7962:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "7973:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7958:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7958:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "7982:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "7937:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7937:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "7927:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "7578:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "7589:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "7601:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "7609:6:14",
                  "type": ""
                }
              ],
              "src": "7533:474:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8113:519:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8159:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "8161:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8161:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "8161:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "8134:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "8143:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "8130:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8130:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8155:2:14",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "8126:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8126:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "8123:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "8252:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "8267:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8281:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "8271:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8296:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "8331:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "8342:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8327:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8327:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "8351:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "8306:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8306:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "8296:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "8379:118:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "8394:16:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8408:2:14",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "8398:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8424:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "8459:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "8470:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8455:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8455:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "8479:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "8434:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8434:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "8424:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "8507:118:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "8522:16:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8536:2:14",
                          "type": "",
                          "value": "64"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "8526:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8552:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "8587:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "8598:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8583:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8583:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "8607:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "8562:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8562:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "8552:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_addresst_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "8067:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "8078:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "8090:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "8098:6:14",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "8106:6:14",
                  "type": ""
                }
              ],
              "src": "8013:619:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8704:263:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8750:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "8752:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8752:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "8752:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "8725:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "8734:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "8721:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8721:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8746:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "8717:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8717:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "8714:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "8843:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "8858:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8872:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "8862:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8887:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "8922:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "8933:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8918:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8918:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "8942:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "8897:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8897:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "8887:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "8674:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "8685:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "8697:6:14",
                  "type": ""
                }
              ],
              "src": "8638:329:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9013:76:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "9067:16:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "9076:1:14",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "9079:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "9069:6:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9069:12:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "9069:12:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "9036:5:14"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "9058:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_bool",
                                "nodeType": "YulIdentifier",
                                "src": "9043:14:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9043:21:14"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "9033:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9033:32:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "9026:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9026:40:14"
                    },
                    "nodeType": "YulIf",
                    "src": "9023:60:14"
                  }
                ]
              },
              "name": "validator_revert_t_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "9006:5:14",
                  "type": ""
                }
              ],
              "src": "8973:116:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9144:84:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9154:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "9176:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "9163:12:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9163:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "9154:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "9216:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_bool",
                        "nodeType": "YulIdentifier",
                        "src": "9192:23:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9192:30:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9192:30:14"
                  }
                ]
              },
              "name": "abi_decode_t_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "9122:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "9130:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "9138:5:14",
                  "type": ""
                }
              ],
              "src": "9095:133:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9314:388:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "9360:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "9362:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9362:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "9362:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "9335:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9344:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "9331:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9331:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9356:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "9327:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9327:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "9324:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "9453:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "9468:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9482:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "9472:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9497:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "9532:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "9543:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "9528:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9528:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "9552:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "9507:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9507:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "9497:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "9580:115:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "9595:16:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9609:2:14",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "9599:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9625:60:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "9657:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "9668:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "9653:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9653:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "9677:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_bool",
                            "nodeType": "YulIdentifier",
                            "src": "9635:17:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9635:50:14"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "9625:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "9276:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "9287:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "9299:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "9307:6:14",
                  "type": ""
                }
              ],
              "src": "9234:468:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9774:241:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "9879:22:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "9881:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9881:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "9881:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "9851:6:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9859:18:14",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "9848:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9848:30:14"
                    },
                    "nodeType": "YulIf",
                    "src": "9845:56:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9911:37:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "9941:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "round_up_to_mul_of_32",
                        "nodeType": "YulIdentifier",
                        "src": "9919:21:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9919:29:14"
                    },
                    "variableNames": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "9911:4:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9985:23:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "size",
                          "nodeType": "YulIdentifier",
                          "src": "9997:4:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10003:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "9993:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9993:15:14"
                    },
                    "variableNames": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "9985:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_allocation_size_t_bytes_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "9758:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "9769:4:14",
                  "type": ""
                }
              ],
              "src": "9708:307:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10104:340:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10114:74:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "10180:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "array_allocation_size_t_bytes_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "10139:40:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10139:48:14"
                        }
                      ],
                      "functionName": {
                        "name": "allocate_memory",
                        "nodeType": "YulIdentifier",
                        "src": "10123:15:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10123:65:14"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "10114:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "array",
                          "nodeType": "YulIdentifier",
                          "src": "10204:5:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "10211:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10197:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10197:21:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10197:21:14"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "10227:27:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "array",
                          "nodeType": "YulIdentifier",
                          "src": "10242:5:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10249:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "10238:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10238:16:14"
                    },
                    "variables": [
                      {
                        "name": "dst",
                        "nodeType": "YulTypedName",
                        "src": "10231:3:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "10292:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                              "nodeType": "YulIdentifier",
                              "src": "10294:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10294:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "10294:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "10273:3:14"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "10278:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10269:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10269:16:14"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "10287:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "10266:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10266:25:14"
                    },
                    "nodeType": "YulIf",
                    "src": "10263:112:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "10421:3:14"
                        },
                        {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "10426:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "10431:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "copy_calldata_to_memory_with_cleanup",
                        "nodeType": "YulIdentifier",
                        "src": "10384:36:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10384:54:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10384:54:14"
                  }
                ]
              },
              "name": "abi_decode_available_length_t_bytes_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "10077:3:14",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "10082:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "10090:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "10098:5:14",
                  "type": ""
                }
              ],
              "src": "10021:423:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10524:277:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "10573:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                              "nodeType": "YulIdentifier",
                              "src": "10575:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10575:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "10575:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "10552:6:14"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "10560:4:14",
                                  "type": "",
                                  "value": "0x1f"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "10548:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10548:17:14"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "10567:3:14"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "10544:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10544:27:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "10537:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10537:35:14"
                    },
                    "nodeType": "YulIf",
                    "src": "10534:122:14"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "10665:34:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "10692:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "10679:12:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10679:20:14"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "10669:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10708:87:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "10768:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10776:4:14",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10764:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10764:17:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "10783:6:14"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "10791:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_available_length_t_bytes_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "10717:46:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10717:78:14"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "10708:5:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_t_bytes_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "10502:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "10510:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "10518:5:14",
                  "type": ""
                }
              ],
              "src": "10463:338:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10933:817:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "10980:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "10982:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10982:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "10982:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "10954:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "10963:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "10950:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10950:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10975:3:14",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "10946:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10946:33:14"
                    },
                    "nodeType": "YulIf",
                    "src": "10943:120:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "11073:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "11088:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11102:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "11092:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "11117:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "11152:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "11163:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "11148:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11148:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "11172:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "11127:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11127:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "11117:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "11200:118:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "11215:16:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11229:2:14",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "11219:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "11245:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "11280:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "11291:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "11276:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11276:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "11300:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "11255:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11255:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "11245:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "11328:118:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "11343:16:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11357:2:14",
                          "type": "",
                          "value": "64"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "11347:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "11373:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "11408:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "11419:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "11404:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11404:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "11428:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "11383:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11383:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "11373:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "11456:287:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "11471:46:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "11502:9:14"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "11513:2:14",
                                  "type": "",
                                  "value": "96"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "11498:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11498:18:14"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "11485:12:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11485:32:14"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "11475:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "11564:83:14",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                  "nodeType": "YulIdentifier",
                                  "src": "11566:77:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "11566:79:14"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "11566:79:14"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "11536:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11544:18:14",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "11533:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11533:30:14"
                        },
                        "nodeType": "YulIf",
                        "src": "11530:117:14"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "11661:72:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "11705:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "11716:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "11701:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11701:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "11725:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_bytes_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "11671:29:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11671:62:14"
                        },
                        "variableNames": [
                          {
                            "name": "value3",
                            "nodeType": "YulIdentifier",
                            "src": "11661:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "10879:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "10890:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "10902:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "10910:6:14",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "10918:6:14",
                  "type": ""
                },
                {
                  "name": "value3",
                  "nodeType": "YulTypedName",
                  "src": "10926:6:14",
                  "type": ""
                }
              ],
              "src": "10807:943:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11839:391:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "11885:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "11887:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11887:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "11887:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "11860:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "11869:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "11856:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11856:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11881:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "11852:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11852:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "11849:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "11978:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "11993:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12007:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "11997:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "12022:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "12057:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "12068:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "12053:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12053:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "12077:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "12032:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12032:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "12022:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "12105:118:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "12120:16:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12134:2:14",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "12124:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "12150:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "12185:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "12196:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "12181:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12181:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "12205:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "12160:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12160:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "12150:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "11801:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "11812:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "11824:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "11832:6:14",
                  "type": ""
                }
              ],
              "src": "11756:474:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12264:152:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12281:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12284:77:14",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12274:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12274:88:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12274:88:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12378:1:14",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12381:4:14",
                          "type": "",
                          "value": "0x22"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12371:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12371:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12371:15:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12402:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12405:4:14",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "12395:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12395:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12395:15:14"
                  }
                ]
              },
              "name": "panic_error_0x22",
              "nodeType": "YulFunctionDefinition",
              "src": "12236:180:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12473:269:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "12483:22:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "12497:4:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12503:1:14",
                          "type": "",
                          "value": "2"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "12493:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12493:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "12483:6:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "12514:38:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "12544:4:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12550:1:14",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "12540:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12540:12:14"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "12518:18:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "12591:51:14",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "12605:27:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "12619:6:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "12627:4:14",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "12615:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12615:17:14"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "12605:6:14"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "12571:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "12564:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12564:26:14"
                    },
                    "nodeType": "YulIf",
                    "src": "12561:81:14"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "12694:42:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x22",
                              "nodeType": "YulIdentifier",
                              "src": "12708:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12708:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "12708:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "12658:18:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "12681:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12689:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "12678:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12678:14:14"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "12655:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12655:38:14"
                    },
                    "nodeType": "YulIf",
                    "src": "12652:84:14"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "12457:4:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "12466:6:14",
                  "type": ""
                }
              ],
              "src": "12422:320:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12854:114:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "12876:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12884:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12872:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12872:14:14"
                        },
                        {
                          "hexValue": "4552433732313a20617070726f76616c20746f2063757272656e74206f776e65",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "12888:34:14",
                          "type": "",
                          "value": "ERC721: approval to current owne"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12865:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12865:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12865:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "12944:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12952:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12940:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12940:15:14"
                        },
                        {
                          "hexValue": "72",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "12957:3:14",
                          "type": "",
                          "value": "r"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12933:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12933:28:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12933:28:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "12846:6:14",
                  "type": ""
                }
              ],
              "src": "12748:220:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "13120:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "13130:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "13196:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13201:2:14",
                          "type": "",
                          "value": "33"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "13137:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13137:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13130:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "13302:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942",
                        "nodeType": "YulIdentifier",
                        "src": "13213:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13213:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13213:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "13315:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "13326:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13331:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "13322:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13322:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "13315:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "13108:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "13116:3:14",
                  "type": ""
                }
              ],
              "src": "12974:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "13517:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "13527:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "13539:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13550:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "13535:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13535:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "13527:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "13574:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13585:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13570:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13570:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "13593:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "13599:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "13589:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13589:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13563:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13563:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13563:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "13619:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "13753:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "13627:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13627:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "13619:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "13497:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "13512:4:14",
                  "type": ""
                }
              ],
              "src": "13346:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "13877:142:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "13899:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13907:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13895:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13895:14:14"
                        },
                        {
                          "hexValue": "4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "13911:34:14",
                          "type": "",
                          "value": "ERC721: approve caller is not to"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13888:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13888:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13888:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "13967:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13975:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13963:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13963:15:14"
                        },
                        {
                          "hexValue": "6b656e206f776e6572206f7220617070726f76656420666f7220616c6c",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "13980:31:14",
                          "type": "",
                          "value": "ken owner or approved for all"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13956:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13956:56:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13956:56:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "13869:6:14",
                  "type": ""
                }
              ],
              "src": "13771:248:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14171:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "14181:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "14247:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14252:2:14",
                          "type": "",
                          "value": "61"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "14188:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14188:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14181:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "14353:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83",
                        "nodeType": "YulIdentifier",
                        "src": "14264:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14264:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14264:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "14366:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "14377:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14382:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "14373:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14373:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "14366:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "14159:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "14167:3:14",
                  "type": ""
                }
              ],
              "src": "14025:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14568:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "14578:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "14590:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14601:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "14586:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14586:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14578:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "14625:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14636:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14621:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14621:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "14644:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "14650:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "14640:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14640:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "14614:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14614:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14614:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "14670:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "14804:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "14678:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14678:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14670:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "14548:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "14563:4:14",
                  "type": ""
                }
              ],
              "src": "14397:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14928:126:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "14950:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14958:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14946:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14946:14:14"
                        },
                        {
                          "hexValue": "4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e65",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "14962:34:14",
                          "type": "",
                          "value": "ERC721: caller is not token owne"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "14939:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14939:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14939:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "15018:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15026:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15014:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15014:15:14"
                        },
                        {
                          "hexValue": "72206f7220617070726f766564",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "15031:15:14",
                          "type": "",
                          "value": "r or approved"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15007:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15007:40:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15007:40:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "14920:6:14",
                  "type": ""
                }
              ],
              "src": "14822:232:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "15206:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "15216:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "15282:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15287:2:14",
                          "type": "",
                          "value": "45"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "15223:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15223:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "15216:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "15388:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af",
                        "nodeType": "YulIdentifier",
                        "src": "15299:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15299:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15299:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "15401:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "15412:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15417:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "15408:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15408:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "15401:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "15194:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "15202:3:14",
                  "type": ""
                }
              ],
              "src": "15060:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "15603:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "15613:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "15625:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15636:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "15621:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15621:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15613:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "15660:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15671:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15656:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15656:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "15679:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "15685:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "15675:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15675:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15649:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15649:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15649:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "15705:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "15839:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "15713:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15713:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15705:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "15583:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "15598:4:14",
                  "type": ""
                }
              ],
              "src": "15432:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "15963:68:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "15985:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15993:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15981:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15981:14:14"
                        },
                        {
                          "hexValue": "4552433732313a20696e76616c696420746f6b656e204944",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "15997:26:14",
                          "type": "",
                          "value": "ERC721: invalid token ID"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15974:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15974:50:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15974:50:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "15955:6:14",
                  "type": ""
                }
              ],
              "src": "15857:174:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16183:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "16193:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "16259:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16264:2:14",
                          "type": "",
                          "value": "24"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "16200:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16200:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "16193:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "16365:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f",
                        "nodeType": "YulIdentifier",
                        "src": "16276:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16276:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16276:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "16378:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "16389:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16394:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "16385:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16385:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "16378:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "16171:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "16179:3:14",
                  "type": ""
                }
              ],
              "src": "16037:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16580:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "16590:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "16602:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16613:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "16598:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16598:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16590:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "16637:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16648:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16633:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16633:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "16656:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "16662:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "16652:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16652:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16626:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16626:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16626:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "16682:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "16816:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "16690:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16690:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16682:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "16560:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "16575:4:14",
                  "type": ""
                }
              ],
              "src": "16409:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16940:122:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "16962:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16970:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16958:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16958:14:14"
                        },
                        {
                          "hexValue": "4552433732313a2061646472657373207a65726f206973206e6f742061207661",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "16974:34:14",
                          "type": "",
                          "value": "ERC721: address zero is not a va"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16951:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16951:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16951:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "17030:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17038:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17026:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17026:15:14"
                        },
                        {
                          "hexValue": "6c6964206f776e6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "17043:11:14",
                          "type": "",
                          "value": "lid owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "17019:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17019:36:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17019:36:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "16932:6:14",
                  "type": ""
                }
              ],
              "src": "16834:228:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17214:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "17224:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "17290:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17295:2:14",
                          "type": "",
                          "value": "41"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "17231:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17231:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "17224:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "17396:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159",
                        "nodeType": "YulIdentifier",
                        "src": "17307:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17307:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17307:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "17409:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "17420:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17425:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "17416:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17416:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "17409:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "17202:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "17210:3:14",
                  "type": ""
                }
              ],
              "src": "17068:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17611:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "17621:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "17633:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17644:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "17629:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17629:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17621:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "17668:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17679:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17664:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17664:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "17687:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "17693:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "17683:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17683:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "17657:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17657:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17657:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "17713:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "17847:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "17721:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17721:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17713:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "17591:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "17606:4:14",
                  "type": ""
                }
              ],
              "src": "17440:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17979:34:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "17989:18:14",
                    "value": {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "18004:3:14"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "17989:11:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "17951:3:14",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "17956:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "17967:11:14",
                  "type": ""
                }
              ],
              "src": "17865:148:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "18129:280:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "18139:53:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "18186:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "18153:32:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18153:39:14"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "18143:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "18201:96:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18285:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "18290:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "18208:76:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18208:89:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "18201:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "18345:5:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "18352:4:14",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "18341:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18341:16:14"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18359:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "18364:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory_with_cleanup",
                        "nodeType": "YulIdentifier",
                        "src": "18306:34:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18306:65:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "18306:65:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "18380:23:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18391:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "18396:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "18387:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18387:16:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "18380:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "18110:5:14",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "18117:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "18125:3:14",
                  "type": ""
                }
              ],
              "src": "18019:390:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "18599:251:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "18610:102:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "18699:6:14"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18708:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "18617:81:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18617:95:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "18610:3:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "18722:102:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "18811:6:14"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18820:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "18729:81:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18729:95:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "18722:3:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "18834:10:14",
                    "value": {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "18841:3:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "18834:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "18570:3:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "18576:6:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "18584:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "18595:3:14",
                  "type": ""
                }
              ],
              "src": "18415:435:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "18962:119:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "18984:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "18992:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "18980:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18980:14:14"
                        },
                        {
                          "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "18996:34:14",
                          "type": "",
                          "value": "Ownable: new owner is the zero a"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "18973:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18973:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "18973:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "19052:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19060:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19048:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19048:15:14"
                        },
                        {
                          "hexValue": "646472657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "19065:8:14",
                          "type": "",
                          "value": "ddress"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "19041:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19041:33:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19041:33:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "18954:6:14",
                  "type": ""
                }
              ],
              "src": "18856:225:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "19233:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "19243:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "19309:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19314:2:14",
                          "type": "",
                          "value": "38"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "19250:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19250:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "19243:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "19415:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                        "nodeType": "YulIdentifier",
                        "src": "19326:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19326:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19326:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "19428:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "19439:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19444:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "19435:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19435:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "19428:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "19221:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "19229:3:14",
                  "type": ""
                }
              ],
              "src": "19087:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "19630:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "19640:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "19652:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19663:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "19648:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19648:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "19640:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "19687:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19698:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19683:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19683:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "19706:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "19712:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "19702:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19702:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "19676:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19676:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19676:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "19732:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "19866:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "19740:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19740:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "19732:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "19610:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "19625:4:14",
                  "type": ""
                }
              ],
              "src": "19459:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "19990:76:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "20012:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "20020:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "20008:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20008:14:14"
                        },
                        {
                          "hexValue": "4552433732313a206d696e7420746f20746865207a65726f2061646472657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "20024:34:14",
                          "type": "",
                          "value": "ERC721: mint to the zero address"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "20001:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20001:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "20001:58:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "19982:6:14",
                  "type": ""
                }
              ],
              "src": "19884:182:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "20218:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "20228:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "20294:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "20299:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "20235:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20235:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "20228:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "20400:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6",
                        "nodeType": "YulIdentifier",
                        "src": "20311:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20311:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "20311:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "20413:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "20424:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "20429:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "20420:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20420:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "20413:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "20206:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "20214:3:14",
                  "type": ""
                }
              ],
              "src": "20072:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "20615:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "20625:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "20637:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "20648:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "20633:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20633:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "20625:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "20672:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "20683:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "20668:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20668:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "20691:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "20697:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "20687:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20687:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "20661:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20661:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "20661:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "20717:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "20851:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "20725:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20725:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "20717:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "20595:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "20610:4:14",
                  "type": ""
                }
              ],
              "src": "20444:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "20975:72:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "20997:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "21005:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "20993:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20993:14:14"
                        },
                        {
                          "hexValue": "4552433732313a20746f6b656e20616c7265616479206d696e746564",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "21009:30:14",
                          "type": "",
                          "value": "ERC721: token already minted"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "20986:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20986:54:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "20986:54:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "20967:6:14",
                  "type": ""
                }
              ],
              "src": "20869:178:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "21199:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "21209:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "21275:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "21280:2:14",
                          "type": "",
                          "value": "28"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "21216:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21216:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "21209:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "21381:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57",
                        "nodeType": "YulIdentifier",
                        "src": "21292:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21292:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "21292:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "21394:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "21405:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "21410:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "21401:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21401:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "21394:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "21187:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "21195:3:14",
                  "type": ""
                }
              ],
              "src": "21053:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "21596:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "21606:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "21618:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "21629:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "21614:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21614:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "21606:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "21653:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "21664:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "21649:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21649:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "21672:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "21678:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "21668:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21668:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "21642:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21642:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "21642:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "21698:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "21832:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "21706:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21706:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "21698:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "21576:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "21591:4:14",
                  "type": ""
                }
              ],
              "src": "21425:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "21956:127:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "21978:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "21986:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "21974:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21974:14:14"
                        },
                        {
                          "hexValue": "45524337323155524953746f726167653a2055524920736574206f66206e6f6e",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "21990:34:14",
                          "type": "",
                          "value": "ERC721URIStorage: URI set of non"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "21967:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21967:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "21967:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "22046:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "22054:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "22042:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22042:15:14"
                        },
                        {
                          "hexValue": "6578697374656e7420746f6b656e",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "22059:16:14",
                          "type": "",
                          "value": "existent token"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "22035:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22035:41:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "22035:41:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "21948:6:14",
                  "type": ""
                }
              ],
              "src": "21850:233:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "22235:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "22245:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "22311:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "22316:2:14",
                          "type": "",
                          "value": "46"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "22252:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22252:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "22245:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "22417:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4",
                        "nodeType": "YulIdentifier",
                        "src": "22328:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22328:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "22328:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "22430:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "22441:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "22446:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "22437:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22437:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "22430:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "22223:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "22231:3:14",
                  "type": ""
                }
              ],
              "src": "22089:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "22632:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "22642:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "22654:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "22665:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "22650:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22650:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "22642:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "22689:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "22700:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "22685:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22685:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "22708:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "22714:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "22704:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22704:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "22678:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22678:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "22678:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "22734:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "22868:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "22742:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22742:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "22734:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "22612:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "22627:4:14",
                  "type": ""
                }
              ],
              "src": "22461:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "22940:87:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "22950:11:14",
                    "value": {
                      "name": "ptr",
                      "nodeType": "YulIdentifier",
                      "src": "22958:3:14"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "22950:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "22978:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "name": "ptr",
                          "nodeType": "YulIdentifier",
                          "src": "22981:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "22971:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22971:14:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "22971:14:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "22994:26:14",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "23012:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "23015:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "keccak256",
                        "nodeType": "YulIdentifier",
                        "src": "23002:9:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23002:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "22994:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_dataslot_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "ptr",
                  "nodeType": "YulTypedName",
                  "src": "22927:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "22935:4:14",
                  "type": ""
                }
              ],
              "src": "22886:141:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "23077:49:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "23087:33:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "23105:5:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "23112:2:14",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "23101:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23101:14:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "23117:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "23097:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23097:23:14"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "23087:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "divide_by_32_ceil",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "23060:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "23070:6:14",
                  "type": ""
                }
              ],
              "src": "23033:93:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "23185:54:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "23195:37:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "bits",
                          "nodeType": "YulIdentifier",
                          "src": "23220:4:14"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "23226:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "shl",
                        "nodeType": "YulIdentifier",
                        "src": "23216:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23216:16:14"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "23195:8:14"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_left_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "bits",
                  "nodeType": "YulTypedName",
                  "src": "23160:4:14",
                  "type": ""
                },
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "23166:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "23176:8:14",
                  "type": ""
                }
              ],
              "src": "23132:107:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "23321:317:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "23331:35:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBytes",
                          "nodeType": "YulIdentifier",
                          "src": "23352:10:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "23364:1:14",
                          "type": "",
                          "value": "8"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "23348:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23348:18:14"
                    },
                    "variables": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulTypedName",
                        "src": "23335:9:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "23375:109:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBits",
                          "nodeType": "YulIdentifier",
                          "src": "23406:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "23417:66:14",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "shift_left_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "23387:18:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23387:97:14"
                    },
                    "variables": [
                      {
                        "name": "mask",
                        "nodeType": "YulTypedName",
                        "src": "23379:4:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "23493:51:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "shiftBits",
                          "nodeType": "YulIdentifier",
                          "src": "23524:9:14"
                        },
                        {
                          "name": "toInsert",
                          "nodeType": "YulIdentifier",
                          "src": "23535:8:14"
                        }
                      ],
                      "functionName": {
                        "name": "shift_left_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "23505:18:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23505:39:14"
                    },
                    "variableNames": [
                      {
                        "name": "toInsert",
                        "nodeType": "YulIdentifier",
                        "src": "23493:8:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "23553:30:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "23566:5:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "23577:4:14"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "23573:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23573:9:14"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "23562:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23562:21:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "23553:5:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "23592:40:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "23605:5:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "toInsert",
                              "nodeType": "YulIdentifier",
                              "src": "23616:8:14"
                            },
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "23626:4:14"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "23612:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23612:19:14"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "23602:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23602:30:14"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "23592:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "update_byte_slice_dynamic32",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "23282:5:14",
                  "type": ""
                },
                {
                  "name": "shiftBytes",
                  "nodeType": "YulTypedName",
                  "src": "23289:10:14",
                  "type": ""
                },
                {
                  "name": "toInsert",
                  "nodeType": "YulTypedName",
                  "src": "23301:8:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "23314:6:14",
                  "type": ""
                }
              ],
              "src": "23245:393:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "23676:28:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "23686:12:14",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "23693:5:14"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "23686:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "identity",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "23662:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "23672:3:14",
                  "type": ""
                }
              ],
              "src": "23644:60:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "23770:82:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "23780:66:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "23838:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "23820:17:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "23820:24:14"
                            }
                          ],
                          "functionName": {
                            "name": "identity",
                            "nodeType": "YulIdentifier",
                            "src": "23811:8:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23811:34:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "23793:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23793:53:14"
                    },
                    "variableNames": [
                      {
                        "name": "converted",
                        "nodeType": "YulIdentifier",
                        "src": "23780:9:14"
                      }
                    ]
                  }
                ]
              },
              "name": "convert_t_uint256_to_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "23750:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "converted",
                  "nodeType": "YulTypedName",
                  "src": "23760:9:14",
                  "type": ""
                }
              ],
              "src": "23710:142:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "23905:28:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "23915:12:14",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "23922:5:14"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "23915:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "prepare_store_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "23891:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "23901:3:14",
                  "type": ""
                }
              ],
              "src": "23858:75:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "24015:193:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "24025:63:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value_0",
                          "nodeType": "YulIdentifier",
                          "src": "24080:7:14"
                        }
                      ],
                      "functionName": {
                        "name": "convert_t_uint256_to_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "24049:30:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24049:39:14"
                    },
                    "variables": [
                      {
                        "name": "convertedValue_0",
                        "nodeType": "YulTypedName",
                        "src": "24029:16:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "24104:4:14"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "24144:4:14"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nodeType": "YulIdentifier",
                                "src": "24138:5:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "24138:11:14"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "24151:6:14"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "convertedValue_0",
                                  "nodeType": "YulIdentifier",
                                  "src": "24183:16:14"
                                }
                              ],
                              "functionName": {
                                "name": "prepare_store_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "24159:23:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "24159:41:14"
                            }
                          ],
                          "functionName": {
                            "name": "update_byte_slice_dynamic32",
                            "nodeType": "YulIdentifier",
                            "src": "24110:27:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24110:91:14"
                        }
                      ],
                      "functionName": {
                        "name": "sstore",
                        "nodeType": "YulIdentifier",
                        "src": "24097:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24097:105:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "24097:105:14"
                  }
                ]
              },
              "name": "update_storage_value_t_uint256_to_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "23992:4:14",
                  "type": ""
                },
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "23998:6:14",
                  "type": ""
                },
                {
                  "name": "value_0",
                  "nodeType": "YulTypedName",
                  "src": "24006:7:14",
                  "type": ""
                }
              ],
              "src": "23939:269:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "24263:24:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "24273:8:14",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "24280:1:14",
                      "type": "",
                      "value": "0"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "24273:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "zero_value_for_split_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "24259:3:14",
                  "type": ""
                }
              ],
              "src": "24214:73:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "24346:136:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "24356:46:14",
                    "value": {
                      "arguments": [],
                      "functionName": {
                        "name": "zero_value_for_split_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "24370:30:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24370:32:14"
                    },
                    "variables": [
                      {
                        "name": "zero_0",
                        "nodeType": "YulTypedName",
                        "src": "24360:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "24455:4:14"
                        },
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "24461:6:14"
                        },
                        {
                          "name": "zero_0",
                          "nodeType": "YulIdentifier",
                          "src": "24469:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "update_storage_value_t_uint256_to_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "24411:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24411:65:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "24411:65:14"
                  }
                ]
              },
              "name": "storage_set_to_zero_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "24332:4:14",
                  "type": ""
                },
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "24338:6:14",
                  "type": ""
                }
              ],
              "src": "24293:189:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "24538:136:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "24605:63:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "name": "start",
                                "nodeType": "YulIdentifier",
                                "src": "24649:5:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "24656:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "storage_set_to_zero_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "24619:29:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "24619:39:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "24619:39:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "start",
                          "nodeType": "YulIdentifier",
                          "src": "24558:5:14"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "24565:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "24555:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24555:14:14"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "24570:26:14",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "24572:22:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "start",
                                "nodeType": "YulIdentifier",
                                "src": "24585:5:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "24592:1:14",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "24581:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "24581:13:14"
                          },
                          "variableNames": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "24572:5:14"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "24552:2:14",
                      "statements": []
                    },
                    "src": "24548:120:14"
                  }
                ]
              },
              "name": "clear_storage_range_t_bytes1",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "start",
                  "nodeType": "YulTypedName",
                  "src": "24526:5:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "24533:3:14",
                  "type": ""
                }
              ],
              "src": "24488:186:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "24759:464:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "24785:431:14",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "24799:54:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "array",
                                "nodeType": "YulIdentifier",
                                "src": "24847:5:14"
                              }
                            ],
                            "functionName": {
                              "name": "array_dataslot_t_string_storage",
                              "nodeType": "YulIdentifier",
                              "src": "24815:31:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "24815:38:14"
                          },
                          "variables": [
                            {
                              "name": "dataArea",
                              "nodeType": "YulTypedName",
                              "src": "24803:8:14",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "24866:63:14",
                          "value": {
                            "arguments": [
                              {
                                "name": "dataArea",
                                "nodeType": "YulIdentifier",
                                "src": "24889:8:14"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "startIndex",
                                    "nodeType": "YulIdentifier",
                                    "src": "24917:10:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "divide_by_32_ceil",
                                  "nodeType": "YulIdentifier",
                                  "src": "24899:17:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "24899:29:14"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "24885:3:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "24885:44:14"
                          },
                          "variables": [
                            {
                              "name": "deleteStart",
                              "nodeType": "YulTypedName",
                              "src": "24870:11:14",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "25086:27:14",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "25088:23:14",
                                "value": {
                                  "name": "dataArea",
                                  "nodeType": "YulIdentifier",
                                  "src": "25103:8:14"
                                },
                                "variableNames": [
                                  {
                                    "name": "deleteStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "25088:11:14"
                                  }
                                ]
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "startIndex",
                                "nodeType": "YulIdentifier",
                                "src": "25070:10:14"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "25082:2:14",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "25067:2:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "25067:18:14"
                          },
                          "nodeType": "YulIf",
                          "src": "25064:49:14"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "name": "deleteStart",
                                "nodeType": "YulIdentifier",
                                "src": "25155:11:14"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "dataArea",
                                    "nodeType": "YulIdentifier",
                                    "src": "25172:8:14"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "len",
                                        "nodeType": "YulIdentifier",
                                        "src": "25200:3:14"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "divide_by_32_ceil",
                                      "nodeType": "YulIdentifier",
                                      "src": "25182:17:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "25182:22:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "25168:3:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "25168:37:14"
                              }
                            ],
                            "functionName": {
                              "name": "clear_storage_range_t_bytes1",
                              "nodeType": "YulIdentifier",
                              "src": "25126:28:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "25126:80:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "25126:80:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "24776:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "24781:2:14",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "24773:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24773:11:14"
                    },
                    "nodeType": "YulIf",
                    "src": "24770:446:14"
                  }
                ]
              },
              "name": "clean_up_bytearray_end_slots_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "24735:5:14",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "24742:3:14",
                  "type": ""
                },
                {
                  "name": "startIndex",
                  "nodeType": "YulTypedName",
                  "src": "24747:10:14",
                  "type": ""
                }
              ],
              "src": "24680:543:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "25292:54:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "25302:37:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "bits",
                          "nodeType": "YulIdentifier",
                          "src": "25327:4:14"
                        },
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "25333:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "shr",
                        "nodeType": "YulIdentifier",
                        "src": "25323:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25323:16:14"
                    },
                    "variableNames": [
                      {
                        "name": "newValue",
                        "nodeType": "YulIdentifier",
                        "src": "25302:8:14"
                      }
                    ]
                  }
                ]
              },
              "name": "shift_right_unsigned_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "bits",
                  "nodeType": "YulTypedName",
                  "src": "25267:4:14",
                  "type": ""
                },
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "25273:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "newValue",
                  "nodeType": "YulTypedName",
                  "src": "25283:8:14",
                  "type": ""
                }
              ],
              "src": "25229:117:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "25403:118:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "25413:68:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "25462:1:14",
                                  "type": "",
                                  "value": "8"
                                },
                                {
                                  "name": "bytes",
                                  "nodeType": "YulIdentifier",
                                  "src": "25465:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "25458:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "25458:13:14"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "25477:1:14",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "25473:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "25473:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "shift_right_unsigned_dynamic",
                            "nodeType": "YulIdentifier",
                            "src": "25429:28:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25429:51:14"
                        }
                      ],
                      "functionName": {
                        "name": "not",
                        "nodeType": "YulIdentifier",
                        "src": "25425:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25425:56:14"
                    },
                    "variables": [
                      {
                        "name": "mask",
                        "nodeType": "YulTypedName",
                        "src": "25417:4:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "25490:25:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "25504:4:14"
                        },
                        {
                          "name": "mask",
                          "nodeType": "YulIdentifier",
                          "src": "25510:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "25500:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25500:15:14"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "25490:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "mask_bytes_dynamic",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "25380:4:14",
                  "type": ""
                },
                {
                  "name": "bytes",
                  "nodeType": "YulTypedName",
                  "src": "25386:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "25396:6:14",
                  "type": ""
                }
              ],
              "src": "25352:169:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "25607:214:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "25740:37:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "25767:4:14"
                        },
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "25773:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "mask_bytes_dynamic",
                        "nodeType": "YulIdentifier",
                        "src": "25748:18:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25748:29:14"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "25740:4:14"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "25786:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "25797:4:14"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "25807:1:14",
                              "type": "",
                              "value": "2"
                            },
                            {
                              "name": "len",
                              "nodeType": "YulIdentifier",
                              "src": "25810:3:14"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "25803:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25803:11:14"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "25794:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25794:21:14"
                    },
                    "variableNames": [
                      {
                        "name": "used",
                        "nodeType": "YulIdentifier",
                        "src": "25786:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "extract_used_part_and_set_length_of_short_byte_array",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "25588:4:14",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "25594:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "used",
                  "nodeType": "YulTypedName",
                  "src": "25602:4:14",
                  "type": ""
                }
              ],
              "src": "25526:295:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "25918:1303:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "25929:51:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "25976:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "25943:32:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25943:37:14"
                    },
                    "variables": [
                      {
                        "name": "newLen",
                        "nodeType": "YulTypedName",
                        "src": "25933:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "26065:22:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "26067:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "26067:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "26067:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "26037:6:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "26045:18:14",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "26034:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26034:30:14"
                    },
                    "nodeType": "YulIf",
                    "src": "26031:56:14"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "26097:52:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "slot",
                              "nodeType": "YulIdentifier",
                              "src": "26143:4:14"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nodeType": "YulIdentifier",
                            "src": "26137:5:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26137:11:14"
                        }
                      ],
                      "functionName": {
                        "name": "extract_byte_array_length",
                        "nodeType": "YulIdentifier",
                        "src": "26111:25:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26111:38:14"
                    },
                    "variables": [
                      {
                        "name": "oldLen",
                        "nodeType": "YulTypedName",
                        "src": "26101:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "26242:4:14"
                        },
                        {
                          "name": "oldLen",
                          "nodeType": "YulIdentifier",
                          "src": "26248:6:14"
                        },
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "26256:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "clean_up_bytearray_end_slots_t_string_storage",
                        "nodeType": "YulIdentifier",
                        "src": "26196:45:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26196:67:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "26196:67:14"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "26273:18:14",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "26290:1:14",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulTypedName",
                        "src": "26277:9:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "26301:17:14",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "26314:4:14",
                      "type": "",
                      "value": "0x20"
                    },
                    "variableNames": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulIdentifier",
                        "src": "26301:9:14"
                      }
                    ]
                  },
                  {
                    "cases": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "26365:611:14",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "26379:37:14",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "26398:6:14"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "26410:4:14",
                                        "type": "",
                                        "value": "0x1f"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "26406:3:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "26406:9:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "26394:3:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "26394:22:14"
                              },
                              "variables": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulTypedName",
                                  "src": "26383:7:14",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "26430:51:14",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "26476:4:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "array_dataslot_t_string_storage",
                                  "nodeType": "YulIdentifier",
                                  "src": "26444:31:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "26444:37:14"
                              },
                              "variables": [
                                {
                                  "name": "dstPtr",
                                  "nodeType": "YulTypedName",
                                  "src": "26434:6:14",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "26494:10:14",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "26503:1:14",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "i",
                                  "nodeType": "YulTypedName",
                                  "src": "26498:1:14",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "26562:163:14",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "26587:6:14"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "arguments": [
                                                {
                                                  "name": "src",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "26605:3:14"
                                                },
                                                {
                                                  "name": "srcOffset",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "26610:9:14"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "26601:3:14"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "26601:19:14"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "26595:5:14"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "26595:26:14"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "26580:6:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "26580:42:14"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "26580:42:14"
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "26639:24:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "26653:6:14"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "26661:1:14",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "26649:3:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "26649:14:14"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "26639:6:14"
                                      }
                                    ]
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "26680:31:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "srcOffset",
                                          "nodeType": "YulIdentifier",
                                          "src": "26697:9:14"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "26708:2:14",
                                          "type": "",
                                          "value": "32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "26693:3:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "26693:18:14"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "26680:9:14"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "26528:1:14"
                                  },
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "26531:7:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "26525:2:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "26525:14:14"
                              },
                              "nodeType": "YulForLoop",
                              "post": {
                                "nodeType": "YulBlock",
                                "src": "26540:21:14",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "26542:17:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "26551:1:14"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "26554:4:14",
                                          "type": "",
                                          "value": "0x20"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "26547:3:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "26547:12:14"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "26542:1:14"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "pre": {
                                "nodeType": "YulBlock",
                                "src": "26521:3:14",
                                "statements": []
                              },
                              "src": "26517:208:14"
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "26761:156:14",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "26779:43:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "26806:3:14"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "26811:9:14"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "26802:3:14"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "26802:19:14"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "26796:5:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "26796:26:14"
                                    },
                                    "variables": [
                                      {
                                        "name": "lastValue",
                                        "nodeType": "YulTypedName",
                                        "src": "26783:9:14",
                                        "type": ""
                                      }
                                    ]
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "26846:6:14"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "lastValue",
                                              "nodeType": "YulIdentifier",
                                              "src": "26873:9:14"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "newLen",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "26888:6:14"
                                                },
                                                {
                                                  "kind": "number",
                                                  "nodeType": "YulLiteral",
                                                  "src": "26896:4:14",
                                                  "type": "",
                                                  "value": "0x1f"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "and",
                                                "nodeType": "YulIdentifier",
                                                "src": "26884:3:14"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "26884:17:14"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mask_bytes_dynamic",
                                            "nodeType": "YulIdentifier",
                                            "src": "26854:18:14"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "26854:48:14"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "26839:6:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "26839:64:14"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "26839:64:14"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "26744:7:14"
                                  },
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "26753:6:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "26741:2:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "26741:19:14"
                              },
                              "nodeType": "YulIf",
                              "src": "26738:179:14"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "26937:4:14"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "newLen",
                                            "nodeType": "YulIdentifier",
                                            "src": "26951:6:14"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "26959:1:14",
                                            "type": "",
                                            "value": "2"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mul",
                                          "nodeType": "YulIdentifier",
                                          "src": "26947:3:14"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "26947:14:14"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "26963:1:14",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "26943:3:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "26943:22:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "26930:6:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "26930:36:14"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "26930:36:14"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "26358:618:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "26363:1:14",
                          "type": "",
                          "value": "1"
                        }
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "26993:222:14",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "27007:14:14",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "27020:1:14",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "value",
                                  "nodeType": "YulTypedName",
                                  "src": "27011:5:14",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "27044:67:14",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "27062:35:14",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "27081:3:14"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "27086:9:14"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "27077:3:14"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "27077:19:14"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "27071:5:14"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "27071:26:14"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "27062:5:14"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "name": "newLen",
                                "nodeType": "YulIdentifier",
                                "src": "27037:6:14"
                              },
                              "nodeType": "YulIf",
                              "src": "27034:77:14"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "27131:4:14"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "27190:5:14"
                                      },
                                      {
                                        "name": "newLen",
                                        "nodeType": "YulIdentifier",
                                        "src": "27197:6:14"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "extract_used_part_and_set_length_of_short_byte_array",
                                      "nodeType": "YulIdentifier",
                                      "src": "27137:52:14"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "27137:67:14"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "27124:6:14"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "27124:81:14"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "27124:81:14"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "26985:230:14",
                        "value": "default"
                      }
                    ],
                    "expression": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "26338:6:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "26346:2:14",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "26335:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26335:14:14"
                    },
                    "nodeType": "YulSwitch",
                    "src": "26328:887:14"
                  }
                ]
              },
              "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "25907:4:14",
                  "type": ""
                },
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "25913:3:14",
                  "type": ""
                }
              ],
              "src": "25826:1395:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "27333:118:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "27355:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "27363:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "27351:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27351:14:14"
                        },
                        {
                          "hexValue": "4552433732313a207472616e736665722066726f6d20696e636f727265637420",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "27367:34:14",
                          "type": "",
                          "value": "ERC721: transfer from incorrect "
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "27344:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27344:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "27344:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "27423:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "27431:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "27419:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27419:15:14"
                        },
                        {
                          "hexValue": "6f776e6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "27436:7:14",
                          "type": "",
                          "value": "owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "27412:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27412:32:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "27412:32:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "27325:6:14",
                  "type": ""
                }
              ],
              "src": "27227:224:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "27603:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "27613:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "27679:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "27684:2:14",
                          "type": "",
                          "value": "37"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "27620:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27620:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "27613:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "27785:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48",
                        "nodeType": "YulIdentifier",
                        "src": "27696:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27696:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "27696:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "27798:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "27809:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "27814:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "27805:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27805:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "27798:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "27591:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "27599:3:14",
                  "type": ""
                }
              ],
              "src": "27457:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "28000:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "28010:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "28022:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "28033:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "28018:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28018:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "28010:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "28057:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "28068:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "28053:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28053:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "28076:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "28082:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "28072:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28072:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "28046:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28046:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "28046:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "28102:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "28236:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "28110:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28110:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "28102:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "27980:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "27995:4:14",
                  "type": ""
                }
              ],
              "src": "27829:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "28360:117:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "28382:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "28390:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "28378:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28378:14:14"
                        },
                        {
                          "hexValue": "4552433732313a207472616e7366657220746f20746865207a65726f20616464",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "28394:34:14",
                          "type": "",
                          "value": "ERC721: transfer to the zero add"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "28371:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28371:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "28371:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "28450:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "28458:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "28446:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28446:15:14"
                        },
                        {
                          "hexValue": "72657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "28463:6:14",
                          "type": "",
                          "value": "ress"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "28439:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28439:31:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "28439:31:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "28352:6:14",
                  "type": ""
                }
              ],
              "src": "28254:223:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "28629:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "28639:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "28705:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "28710:2:14",
                          "type": "",
                          "value": "36"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "28646:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28646:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "28639:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "28811:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4",
                        "nodeType": "YulIdentifier",
                        "src": "28722:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28722:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "28722:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "28824:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "28835:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "28840:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "28831:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28831:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "28824:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "28617:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "28625:3:14",
                  "type": ""
                }
              ],
              "src": "28483:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "29026:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "29036:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "29048:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "29059:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "29044:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29044:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "29036:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "29083:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "29094:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "29079:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29079:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "29102:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "29108:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "29098:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29098:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "29072:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29072:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "29072:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "29128:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "29262:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "29136:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29136:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "29128:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "29006:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "29021:4:14",
                  "type": ""
                }
              ],
              "src": "28855:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "29386:76:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "29408:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "29416:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "29404:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29404:14:14"
                        },
                        {
                          "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "29420:34:14",
                          "type": "",
                          "value": "Ownable: caller is not the owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "29397:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29397:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "29397:58:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "29378:6:14",
                  "type": ""
                }
              ],
              "src": "29280:182:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "29614:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "29624:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "29690:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "29695:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "29631:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29631:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "29624:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "29796:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                        "nodeType": "YulIdentifier",
                        "src": "29707:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29707:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "29707:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "29809:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "29820:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "29825:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "29816:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29816:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "29809:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "29602:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "29610:3:14",
                  "type": ""
                }
              ],
              "src": "29468:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "30011:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "30021:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "30033:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "30044:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "30029:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30029:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "30021:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "30068:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "30079:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "30064:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30064:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "30087:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "30093:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "30083:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30083:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "30057:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30057:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "30057:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "30113:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "30247:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "30121:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30121:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "30113:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "29991:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "30006:4:14",
                  "type": ""
                }
              ],
              "src": "29840:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "30371:69:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "30393:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "30401:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "30389:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30389:14:14"
                        },
                        {
                          "hexValue": "4552433732313a20617070726f766520746f2063616c6c6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "30405:27:14",
                          "type": "",
                          "value": "ERC721: approve to caller"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "30382:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30382:51:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "30382:51:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "30363:6:14",
                  "type": ""
                }
              ],
              "src": "30265:175:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "30592:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "30602:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "30668:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "30673:2:14",
                          "type": "",
                          "value": "25"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "30609:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30609:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "30602:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "30774:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05",
                        "nodeType": "YulIdentifier",
                        "src": "30685:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30685:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "30685:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "30787:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "30798:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "30803:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "30794:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30794:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "30787:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "30580:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "30588:3:14",
                  "type": ""
                }
              ],
              "src": "30446:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "30989:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "30999:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "31011:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "31022:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "31007:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31007:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "30999:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "31046:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "31057:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "31042:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31042:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "31065:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "31071:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "31061:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31061:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "31035:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31035:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "31035:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "31091:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "31225:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "31099:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31099:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "31091:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "30969:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "30984:4:14",
                  "type": ""
                }
              ],
              "src": "30818:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "31349:131:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "31371:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "31379:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "31367:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31367:14:14"
                        },
                        {
                          "hexValue": "4552433732313a207472616e7366657220746f206e6f6e204552433732315265",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "31383:34:14",
                          "type": "",
                          "value": "ERC721: transfer to non ERC721Re"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "31360:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31360:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "31360:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "31439:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "31447:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "31435:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31435:15:14"
                        },
                        {
                          "hexValue": "63656976657220696d706c656d656e746572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "31452:20:14",
                          "type": "",
                          "value": "ceiver implementer"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "31428:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31428:45:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "31428:45:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "31341:6:14",
                  "type": ""
                }
              ],
              "src": "31243:237:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "31632:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "31642:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "31708:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "31713:2:14",
                          "type": "",
                          "value": "50"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "31649:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31649:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "31642:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "31814:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e",
                        "nodeType": "YulIdentifier",
                        "src": "31725:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31725:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "31725:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "31827:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "31838:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "31843:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "31834:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31834:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "31827:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "31620:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "31628:3:14",
                  "type": ""
                }
              ],
              "src": "31486:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "32029:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "32039:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "32051:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "32062:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "32047:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32047:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "32039:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "32086:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "32097:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "32082:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32082:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "32105:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "32111:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "32101:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32101:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "32075:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32075:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "32075:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "32131:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "32265:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "32139:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32139:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "32131:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "32009:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "32024:4:14",
                  "type": ""
                }
              ],
              "src": "31858:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "32341:40:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "32352:22:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "32368:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "32362:5:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32362:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "32352:6:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_bytes_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "32324:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "32334:6:14",
                  "type": ""
                }
              ],
              "src": "32283:98:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "32482:73:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "32499:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "32504:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "32492:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32492:19:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "32492:19:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "32520:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "32539:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "32544:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "32535:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32535:14:14"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "32520:11:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "32454:3:14",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "32459:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "32470:11:14",
                  "type": ""
                }
              ],
              "src": "32387:168:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "32651:283:14",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "32661:52:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "32707:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_bytes_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "32675:31:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32675:38:14"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "32665:6:14",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "32722:77:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "32787:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "32792:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "32729:57:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32729:70:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "32722:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "32847:5:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "32854:4:14",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "32843:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32843:16:14"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "32861:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "32866:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory_with_cleanup",
                        "nodeType": "YulIdentifier",
                        "src": "32808:34:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32808:65:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "32808:65:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "32882:46:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "32893:3:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "32920:6:14"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "32898:21:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32898:29:14"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "32889:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32889:39:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "32882:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "32632:5:14",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "32639:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "32647:3:14",
                  "type": ""
                }
              ],
              "src": "32561:373:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "33140:440:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "33150:27:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "33162:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "33173:3:14",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "33158:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33158:19:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "33150:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "33231:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "33244:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "33255:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "33240:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33240:17:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "33187:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33187:71:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "33187:71:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "33312:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "33325:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "33336:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "33321:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33321:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "33268:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33268:72:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "33268:72:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "33394:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "33407:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "33418:2:14",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "33403:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33403:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "33350:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33350:72:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "33350:72:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "33443:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "33454:2:14",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "33439:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33439:18:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "33463:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "33469:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "33459:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33459:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "33432:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33432:48:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "33432:48:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "33489:84:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value3",
                          "nodeType": "YulIdentifier",
                          "src": "33559:6:14"
                        },
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "33568:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "33497:61:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33497:76:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "33489:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "33088:9:14",
                  "type": ""
                },
                {
                  "name": "value3",
                  "nodeType": "YulTypedName",
                  "src": "33100:6:14",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "33108:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "33116:6:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "33124:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "33135:4:14",
                  "type": ""
                }
              ],
              "src": "32940:640:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "33648:79:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "33658:22:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "33673:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "33667:5:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33667:13:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "33658:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "33715:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_bytes4",
                        "nodeType": "YulIdentifier",
                        "src": "33689:25:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33689:32:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "33689:32:14"
                  }
                ]
              },
              "name": "abi_decode_t_bytes4_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "33626:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "33634:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "33642:5:14",
                  "type": ""
                }
              ],
              "src": "33586:141:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "33809:273:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "33855:83:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "33857:77:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "33857:79:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "33857:79:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "33830:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "33839:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "33826:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33826:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "33851:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "33822:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33822:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "33819:119:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "33948:127:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "33963:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "33977:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "33967:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "33992:73:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "34037:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "34048:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "34033:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "34033:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "34057:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_bytes4_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "34002:30:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34002:63:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "33992:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_bytes4_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "33779:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "33790:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "33802:6:14",
                  "type": ""
                }
              ],
              "src": "33733:349:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "34116:152:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "34133:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "34136:77:14",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "34126:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34126:88:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "34126:88:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "34230:1:14",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "34233:4:14",
                          "type": "",
                          "value": "0x12"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "34223:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34223:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "34223:15:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "34254:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "34257:4:14",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "34247:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34247:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "34247:15:14"
                  }
                ]
              },
              "name": "panic_error_0x12",
              "nodeType": "YulFunctionDefinition",
              "src": "34088:180:14"
            }
          ]
        },
        "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_bytes4(value) -> cleaned {\n        cleaned := and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000)\n    }\n\n    function validator_revert_t_bytes4(value) {\n        if iszero(eq(value, cleanup_t_bytes4(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bytes4(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory_with_cleanup(src, dst, length) {\n        calldatacopy(dst, src, length)\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory_with_cleanup(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bool(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_addresst_bool(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_bool(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_allocation_size_t_bytes_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function abi_decode_available_length_t_bytes_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_bytes_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory_with_cleanup(src, dst, length)\n    }\n\n    // bytes\n    function abi_decode_t_bytes_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_bytes_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3 {\n        if slt(sub(dataEnd, headStart), 128) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 96))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value3 := abi_decode_t_bytes_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approval to current owne\")\n\n        mstore(add(memPtr, 32), \"r\")\n\n    }\n\n    function abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 33)\n        store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approve caller is not to\")\n\n        mstore(add(memPtr, 32), \"ken owner or approved for all\")\n\n    }\n\n    function abi_encode_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 61)\n        store_literal_in_memory_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: caller is not token owne\")\n\n        mstore(add(memPtr, 32), \"r or approved\")\n\n    }\n\n    function abi_encode_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 45)\n        store_literal_in_memory_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: invalid token ID\")\n\n    }\n\n    function abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 24)\n        store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: address zero is not a va\")\n\n        mstore(add(memPtr, 32), \"lid owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 41)\n        store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length) -> updated_pos {\n        updated_pos := pos\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, length)\n    }\n\n    function abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed(pos , value1, value0) -> end {\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value0,  pos)\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value1,  pos)\n\n        end := pos\n    }\n\n    function store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: new owner is the zero a\")\n\n        mstore(add(memPtr, 32), \"ddress\")\n\n    }\n\n    function abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: token already minted\")\n\n    }\n\n    function abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 28)\n        store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721URIStorage: URI set of non\")\n\n        mstore(add(memPtr, 32), \"existent token\")\n\n    }\n\n    function abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 46)\n        store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n    function store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer from incorrect \")\n\n        mstore(add(memPtr, 32), \"owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer to the zero add\")\n\n        mstore(add(memPtr, 32), \"ress\")\n\n    }\n\n    function abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: caller is not the owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approve to caller\")\n\n    }\n\n    function abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 25)\n        store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer to non ERC721Re\")\n\n        mstore(add(memPtr, 32), \"ceiver implementer\")\n\n    }\n\n    function abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 50)\n        store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_length_t_bytes_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_bytes_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed(headStart , value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 128)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n        mstore(add(headStart, 96), sub(tail, headStart))\n        tail := abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value3,  tail)\n\n    }\n\n    function abi_decode_t_bytes4_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_tuple_t_bytes4_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n}\n",
        "id": 14,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "320:501:13:-:0;;;460:53;;;;;;;;;;1390:113:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1464:5;1456;:13;;;;;;:::i;:::-;;1489:7;1479;:17;;;;;;:::i;:::-;;1390:113;;936:32:0;955:12;:10;;;:12;;:::i;:::-;936:18;;;:32;;:::i;:::-;320:501:13;;640:96:7;693:7;719:10;712:17;;640:96;:::o;2433:187:0:-;2506:16;2525:6;;;;;;;;;;;2506:25;;2550:8;2541:6;;:17;;;;;;;;;;;;;;;;;;2604:8;2573:40;;2594:8;2573:40;;;;;;;;;;;;2496:124;2433:187;:::o;7:99:14:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:180::-;160:77;157:1;150:88;257:4;254:1;247:15;281:4;278:1;271:15;298:180;346:77;343:1;336:88;443:4;440:1;433:15;467:4;464:1;457:15;484:320;528:6;565:1;559:4;555:12;545:22;;612:1;606:4;602:12;633:18;623:81;;689:4;681:6;677:17;667:27;;623:81;751:2;743:6;740:14;720:18;717:38;714:84;;770:18;;:::i;:::-;714:84;535:269;484:320;;;:::o;810:141::-;859:4;882:3;874:11;;905:3;902:1;895:14;939:4;936:1;926:18;918:26;;810:141;;;:::o;957:93::-;994:6;1041:2;1036;1029:5;1025:14;1021:23;1011:33;;957:93;;;:::o;1056:107::-;1100:8;1150:5;1144:4;1140:16;1119:37;;1056:107;;;;:::o;1169:393::-;1238:6;1288:1;1276:10;1272:18;1311:97;1341:66;1330:9;1311:97;:::i;:::-;1429:39;1459:8;1448:9;1429:39;:::i;:::-;1417:51;;1501:4;1497:9;1490:5;1486:21;1477:30;;1550:4;1540:8;1536:19;1529:5;1526:30;1516:40;;1245:317;;1169:393;;;;;:::o;1568:77::-;1605:7;1634:5;1623:16;;1568:77;;;:::o;1651:60::-;1679:3;1700:5;1693:12;;1651:60;;;:::o;1717:142::-;1767:9;1800:53;1818:34;1827:24;1845:5;1827:24;:::i;:::-;1818:34;:::i;:::-;1800:53;:::i;:::-;1787:66;;1717:142;;;:::o;1865:75::-;1908:3;1929:5;1922:12;;1865:75;;;:::o;1946:269::-;2056:39;2087:7;2056:39;:::i;:::-;2117:91;2166:41;2190:16;2166:41;:::i;:::-;2158:6;2151:4;2145:11;2117:91;:::i;:::-;2111:4;2104:105;2022:193;1946:269;;;:::o;2221:73::-;2266:3;2221:73;:::o;2300:189::-;2377:32;;:::i;:::-;2418:65;2476:6;2468;2462:4;2418:65;:::i;:::-;2353:136;2300:189;;:::o;2495:186::-;2555:120;2572:3;2565:5;2562:14;2555:120;;;2626:39;2663:1;2656:5;2626:39;:::i;:::-;2599:1;2592:5;2588:13;2579:22;;2555:120;;;2495:186;;:::o;2687:543::-;2788:2;2783:3;2780:11;2777:446;;;2822:38;2854:5;2822:38;:::i;:::-;2906:29;2924:10;2906:29;:::i;:::-;2896:8;2892:44;3089:2;3077:10;3074:18;3071:49;;;3110:8;3095:23;;3071:49;3133:80;3189:22;3207:3;3189:22;:::i;:::-;3179:8;3175:37;3162:11;3133:80;:::i;:::-;2792:431;;2777:446;2687:543;;;:::o;3236:117::-;3290:8;3340:5;3334:4;3330:16;3309:37;;3236:117;;;;:::o;3359:169::-;3403:6;3436:51;3484:1;3480:6;3472:5;3469:1;3465:13;3436:51;:::i;:::-;3432:56;3517:4;3511;3507:15;3497:25;;3410:118;3359:169;;;;:::o;3533:295::-;3609:4;3755:29;3780:3;3774:4;3755:29;:::i;:::-;3747:37;;3817:3;3814:1;3810:11;3804:4;3801:21;3793:29;;3533:295;;;;:::o;3833:1395::-;3950:37;3983:3;3950:37;:::i;:::-;4052:18;4044:6;4041:30;4038:56;;;4074:18;;:::i;:::-;4038:56;4118:38;4150:4;4144:11;4118:38;:::i;:::-;4203:67;4263:6;4255;4249:4;4203:67;:::i;:::-;4297:1;4321:4;4308:17;;4353:2;4345:6;4342:14;4370:1;4365:618;;;;5027:1;5044:6;5041:77;;;5093:9;5088:3;5084:19;5078:26;5069:35;;5041:77;5144:67;5204:6;5197:5;5144:67;:::i;:::-;5138:4;5131:81;5000:222;4335:887;;4365:618;4417:4;4413:9;4405:6;4401:22;4451:37;4483:4;4451:37;:::i;:::-;4510:1;4524:208;4538:7;4535:1;4532:14;4524:208;;;4617:9;4612:3;4608:19;4602:26;4594:6;4587:42;4668:1;4660:6;4656:14;4646:24;;4715:2;4704:9;4700:18;4687:31;;4561:4;4558:1;4554:12;4549:17;;4524:208;;;4760:6;4751:7;4748:19;4745:179;;;4818:9;4813:3;4809:19;4803:26;4861:48;4903:4;4895:6;4891:17;4880:9;4861:48;:::i;:::-;4853:6;4846:64;4768:156;4745:179;4970:1;4966;4958:6;4954:14;4950:22;4944:4;4937:36;4372:611;;;4335:887;;3925:1303;;;3833:1395;;:::o;320:501:13:-;;;;;;;",
    "deployedSourceMap": "320:501:13:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1570:300:1;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;519:299:13;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2471:98:1;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3935:167;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3468:406;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4612:326;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5004:179;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2190:219;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1929:204;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1831:101:0;;;;;;;;;;;;;:::i;:::-;;1201:85;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2633:102:1;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4169:153;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5249:314;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;482:608:4;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4388:162:1;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2081:198:0;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1570:300:1;1672:4;1722:25;1707:40;;;:11;:40;;;;:104;;;;1778:33;1763:48;;;:11;:48;;;;1707:104;:156;;;;1827:36;1851:11;1827:23;:36::i;:::-;1707:156;1688:175;;1570:300;;;:::o;519:299:13:-;600:7;619:19;:7;:17;:19::i;:::-;649:13;663:17;:7;:15;:17::i;:::-;649:31;;728:20;734:7;742:5;728;:20::i;:::-;759:28;772:5;778:8;759:12;:28::i;:::-;805:5;798:12;;;519:299;;;;:::o;2471:98:1:-;2525:13;2557:5;2550:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2471:98;:::o;3935:167::-;4011:7;4030:23;4045:7;4030:14;:23::i;:::-;4071:15;:24;4087:7;4071:24;;;;;;;;;;;;;;;;;;;;;4064:31;;3935:167;;;:::o;3468:406::-;3548:13;3564:23;3579:7;3564:14;:23::i;:::-;3548:39;;3611:5;3605:11;;:2;:11;;;3597:57;;;;;;;;;;;;:::i;:::-;;;;;;;;;3702:5;3686:21;;:12;:10;:12::i;:::-;:21;;;:62;;;;3711:37;3728:5;3735:12;:10;:12::i;:::-;3711:16;:37::i;:::-;3686:62;3665:170;;;;;;;;;;;;:::i;:::-;;;;;;;;;3846:21;3855:2;3859:7;3846:8;:21::i;:::-;3538:336;3468:406;;:::o;4612:326::-;4801:41;4820:12;:10;:12::i;:::-;4834:7;4801:18;:41::i;:::-;4793:99;;;;;;;;;;;;:::i;:::-;;;;;;;;;4903:28;4913:4;4919:2;4923:7;4903:9;:28::i;:::-;4612:326;;;:::o;5004:179::-;5137:39;5154:4;5160:2;5164:7;5137:39;;;;;;;;;;;;:16;:39::i;:::-;5004:179;;;:::o;2190:219::-;2262:7;2281:13;2297:17;2306:7;2297:8;:17::i;:::-;2281:33;;2349:1;2332:19;;:5;:19;;;2324:56;;;;;;;;;;;;:::i;:::-;;;;;;;;;2397:5;2390:12;;;2190:219;;;:::o;1929:204::-;2001:7;2045:1;2028:19;;:5;:19;;;2020:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;2110:9;:16;2120:5;2110:16;;;;;;;;;;;;;;;;2103:23;;1929:204;;;:::o;1831:101:0:-;1094:13;:11;:13::i;:::-;1895:30:::1;1922:1;1895:18;:30::i;:::-;1831:101::o:0;1201:85::-;1247:7;1273:6;;;;;;;;;;;1266:13;;1201:85;:::o;2633:102:1:-;2689:13;2721:7;2714:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2633:102;:::o;4169:153::-;4263:52;4282:12;:10;:12::i;:::-;4296:8;4306;4263:18;:52::i;:::-;4169:153;;:::o;5249:314::-;5417:41;5436:12;:10;:12::i;:::-;5450:7;5417:18;:41::i;:::-;5409:99;;;;;;;;;;;;:::i;:::-;;;;;;;;;5518:38;5532:4;5538:2;5542:7;5551:4;5518:13;:38::i;:::-;5249:314;;;;:::o;482:608:4:-;555:13;580:23;595:7;580:14;:23::i;:::-;614;640:10;:19;651:7;640:19;;;;;;;;;;;614:45;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;669:18;690:10;:8;:10::i;:::-;669:31;;795:1;779:4;773:18;:23;769:70;;819:9;812:16;;;;;;769:70;967:1;947:9;941:23;:27;937:106;;;1015:4;1021:9;998:33;;;;;;;;;:::i;:::-;;;;;;;;;;;;;984:48;;;;;;937:106;1060:23;1075:7;1060:14;:23::i;:::-;1053:30;;;;482:608;;;;:::o;4388:162:1:-;4485:4;4508:18;:25;4527:5;4508:25;;;;;;;;;;;;;;;:35;4534:8;4508:35;;;;;;;;;;;;;;;;;;;;;;;;;4501:42;;4388:162;;;;:::o;2081:198:0:-;1094:13;:11;:13::i;:::-;2189:1:::1;2169:22;;:8;:22;;::::0;2161:73:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;2244:28;2263:8;2244:18;:28::i;:::-;2081:198:::0;:::o;829:155:10:-;914:4;952:25;937:40;;;:11;:40;;;;930:47;;829:155;;;:::o;945:123:8:-;1050:1;1032:7;:14;;;:19;;;;;;;;;;;945:123;:::o;827:112::-;892:7;918;:14;;;911:21;;827:112;;;:::o;9091:920:1:-;9184:1;9170:16;;:2;:16;;;9162:61;;;;;;;;;;;;:::i;:::-;;;;;;;;;9242:16;9250:7;9242;:16::i;:::-;9241:17;9233:58;;;;;;;;;;;;:::i;:::-;;;;;;;;;9302:48;9331:1;9335:2;9339:7;9348:1;9302:20;:48::i;:::-;9446:16;9454:7;9446;:16::i;:::-;9445:17;9437:58;;;;;;;;;;;;:::i;:::-;;;;;;;;;9854:1;9837:9;:13;9847:2;9837:13;;;;;;;;;;;;;;;;:18;;;;;;;;;;;9895:2;9876:7;:16;9884:7;9876:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;9938:7;9934:2;9913:33;;9930:1;9913:33;;;;;;;;;;;;9957:47;9985:1;9989:2;9993:7;10002:1;9957:19;:47::i;:::-;9091:920;;:::o;1237:214:4:-;1336:16;1344:7;1336;:16::i;:::-;1328:75;;;;;;;;;;;;:::i;:::-;;;;;;;;;1435:9;1413:10;:19;1424:7;1413:19;;;;;;;;;;;:31;;;;;;:::i;:::-;;1237:214;;:::o;13466:133:1:-;13547:16;13555:7;13547;:16::i;:::-;13539:53;;;;;;;;;;;;:::i;:::-;;;;;;;;;13466:133;:::o;640:96:7:-;693:7;719:10;712:17;;640:96;:::o;12768:171:1:-;12869:2;12842:15;:24;12858:7;12842:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;12924:7;12920:2;12886:46;;12895:23;12910:7;12895:14;:23::i;:::-;12886:46;;;;;;;;;;;;12768:171;;:::o;7540:261::-;7633:4;7649:13;7665:23;7680:7;7665:14;:23::i;:::-;7649:39;;7717:5;7706:16;;:7;:16;;;:52;;;;7726:32;7743:5;7750:7;7726:16;:32::i;:::-;7706:52;:87;;;;7786:7;7762:31;;:20;7774:7;7762:11;:20::i;:::-;:31;;;7706:87;7698:96;;;7540:261;;;;:::o;11423:1233::-;11577:4;11550:31;;:23;11565:7;11550:14;:23::i;:::-;:31;;;11542:81;;;;;;;;;;;;:::i;:::-;;;;;;;;;11655:1;11641:16;;:2;:16;;;11633:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;11709:42;11730:4;11736:2;11740:7;11749:1;11709:20;:42::i;:::-;11878:4;11851:31;;:23;11866:7;11851:14;:23::i;:::-;:31;;;11843:81;;;;;;;;;;;;:::i;:::-;;;;;;;;;11993:15;:24;12009:7;11993:24;;;;;;;;;;;;11986:31;;;;;;;;;;;12480:1;12461:9;:15;12471:4;12461:15;;;;;;;;;;;;;;;;:20;;;;;;;;;;;12512:1;12495:9;:13;12505:2;12495:13;;;;;;;;;;;;;;;;:18;;;;;;;;;;;12552:2;12533:7;:16;12541:7;12533:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;12589:7;12585:2;12570:27;;12579:4;12570:27;;;;;;;;;;;;12608:41;12628:4;12634:2;12638:7;12647:1;12608:19;:41::i;:::-;11423:1233;;;:::o;6838:115::-;6904:7;6930;:16;6938:7;6930:16;;;;;;;;;;;;;;;;;;;;;6923:23;;6838:115;;;:::o;1359:130:0:-;1433:12;:10;:12::i;:::-;1422:23;;:7;:5;:7::i;:::-;:23;;;1414:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1359:130::o;2433:187::-;2506:16;2525:6;;;;;;;;;;;2506:25;;2550:8;2541:6;;:17;;;;;;;;;;;;;;;;;;2604:8;2573:40;;2594:8;2573:40;;;;;;;;;;;;2496:124;2433:187;:::o;13075:307:1:-;13225:8;13216:17;;:5;:17;;;13208:55;;;;;;;;;;;;:::i;:::-;;;;;;;;;13311:8;13273:18;:25;13292:5;13273:25;;;;;;;;;;;;;;;:35;13299:8;13273:35;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;13356:8;13334:41;;13349:5;13334:41;;;13366:8;13334:41;;;;;;:::i;:::-;;;;;;;;13075:307;;;:::o;6424:305::-;6574:28;6584:4;6590:2;6594:7;6574:9;:28::i;:::-;6620:47;6643:4;6649:2;6653:7;6662:4;6620:22;:47::i;:::-;6612:110;;;;;;;;;;;;:::i;:::-;;;;;;;;;6424:305;;;;:::o;3319:92::-;3370:13;3395:9;;;;;;;;;;;;;;3319:92;:::o;2801:276::-;2874:13;2899:23;2914:7;2899:14;:23::i;:::-;2933:21;2957:10;:8;:10::i;:::-;2933:34;;3008:1;2990:7;2984:21;:25;:86;;;;;;;;;;;;;;;;;3036:7;3045:18;:7;:16;:18::i;:::-;3019:45;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2984:86;2977:93;;;2801:276;;;:::o;7256:126::-;7321:4;7373:1;7344:31;;:17;7353:7;7344:8;:17::i;:::-;:31;;;;7337:38;;7256:126;;;:::o;15698:154::-;;;;;:::o;16558:153::-;;;;;:::o;14151:831::-;14300:4;14320:15;:2;:13;;;:15::i;:::-;14316:660;;;14371:2;14355:36;;;14392:12;:10;:12::i;:::-;14406:4;14412:7;14421:4;14355:71;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;14351:573;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14610:1;14593:6;:13;:18;14589:321;;14635:60;;;;;;;;;;:::i;:::-;;;;;;;;14589:321;14862:6;14856:13;14847:6;14843:2;14839:15;14832:38;14351:573;14486:41;;;14476:51;;;:6;:51;;;;14469:58;;;;;14316:660;14961:4;14954:11;;14151:831;;;;;;;:::o;415:696:9:-;471:13;520:14;557:1;537:17;548:5;537:10;:17::i;:::-;:21;520:38;;572:20;606:6;595:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;572:41;;627:11;753:6;749:2;745:15;737:6;733:28;726:35;;788:280;795:4;788:280;;;819:5;;;;;;;;958:8;953:2;946:5;942:14;937:30;932:3;924:44;1012:2;1003:11;;;;;;:::i;:::-;;;;;1045:1;1036:5;:10;788:280;1032:21;788:280;1088:6;1081:13;;;;;415:696;;;:::o;1175:320:6:-;1235:4;1487:1;1465:7;:19;;;:23;1458:30;;1175:320;;;:::o;9889:890:12:-;9942:7;9961:14;9978:1;9961:18;;10026:6;10017:5;:15;10013:99;;10061:6;10052:15;;;;;;:::i;:::-;;;;;10095:2;10085:12;;;;10013:99;10138:6;10129:5;:15;10125:99;;10173:6;10164:15;;;;;;:::i;:::-;;;;;10207:2;10197:12;;;;10125:99;10250:6;10241:5;:15;10237:99;;10285:6;10276:15;;;;;;:::i;:::-;;;;;10319:2;10309:12;;;;10237:99;10362:5;10353;:14;10349:96;;10396:5;10387:14;;;;;;:::i;:::-;;;;;10429:1;10419:11;;;;10349:96;10471:5;10462;:14;10458:96;;10505:5;10496:14;;;;;;:::i;:::-;;;;;10538:1;10528:11;;;;10458:96;10580:5;10571;:14;10567:96;;10614:5;10605:14;;;;;;:::i;:::-;;;;;10647:1;10637:11;;;;10567:96;10689:5;10680;:14;10676:64;;10724:1;10714:11;;;;10676:64;10766:6;10759:13;;;9889:890;;;:::o;7:75:14:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:149;370:7;410:66;403:5;399:78;388:89;;334:149;;;:::o;489:120::-;561:23;578:5;561:23;:::i;:::-;554:5;551:34;541:62;;599:1;596;589:12;541:62;489:120;:::o;615:137::-;660:5;698:6;685:20;676:29;;714:32;740:5;714:32;:::i;:::-;615:137;;;;:::o;758:327::-;816:6;865:2;853:9;844:7;840:23;836:32;833:119;;;871:79;;:::i;:::-;833:119;991:1;1016:52;1060:7;1051:6;1040:9;1036:22;1016:52;:::i;:::-;1006:62;;962:116;758:327;;;;:::o;1091:90::-;1125:7;1168:5;1161:13;1154:21;1143:32;;1091:90;;;:::o;1187:109::-;1268:21;1283:5;1268:21;:::i;:::-;1263:3;1256:34;1187:109;;:::o;1302:210::-;1389:4;1427:2;1416:9;1412:18;1404:26;;1440:65;1502:1;1491:9;1487:17;1478:6;1440:65;:::i;:::-;1302:210;;;;:::o;1518:117::-;1627:1;1624;1617:12;1641:117;1750:1;1747;1740:12;1764:102;1805:6;1856:2;1852:7;1847:2;1840:5;1836:14;1832:28;1822:38;;1764:102;;;:::o;1872:180::-;1920:77;1917:1;1910:88;2017:4;2014:1;2007:15;2041:4;2038:1;2031:15;2058:281;2141:27;2163:4;2141:27;:::i;:::-;2133:6;2129:40;2271:6;2259:10;2256:22;2235:18;2223:10;2220:34;2217:62;2214:88;;;2282:18;;:::i;:::-;2214:88;2322:10;2318:2;2311:22;2101:238;2058:281;;:::o;2345:129::-;2379:6;2406:20;;:::i;:::-;2396:30;;2435:33;2463:4;2455:6;2435:33;:::i;:::-;2345:129;;;:::o;2480:308::-;2542:4;2632:18;2624:6;2621:30;2618:56;;;2654:18;;:::i;:::-;2618:56;2692:29;2714:6;2692:29;:::i;:::-;2684:37;;2776:4;2770;2766:15;2758:23;;2480:308;;;:::o;2794:146::-;2891:6;2886:3;2881;2868:30;2932:1;2923:6;2918:3;2914:16;2907:27;2794:146;;;:::o;2946:425::-;3024:5;3049:66;3065:49;3107:6;3065:49;:::i;:::-;3049:66;:::i;:::-;3040:75;;3138:6;3131:5;3124:21;3176:4;3169:5;3165:16;3214:3;3205:6;3200:3;3196:16;3193:25;3190:112;;;3221:79;;:::i;:::-;3190:112;3311:54;3358:6;3353:3;3348;3311:54;:::i;:::-;3030:341;2946:425;;;;;:::o;3391:340::-;3447:5;3496:3;3489:4;3481:6;3477:17;3473:27;3463:122;;3504:79;;:::i;:::-;3463:122;3621:6;3608:20;3646:79;3721:3;3713:6;3706:4;3698:6;3694:17;3646:79;:::i;:::-;3637:88;;3453:278;3391:340;;;;:::o;3737:126::-;3774:7;3814:42;3807:5;3803:54;3792:65;;3737:126;;;:::o;3869:96::-;3906:7;3935:24;3953:5;3935:24;:::i;:::-;3924:35;;3869:96;;;:::o;3971:122::-;4044:24;4062:5;4044:24;:::i;:::-;4037:5;4034:35;4024:63;;4083:1;4080;4073:12;4024:63;3971:122;:::o;4099:139::-;4145:5;4183:6;4170:20;4161:29;;4199:33;4226:5;4199:33;:::i;:::-;4099:139;;;;:::o;4244:654::-;4322:6;4330;4379:2;4367:9;4358:7;4354:23;4350:32;4347:119;;;4385:79;;:::i;:::-;4347:119;4533:1;4522:9;4518:17;4505:31;4563:18;4555:6;4552:30;4549:117;;;4585:79;;:::i;:::-;4549:117;4690:63;4745:7;4736:6;4725:9;4721:22;4690:63;:::i;:::-;4680:73;;4476:287;4802:2;4828:53;4873:7;4864:6;4853:9;4849:22;4828:53;:::i;:::-;4818:63;;4773:118;4244:654;;;;;:::o;4904:77::-;4941:7;4970:5;4959:16;;4904:77;;;:::o;4987:118::-;5074:24;5092:5;5074:24;:::i;:::-;5069:3;5062:37;4987:118;;:::o;5111:222::-;5204:4;5242:2;5231:9;5227:18;5219:26;;5255:71;5323:1;5312:9;5308:17;5299:6;5255:71;:::i;:::-;5111:222;;;;:::o;5339:99::-;5391:6;5425:5;5419:12;5409:22;;5339:99;;;:::o;5444:169::-;5528:11;5562:6;5557:3;5550:19;5602:4;5597:3;5593:14;5578:29;;5444:169;;;;:::o;5619:246::-;5700:1;5710:113;5724:6;5721:1;5718:13;5710:113;;;5809:1;5804:3;5800:11;5794:18;5790:1;5785:3;5781:11;5774:39;5746:2;5743:1;5739:10;5734:15;;5710:113;;;5857:1;5848:6;5843:3;5839:16;5832:27;5681:184;5619:246;;;:::o;5871:377::-;5959:3;5987:39;6020:5;5987:39;:::i;:::-;6042:71;6106:6;6101:3;6042:71;:::i;:::-;6035:78;;6122:65;6180:6;6175:3;6168:4;6161:5;6157:16;6122:65;:::i;:::-;6212:29;6234:6;6212:29;:::i;:::-;6207:3;6203:39;6196:46;;5963:285;5871:377;;;;:::o;6254:313::-;6367:4;6405:2;6394:9;6390:18;6382:26;;6454:9;6448:4;6444:20;6440:1;6429:9;6425:17;6418:47;6482:78;6555:4;6546:6;6482:78;:::i;:::-;6474:86;;6254:313;;;;:::o;6573:122::-;6646:24;6664:5;6646:24;:::i;:::-;6639:5;6636:35;6626:63;;6685:1;6682;6675:12;6626:63;6573:122;:::o;6701:139::-;6747:5;6785:6;6772:20;6763:29;;6801:33;6828:5;6801:33;:::i;:::-;6701:139;;;;:::o;6846:329::-;6905:6;6954:2;6942:9;6933:7;6929:23;6925:32;6922:119;;;6960:79;;:::i;:::-;6922:119;7080:1;7105:53;7150:7;7141:6;7130:9;7126:22;7105:53;:::i;:::-;7095:63;;7051:117;6846:329;;;;:::o;7181:118::-;7268:24;7286:5;7268:24;:::i;:::-;7263:3;7256:37;7181:118;;:::o;7305:222::-;7398:4;7436:2;7425:9;7421:18;7413:26;;7449:71;7517:1;7506:9;7502:17;7493:6;7449:71;:::i;:::-;7305:222;;;;:::o;7533:474::-;7601:6;7609;7658:2;7646:9;7637:7;7633:23;7629:32;7626:119;;;7664:79;;:::i;:::-;7626:119;7784:1;7809:53;7854:7;7845:6;7834:9;7830:22;7809:53;:::i;:::-;7799:63;;7755:117;7911:2;7937:53;7982:7;7973:6;7962:9;7958:22;7937:53;:::i;:::-;7927:63;;7882:118;7533:474;;;;;:::o;8013:619::-;8090:6;8098;8106;8155:2;8143:9;8134:7;8130:23;8126:32;8123:119;;;8161:79;;:::i;:::-;8123:119;8281:1;8306:53;8351:7;8342:6;8331:9;8327:22;8306:53;:::i;:::-;8296:63;;8252:117;8408:2;8434:53;8479:7;8470:6;8459:9;8455:22;8434:53;:::i;:::-;8424:63;;8379:118;8536:2;8562:53;8607:7;8598:6;8587:9;8583:22;8562:53;:::i;:::-;8552:63;;8507:118;8013:619;;;;;:::o;8638:329::-;8697:6;8746:2;8734:9;8725:7;8721:23;8717:32;8714:119;;;8752:79;;:::i;:::-;8714:119;8872:1;8897:53;8942:7;8933:6;8922:9;8918:22;8897:53;:::i;:::-;8887:63;;8843:117;8638:329;;;;:::o;8973:116::-;9043:21;9058:5;9043:21;:::i;:::-;9036:5;9033:32;9023:60;;9079:1;9076;9069:12;9023:60;8973:116;:::o;9095:133::-;9138:5;9176:6;9163:20;9154:29;;9192:30;9216:5;9192:30;:::i;:::-;9095:133;;;;:::o;9234:468::-;9299:6;9307;9356:2;9344:9;9335:7;9331:23;9327:32;9324:119;;;9362:79;;:::i;:::-;9324:119;9482:1;9507:53;9552:7;9543:6;9532:9;9528:22;9507:53;:::i;:::-;9497:63;;9453:117;9609:2;9635:50;9677:7;9668:6;9657:9;9653:22;9635:50;:::i;:::-;9625:60;;9580:115;9234:468;;;;;:::o;9708:307::-;9769:4;9859:18;9851:6;9848:30;9845:56;;;9881:18;;:::i;:::-;9845:56;9919:29;9941:6;9919:29;:::i;:::-;9911:37;;10003:4;9997;9993:15;9985:23;;9708:307;;;:::o;10021:423::-;10098:5;10123:65;10139:48;10180:6;10139:48;:::i;:::-;10123:65;:::i;:::-;10114:74;;10211:6;10204:5;10197:21;10249:4;10242:5;10238:16;10287:3;10278:6;10273:3;10269:16;10266:25;10263:112;;;10294:79;;:::i;:::-;10263:112;10384:54;10431:6;10426:3;10421;10384:54;:::i;:::-;10104:340;10021:423;;;;;:::o;10463:338::-;10518:5;10567:3;10560:4;10552:6;10548:17;10544:27;10534:122;;10575:79;;:::i;:::-;10534:122;10692:6;10679:20;10717:78;10791:3;10783:6;10776:4;10768:6;10764:17;10717:78;:::i;:::-;10708:87;;10524:277;10463:338;;;;:::o;10807:943::-;10902:6;10910;10918;10926;10975:3;10963:9;10954:7;10950:23;10946:33;10943:120;;;10982:79;;:::i;:::-;10943:120;11102:1;11127:53;11172:7;11163:6;11152:9;11148:22;11127:53;:::i;:::-;11117:63;;11073:117;11229:2;11255:53;11300:7;11291:6;11280:9;11276:22;11255:53;:::i;:::-;11245:63;;11200:118;11357:2;11383:53;11428:7;11419:6;11408:9;11404:22;11383:53;:::i;:::-;11373:63;;11328:118;11513:2;11502:9;11498:18;11485:32;11544:18;11536:6;11533:30;11530:117;;;11566:79;;:::i;:::-;11530:117;11671:62;11725:7;11716:6;11705:9;11701:22;11671:62;:::i;:::-;11661:72;;11456:287;10807:943;;;;;;;:::o;11756:474::-;11824:6;11832;11881:2;11869:9;11860:7;11856:23;11852:32;11849:119;;;11887:79;;:::i;:::-;11849:119;12007:1;12032:53;12077:7;12068:6;12057:9;12053:22;12032:53;:::i;:::-;12022:63;;11978:117;12134:2;12160:53;12205:7;12196:6;12185:9;12181:22;12160:53;:::i;:::-;12150:63;;12105:118;11756:474;;;;;:::o;12236:180::-;12284:77;12281:1;12274:88;12381:4;12378:1;12371:15;12405:4;12402:1;12395:15;12422:320;12466:6;12503:1;12497:4;12493:12;12483:22;;12550:1;12544:4;12540:12;12571:18;12561:81;;12627:4;12619:6;12615:17;12605:27;;12561:81;12689:2;12681:6;12678:14;12658:18;12655:38;12652:84;;12708:18;;:::i;:::-;12652:84;12473:269;12422:320;;;:::o;12748:220::-;12888:34;12884:1;12876:6;12872:14;12865:58;12957:3;12952:2;12944:6;12940:15;12933:28;12748:220;:::o;12974:366::-;13116:3;13137:67;13201:2;13196:3;13137:67;:::i;:::-;13130:74;;13213:93;13302:3;13213:93;:::i;:::-;13331:2;13326:3;13322:12;13315:19;;12974:366;;;:::o;13346:419::-;13512:4;13550:2;13539:9;13535:18;13527:26;;13599:9;13593:4;13589:20;13585:1;13574:9;13570:17;13563:47;13627:131;13753:4;13627:131;:::i;:::-;13619:139;;13346:419;;;:::o;13771:248::-;13911:34;13907:1;13899:6;13895:14;13888:58;13980:31;13975:2;13967:6;13963:15;13956:56;13771:248;:::o;14025:366::-;14167:3;14188:67;14252:2;14247:3;14188:67;:::i;:::-;14181:74;;14264:93;14353:3;14264:93;:::i;:::-;14382:2;14377:3;14373:12;14366:19;;14025:366;;;:::o;14397:419::-;14563:4;14601:2;14590:9;14586:18;14578:26;;14650:9;14644:4;14640:20;14636:1;14625:9;14621:17;14614:47;14678:131;14804:4;14678:131;:::i;:::-;14670:139;;14397:419;;;:::o;14822:232::-;14962:34;14958:1;14950:6;14946:14;14939:58;15031:15;15026:2;15018:6;15014:15;15007:40;14822:232;:::o;15060:366::-;15202:3;15223:67;15287:2;15282:3;15223:67;:::i;:::-;15216:74;;15299:93;15388:3;15299:93;:::i;:::-;15417:2;15412:3;15408:12;15401:19;;15060:366;;;:::o;15432:419::-;15598:4;15636:2;15625:9;15621:18;15613:26;;15685:9;15679:4;15675:20;15671:1;15660:9;15656:17;15649:47;15713:131;15839:4;15713:131;:::i;:::-;15705:139;;15432:419;;;:::o;15857:174::-;15997:26;15993:1;15985:6;15981:14;15974:50;15857:174;:::o;16037:366::-;16179:3;16200:67;16264:2;16259:3;16200:67;:::i;:::-;16193:74;;16276:93;16365:3;16276:93;:::i;:::-;16394:2;16389:3;16385:12;16378:19;;16037:366;;;:::o;16409:419::-;16575:4;16613:2;16602:9;16598:18;16590:26;;16662:9;16656:4;16652:20;16648:1;16637:9;16633:17;16626:47;16690:131;16816:4;16690:131;:::i;:::-;16682:139;;16409:419;;;:::o;16834:228::-;16974:34;16970:1;16962:6;16958:14;16951:58;17043:11;17038:2;17030:6;17026:15;17019:36;16834:228;:::o;17068:366::-;17210:3;17231:67;17295:2;17290:3;17231:67;:::i;:::-;17224:74;;17307:93;17396:3;17307:93;:::i;:::-;17425:2;17420:3;17416:12;17409:19;;17068:366;;;:::o;17440:419::-;17606:4;17644:2;17633:9;17629:18;17621:26;;17693:9;17687:4;17683:20;17679:1;17668:9;17664:17;17657:47;17721:131;17847:4;17721:131;:::i;:::-;17713:139;;17440:419;;;:::o;17865:148::-;17967:11;18004:3;17989:18;;17865:148;;;;:::o;18019:390::-;18125:3;18153:39;18186:5;18153:39;:::i;:::-;18208:89;18290:6;18285:3;18208:89;:::i;:::-;18201:96;;18306:65;18364:6;18359:3;18352:4;18345:5;18341:16;18306:65;:::i;:::-;18396:6;18391:3;18387:16;18380:23;;18129:280;18019:390;;;;:::o;18415:435::-;18595:3;18617:95;18708:3;18699:6;18617:95;:::i;:::-;18610:102;;18729:95;18820:3;18811:6;18729:95;:::i;:::-;18722:102;;18841:3;18834:10;;18415:435;;;;;:::o;18856:225::-;18996:34;18992:1;18984:6;18980:14;18973:58;19065:8;19060:2;19052:6;19048:15;19041:33;18856:225;:::o;19087:366::-;19229:3;19250:67;19314:2;19309:3;19250:67;:::i;:::-;19243:74;;19326:93;19415:3;19326:93;:::i;:::-;19444:2;19439:3;19435:12;19428:19;;19087:366;;;:::o;19459:419::-;19625:4;19663:2;19652:9;19648:18;19640:26;;19712:9;19706:4;19702:20;19698:1;19687:9;19683:17;19676:47;19740:131;19866:4;19740:131;:::i;:::-;19732:139;;19459:419;;;:::o;19884:182::-;20024:34;20020:1;20012:6;20008:14;20001:58;19884:182;:::o;20072:366::-;20214:3;20235:67;20299:2;20294:3;20235:67;:::i;:::-;20228:74;;20311:93;20400:3;20311:93;:::i;:::-;20429:2;20424:3;20420:12;20413:19;;20072:366;;;:::o;20444:419::-;20610:4;20648:2;20637:9;20633:18;20625:26;;20697:9;20691:4;20687:20;20683:1;20672:9;20668:17;20661:47;20725:131;20851:4;20725:131;:::i;:::-;20717:139;;20444:419;;;:::o;20869:178::-;21009:30;21005:1;20997:6;20993:14;20986:54;20869:178;:::o;21053:366::-;21195:3;21216:67;21280:2;21275:3;21216:67;:::i;:::-;21209:74;;21292:93;21381:3;21292:93;:::i;:::-;21410:2;21405:3;21401:12;21394:19;;21053:366;;;:::o;21425:419::-;21591:4;21629:2;21618:9;21614:18;21606:26;;21678:9;21672:4;21668:20;21664:1;21653:9;21649:17;21642:47;21706:131;21832:4;21706:131;:::i;:::-;21698:139;;21425:419;;;:::o;21850:233::-;21990:34;21986:1;21978:6;21974:14;21967:58;22059:16;22054:2;22046:6;22042:15;22035:41;21850:233;:::o;22089:366::-;22231:3;22252:67;22316:2;22311:3;22252:67;:::i;:::-;22245:74;;22328:93;22417:3;22328:93;:::i;:::-;22446:2;22441:3;22437:12;22430:19;;22089:366;;;:::o;22461:419::-;22627:4;22665:2;22654:9;22650:18;22642:26;;22714:9;22708:4;22704:20;22700:1;22689:9;22685:17;22678:47;22742:131;22868:4;22742:131;:::i;:::-;22734:139;;22461:419;;;:::o;22886:141::-;22935:4;22958:3;22950:11;;22981:3;22978:1;22971:14;23015:4;23012:1;23002:18;22994:26;;22886:141;;;:::o;23033:93::-;23070:6;23117:2;23112;23105:5;23101:14;23097:23;23087:33;;23033:93;;;:::o;23132:107::-;23176:8;23226:5;23220:4;23216:16;23195:37;;23132:107;;;;:::o;23245:393::-;23314:6;23364:1;23352:10;23348:18;23387:97;23417:66;23406:9;23387:97;:::i;:::-;23505:39;23535:8;23524:9;23505:39;:::i;:::-;23493:51;;23577:4;23573:9;23566:5;23562:21;23553:30;;23626:4;23616:8;23612:19;23605:5;23602:30;23592:40;;23321:317;;23245:393;;;;;:::o;23644:60::-;23672:3;23693:5;23686:12;;23644:60;;;:::o;23710:142::-;23760:9;23793:53;23811:34;23820:24;23838:5;23820:24;:::i;:::-;23811:34;:::i;:::-;23793:53;:::i;:::-;23780:66;;23710:142;;;:::o;23858:75::-;23901:3;23922:5;23915:12;;23858:75;;;:::o;23939:269::-;24049:39;24080:7;24049:39;:::i;:::-;24110:91;24159:41;24183:16;24159:41;:::i;:::-;24151:6;24144:4;24138:11;24110:91;:::i;:::-;24104:4;24097:105;24015:193;23939:269;;;:::o;24214:73::-;24259:3;24214:73;:::o;24293:189::-;24370:32;;:::i;:::-;24411:65;24469:6;24461;24455:4;24411:65;:::i;:::-;24346:136;24293:189;;:::o;24488:186::-;24548:120;24565:3;24558:5;24555:14;24548:120;;;24619:39;24656:1;24649:5;24619:39;:::i;:::-;24592:1;24585:5;24581:13;24572:22;;24548:120;;;24488:186;;:::o;24680:543::-;24781:2;24776:3;24773:11;24770:446;;;24815:38;24847:5;24815:38;:::i;:::-;24899:29;24917:10;24899:29;:::i;:::-;24889:8;24885:44;25082:2;25070:10;25067:18;25064:49;;;25103:8;25088:23;;25064:49;25126:80;25182:22;25200:3;25182:22;:::i;:::-;25172:8;25168:37;25155:11;25126:80;:::i;:::-;24785:431;;24770:446;24680:543;;;:::o;25229:117::-;25283:8;25333:5;25327:4;25323:16;25302:37;;25229:117;;;;:::o;25352:169::-;25396:6;25429:51;25477:1;25473:6;25465:5;25462:1;25458:13;25429:51;:::i;:::-;25425:56;25510:4;25504;25500:15;25490:25;;25403:118;25352:169;;;;:::o;25526:295::-;25602:4;25748:29;25773:3;25767:4;25748:29;:::i;:::-;25740:37;;25810:3;25807:1;25803:11;25797:4;25794:21;25786:29;;25526:295;;;;:::o;25826:1395::-;25943:37;25976:3;25943:37;:::i;:::-;26045:18;26037:6;26034:30;26031:56;;;26067:18;;:::i;:::-;26031:56;26111:38;26143:4;26137:11;26111:38;:::i;:::-;26196:67;26256:6;26248;26242:4;26196:67;:::i;:::-;26290:1;26314:4;26301:17;;26346:2;26338:6;26335:14;26363:1;26358:618;;;;27020:1;27037:6;27034:77;;;27086:9;27081:3;27077:19;27071:26;27062:35;;27034:77;27137:67;27197:6;27190:5;27137:67;:::i;:::-;27131:4;27124:81;26993:222;26328:887;;26358:618;26410:4;26406:9;26398:6;26394:22;26444:37;26476:4;26444:37;:::i;:::-;26503:1;26517:208;26531:7;26528:1;26525:14;26517:208;;;26610:9;26605:3;26601:19;26595:26;26587:6;26580:42;26661:1;26653:6;26649:14;26639:24;;26708:2;26697:9;26693:18;26680:31;;26554:4;26551:1;26547:12;26542:17;;26517:208;;;26753:6;26744:7;26741:19;26738:179;;;26811:9;26806:3;26802:19;26796:26;26854:48;26896:4;26888:6;26884:17;26873:9;26854:48;:::i;:::-;26846:6;26839:64;26761:156;26738:179;26963:1;26959;26951:6;26947:14;26943:22;26937:4;26930:36;26365:611;;;26328:887;;25918:1303;;;25826:1395;;:::o;27227:224::-;27367:34;27363:1;27355:6;27351:14;27344:58;27436:7;27431:2;27423:6;27419:15;27412:32;27227:224;:::o;27457:366::-;27599:3;27620:67;27684:2;27679:3;27620:67;:::i;:::-;27613:74;;27696:93;27785:3;27696:93;:::i;:::-;27814:2;27809:3;27805:12;27798:19;;27457:366;;;:::o;27829:419::-;27995:4;28033:2;28022:9;28018:18;28010:26;;28082:9;28076:4;28072:20;28068:1;28057:9;28053:17;28046:47;28110:131;28236:4;28110:131;:::i;:::-;28102:139;;27829:419;;;:::o;28254:223::-;28394:34;28390:1;28382:6;28378:14;28371:58;28463:6;28458:2;28450:6;28446:15;28439:31;28254:223;:::o;28483:366::-;28625:3;28646:67;28710:2;28705:3;28646:67;:::i;:::-;28639:74;;28722:93;28811:3;28722:93;:::i;:::-;28840:2;28835:3;28831:12;28824:19;;28483:366;;;:::o;28855:419::-;29021:4;29059:2;29048:9;29044:18;29036:26;;29108:9;29102:4;29098:20;29094:1;29083:9;29079:17;29072:47;29136:131;29262:4;29136:131;:::i;:::-;29128:139;;28855:419;;;:::o;29280:182::-;29420:34;29416:1;29408:6;29404:14;29397:58;29280:182;:::o;29468:366::-;29610:3;29631:67;29695:2;29690:3;29631:67;:::i;:::-;29624:74;;29707:93;29796:3;29707:93;:::i;:::-;29825:2;29820:3;29816:12;29809:19;;29468:366;;;:::o;29840:419::-;30006:4;30044:2;30033:9;30029:18;30021:26;;30093:9;30087:4;30083:20;30079:1;30068:9;30064:17;30057:47;30121:131;30247:4;30121:131;:::i;:::-;30113:139;;29840:419;;;:::o;30265:175::-;30405:27;30401:1;30393:6;30389:14;30382:51;30265:175;:::o;30446:366::-;30588:3;30609:67;30673:2;30668:3;30609:67;:::i;:::-;30602:74;;30685:93;30774:3;30685:93;:::i;:::-;30803:2;30798:3;30794:12;30787:19;;30446:366;;;:::o;30818:419::-;30984:4;31022:2;31011:9;31007:18;30999:26;;31071:9;31065:4;31061:20;31057:1;31046:9;31042:17;31035:47;31099:131;31225:4;31099:131;:::i;:::-;31091:139;;30818:419;;;:::o;31243:237::-;31383:34;31379:1;31371:6;31367:14;31360:58;31452:20;31447:2;31439:6;31435:15;31428:45;31243:237;:::o;31486:366::-;31628:3;31649:67;31713:2;31708:3;31649:67;:::i;:::-;31642:74;;31725:93;31814:3;31725:93;:::i;:::-;31843:2;31838:3;31834:12;31827:19;;31486:366;;;:::o;31858:419::-;32024:4;32062:2;32051:9;32047:18;32039:26;;32111:9;32105:4;32101:20;32097:1;32086:9;32082:17;32075:47;32139:131;32265:4;32139:131;:::i;:::-;32131:139;;31858:419;;;:::o;32283:98::-;32334:6;32368:5;32362:12;32352:22;;32283:98;;;:::o;32387:168::-;32470:11;32504:6;32499:3;32492:19;32544:4;32539:3;32535:14;32520:29;;32387:168;;;;:::o;32561:373::-;32647:3;32675:38;32707:5;32675:38;:::i;:::-;32729:70;32792:6;32787:3;32729:70;:::i;:::-;32722:77;;32808:65;32866:6;32861:3;32854:4;32847:5;32843:16;32808:65;:::i;:::-;32898:29;32920:6;32898:29;:::i;:::-;32893:3;32889:39;32882:46;;32651:283;32561:373;;;;:::o;32940:640::-;33135:4;33173:3;33162:9;33158:19;33150:27;;33187:71;33255:1;33244:9;33240:17;33231:6;33187:71;:::i;:::-;33268:72;33336:2;33325:9;33321:18;33312:6;33268:72;:::i;:::-;33350;33418:2;33407:9;33403:18;33394:6;33350:72;:::i;:::-;33469:9;33463:4;33459:20;33454:2;33443:9;33439:18;33432:48;33497:76;33568:4;33559:6;33497:76;:::i;:::-;33489:84;;32940:640;;;;;;;:::o;33586:141::-;33642:5;33673:6;33667:13;33658:22;;33689:32;33715:5;33689:32;:::i;:::-;33586:141;;;;:::o;33733:349::-;33802:6;33851:2;33839:9;33830:7;33826:23;33822:32;33819:119;;;33857:79;;:::i;:::-;33819:119;33977:1;34002:63;34057:7;34048:6;34037:9;34033:22;34002:63;:::i;:::-;33992:73;;33948:127;33733:349;;;;:::o;34088:180::-;34136:77;34133:1;34126:88;34233:4;34230:1;34223:15;34257:4;34254:1;34247:15",
    "source": "// SPDX-License-Identifier: MIT\r\npragma solidity  >=0.4.0 <=0.8.19;\r\n\r\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\r\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\r\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\r\nimport \"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\";\r\n\r\ncontract CertficateMaker is ERC721URIStorage,Ownable{\r\n    using Counters for Counters.Counter;\r\n    Counters.Counter private tokenId;\r\n    constructor() ERC721(\"My Certificates\",\"NFT\"){\r\n    }\r\n    function mintNFT(string memory tokenURI,address student) public payable returns (uint256){\r\n        tokenId.increment();\r\n        uint256 newId=tokenId.current();\r\n        // _mint(msg.sender,newId);\r\n        _mint(student,newId);\r\n        _setTokenURI(newId,tokenURI);\r\n        return newId;\r\n    }\r\n}",
    "sourcePath": "C:\\Users\\Hp\\Desktop\\gfg_hackathon\\decentra\\truffle\\contracts\\CertificateMaker.sol",
    "ast": {
      "absolutePath": "project:/contracts/CertificateMaker.sol",
      "exportedSymbols": {
        "Address": [
          1655
        ],
        "CertficateMaker": [
          2886
        ],
        "Context": [
          1677
        ],
        "Counters": [
          1751
        ],
        "ERC165": [
          1950
        ],
        "ERC721": [
          1039
        ],
        "ERC721URIStorage": [
          1298
        ],
        "IERC165": [
          1962
        ],
        "IERC721": [
          1155
        ],
        "IERC721Metadata": [
          1325
        ],
        "IERC721Receiver": [
          1173
        ],
        "Math": [
          2827
        ],
        "Ownable": [
          112
        ],
        "Strings": [
          1926
        ]
      },
      "id": 2887,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 2829,
          "literals": [
            "solidity",
            ">=",
            "0.4",
            ".0",
            "<=",
            "0.8",
            ".19"
          ],
          "nodeType": "PragmaDirective",
          "src": "33:34:13"
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "id": 2830,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 2887,
          "sourceUnit": 1040,
          "src": "71:57:13",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
          "file": "@openzeppelin/contracts/utils/Counters.sol",
          "id": 2831,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 2887,
          "sourceUnit": 1752,
          "src": "130:52:13",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
          "file": "@openzeppelin/contracts/access/Ownable.sol",
          "id": 2832,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 2887,
          "sourceUnit": 113,
          "src": "184:52:13",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
          "file": "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
          "id": 2833,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 2887,
          "sourceUnit": 1299,
          "src": "238:78:13",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 2834,
                "name": "ERC721URIStorage",
                "nameLocations": [
                  "348:16:13"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 1298,
                "src": "348:16:13"
              },
              "id": 2835,
              "nodeType": "InheritanceSpecifier",
              "src": "348:16:13"
            },
            {
              "baseName": {
                "id": 2836,
                "name": "Ownable",
                "nameLocations": [
                  "365:7:13"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 112,
                "src": "365:7:13"
              },
              "id": 2837,
              "nodeType": "InheritanceSpecifier",
              "src": "365:7:13"
            }
          ],
          "canonicalName": "CertficateMaker",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 2886,
          "linearizedBaseContracts": [
            2886,
            112,
            1298,
            1039,
            1325,
            1155,
            1950,
            1962,
            1677
          ],
          "name": "CertficateMaker",
          "nameLocation": "329:15:13",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "global": false,
              "id": 2841,
              "libraryName": {
                "id": 2838,
                "name": "Counters",
                "nameLocations": [
                  "385:8:13"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 1751,
                "src": "385:8:13"
              },
              "nodeType": "UsingForDirective",
              "src": "379:36:13",
              "typeName": {
                "id": 2840,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 2839,
                  "name": "Counters.Counter",
                  "nameLocations": [
                    "398:8:13",
                    "407:7:13"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1683,
                  "src": "398:16:13"
                },
                "referencedDeclaration": 1683,
                "src": "398:16:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Counter_$1683_storage_ptr",
                  "typeString": "struct Counters.Counter"
                }
              }
            },
            {
              "constant": false,
              "id": 2844,
              "mutability": "mutable",
              "name": "tokenId",
              "nameLocation": "446:7:13",
              "nodeType": "VariableDeclaration",
              "scope": 2886,
              "src": "421:32:13",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$1683_storage",
                "typeString": "struct Counters.Counter"
              },
              "typeName": {
                "id": 2843,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 2842,
                  "name": "Counters.Counter",
                  "nameLocations": [
                    "421:8:13",
                    "430:7:13"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1683,
                  "src": "421:16:13"
                },
                "referencedDeclaration": 1683,
                "src": "421:16:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Counter_$1683_storage_ptr",
                  "typeString": "struct Counters.Counter"
                }
              },
              "visibility": "private"
            },
            {
              "body": {
                "id": 2851,
                "nodeType": "Block",
                "src": "505:8:13",
                "statements": []
              },
              "id": 2852,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "hexValue": "4d7920436572746966696361746573",
                      "id": 2847,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "481:17:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_2b2b158dba96c0100b656931b67fb2ad346841ea5c3c3c05f6bc476701f423f7",
                        "typeString": "literal_string \"My Certificates\""
                      },
                      "value": "My Certificates"
                    },
                    {
                      "hexValue": "4e4654",
                      "id": 2848,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "499:5:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_9c4138cd0a1311e4748f70d0fe3dc55f0f5f75e0f20db731225cbc3b8914016a",
                        "typeString": "literal_string \"NFT\""
                      },
                      "value": "NFT"
                    }
                  ],
                  "id": 2849,
                  "kind": "baseConstructorSpecifier",
                  "modifierName": {
                    "id": 2846,
                    "name": "ERC721",
                    "nameLocations": [
                      "474:6:13"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 1039,
                    "src": "474:6:13"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "474:31:13"
                }
              ],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 2845,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "471:2:13"
              },
              "returnParameters": {
                "id": 2850,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "505:0:13"
              },
              "scope": 2886,
              "src": "460:53:13",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 2884,
                "nodeType": "Block",
                "src": "608:210:13",
                "statements": [
                  {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 2861,
                          "name": "tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2844,
                          "src": "619:7:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Counter_$1683_storage",
                            "typeString": "struct Counters.Counter storage ref"
                          }
                        },
                        "id": 2863,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "627:9:13",
                        "memberName": "increment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1709,
                        "src": "619:17:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$1683_storage_ptr_$returns$__$attached_to$_t_struct$_Counter_$1683_storage_ptr_$",
                          "typeString": "function (struct Counters.Counter storage pointer)"
                        }
                      },
                      "id": 2864,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "619:19:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2865,
                    "nodeType": "ExpressionStatement",
                    "src": "619:19:13"
                  },
                  {
                    "assignments": [
                      2867
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 2867,
                        "mutability": "mutable",
                        "name": "newId",
                        "nameLocation": "657:5:13",
                        "nodeType": "VariableDeclaration",
                        "scope": 2884,
                        "src": "649:13:13",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2866,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "649:7:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 2871,
                    "initialValue": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 2868,
                          "name": "tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2844,
                          "src": "663:7:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Counter_$1683_storage",
                            "typeString": "struct Counters.Counter storage ref"
                          }
                        },
                        "id": 2869,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "671:7:13",
                        "memberName": "current",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1695,
                        "src": "663:15:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$1683_storage_ptr_$returns$_t_uint256_$attached_to$_t_struct$_Counter_$1683_storage_ptr_$",
                          "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                        }
                      },
                      "id": 2870,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "663:17:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "649:31:13"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 2873,
                          "name": "student",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2856,
                          "src": "734:7:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 2874,
                          "name": "newId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2867,
                          "src": "742:5:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 2872,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 713,
                        "src": "728:5:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 2875,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "728:20:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2876,
                    "nodeType": "ExpressionStatement",
                    "src": "728:20:13"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 2878,
                          "name": "newId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2867,
                          "src": "772:5:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 2879,
                          "name": "tokenURI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2854,
                          "src": "778:8:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 2877,
                        "name": "_setTokenURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1267,
                        "src": "759:12:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (uint256,string memory)"
                        }
                      },
                      "id": 2880,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "759:28:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2881,
                    "nodeType": "ExpressionStatement",
                    "src": "759:28:13"
                  },
                  {
                    "expression": {
                      "id": 2882,
                      "name": "newId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2867,
                      "src": "805:5:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 2860,
                    "id": 2883,
                    "nodeType": "Return",
                    "src": "798:12:13"
                  }
                ]
              },
              "functionSelector": "04f32279",
              "id": 2885,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "mintNFT",
              "nameLocation": "528:7:13",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 2857,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2854,
                    "mutability": "mutable",
                    "name": "tokenURI",
                    "nameLocation": "550:8:13",
                    "nodeType": "VariableDeclaration",
                    "scope": 2885,
                    "src": "536:22:13",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 2853,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "536:6:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 2856,
                    "mutability": "mutable",
                    "name": "student",
                    "nameLocation": "567:7:13",
                    "nodeType": "VariableDeclaration",
                    "scope": 2885,
                    "src": "559:15:13",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 2855,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "559:7:13",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "535:40:13"
              },
              "returnParameters": {
                "id": 2860,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2859,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 2885,
                    "src": "600:7:13",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 2858,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "600:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "599:9:13"
              },
              "scope": 2886,
              "src": "519:299:13",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 2887,
          "src": "320:501:13",
          "usedErrors": []
        }
      ],
      "src": "33:788:13"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.19+commit.7dd6d404.Emscripten.clang"
    },
    "networks": {
      "80001": {
        "events": {},
        "links": {},
        "address": "0xfdB8D2A404D007bE264Fd20c5182eB5c1b4fe67B",
        "transactionHash": "0x31bfc54710f1f64c667ebd3285036356839008b6459039f17dcdd0596c62759d"
      }
    },
    "schemaVersion": "3.4.13",
    "updatedAt": "2023-04-14T03:15:09.579Z",
    "networkType": "ethereum",
    "devdoc": {
      "events": {
        "Approval(address,address,uint256)": {
          "details": "Emitted when `owner` enables `approved` to manage the `tokenId` token."
        },
        "ApprovalForAll(address,address,bool)": {
          "details": "Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets."
        },
        "Transfer(address,address,uint256)": {
          "details": "Emitted when `tokenId` token is transferred from `from` to `to`."
        }
      },
      "kind": "dev",
      "methods": {
        "approve(address,uint256)": {
          "details": "See {IERC721-approve}."
        },
        "balanceOf(address)": {
          "details": "See {IERC721-balanceOf}."
        },
        "getApproved(uint256)": {
          "details": "See {IERC721-getApproved}."
        },
        "isApprovedForAll(address,address)": {
          "details": "See {IERC721-isApprovedForAll}."
        },
        "name()": {
          "details": "See {IERC721Metadata-name}."
        },
        "owner()": {
          "details": "Returns the address of the current owner."
        },
        "ownerOf(uint256)": {
          "details": "See {IERC721-ownerOf}."
        },
        "renounceOwnership()": {
          "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
        },
        "safeTransferFrom(address,address,uint256)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "safeTransferFrom(address,address,uint256,bytes)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "setApprovalForAll(address,bool)": {
          "details": "See {IERC721-setApprovalForAll}."
        },
        "supportsInterface(bytes4)": {
          "details": "See {IERC165-supportsInterface}."
        },
        "symbol()": {
          "details": "See {IERC721Metadata-symbol}."
        },
        "tokenURI(uint256)": {
          "details": "See {IERC721Metadata-tokenURI}."
        },
        "transferFrom(address,address,uint256)": {
          "details": "See {IERC721-transferFrom}."
        },
        "transferOwnership(address)": {
          "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
        }
      },
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  }