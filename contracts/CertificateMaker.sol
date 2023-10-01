// SPDX-License-Identifier: MIT
pragma solidity  >=0.4.0 <=0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract CertficateMaker is ERC721URIStorage,Ownable{
    using Counters for Counters.Counter;
    Counters.Counter private tokenId;
    constructor() ERC721("My Certificates","NFT"){
    }
    function mintNFT(string memory tokenURI,address student) public payable returns (uint256){
        tokenId.increment();
        uint256 newId=tokenId.current();
        // _mint(msg.sender,newId);
        _mint(student,newId);
        _setTokenURI(newId,tokenURI);
        return newId;
    }
}