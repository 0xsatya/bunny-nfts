// SPDX-License-Identifier: MIT

pragma solidity ^0.8.5;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/utils/Strings.sol';

import 'hardhat/console.sol';

contract AAA is ERC721Enumerable, Ownable {
    using Strings for uint256;

    uint256 public maxSupply = 10000;
    uint256 public currentSupply = 1000;
    uint256 public bPrice = 0.08 * 10 ** 18;
    uint256 public rPrice = 0.12 * 10 ** 18;
    bool public saleOpen = false;
    uint256 public maxMintAllowedOnce = 25;
    uint256 royalityFee = 5; //in percentage terms
    
    //baseURI for meta files
    string private baseURI = "https://gateway.pinata.cloud/ipfs/QmSXTv28979BJUVX41368hp42xx2JeJaRkx3D9NtTBeLqe/";

    //revealed uri
    // string public notRevealedUri = "https://gateway.pinata.cloud/ipfs/QmSXTv28979BJUVX41368hp42xx2JeJaRkx3D9NtTBeLqe";
    bool public revealed = false;

    //Investors wallets address
    // address erc20ContractAddress;
    address w1;
    address w2;
    address w3;

    //white list
    // bool public whitelistActive;
    mapping(address => bool) private _whitelist;

    constructor(address _w1, address _w2, address _w3) ERC721("RabitsWay", "RBW") {
        // erc20ContractAddress = _contractAddress;
        w1 = _w1;
        w2 = _w2;
        w3 = _w3;
     }

    // mint tokens
    function mint(uint256 _mintAmount, bool rarity) public payable {
        uint256 supply = totalSupply();
        require(_mintAmount > 0 && _mintAmount <= maxMintAllowedOnce, "Must mint less than or equal to max allowed at a time");
        require(supply + _mintAmount <= currentSupply, "Must mint less than the max supply of tokens");
        if (_msgSender() != owner()) {
            if(!_whitelist[_msgSender()]){
                require(saleOpen, "Sorry!! can't mint when sale is closed");
            }
            if( rarity )
                require(msg.value >= rPrice * _mintAmount, "Must send proper eth value to mint rare tokens");
            else
                require(msg.value >= bPrice * _mintAmount, "Must send proper eth value to mint tokens");
        }
        for (uint256 i = 1; i <= _mintAmount; i++) {
            _safeMint(_msgSender(), supply + i);
        }
    }
    
    function tokensOfOwner(address _owner) public view returns (uint256[] memory)
    {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory)
    {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token" );
        string memory currentBaseURI = _baseURI();

        if(!revealed){
            return currentBaseURI;
        }
        else {
            return bytes(currentBaseURI).length > 0 ?
                string(abi.encodePacked(currentBaseURI, tokenId.toString(), '.json'))
                : "";
        }
    }

    // set baseURI
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }
  
    //sets price of bunny
    function setbPrice(uint256 _price) public onlyOwner() {
        bPrice = _price;
    }

    //sets price of rare bunny
    function setrPrice(uint256 _price) public onlyOwner() {
        rPrice = _price;
    }
    
    //sets current supply of asset
    function setCurrentSupply(uint256 _supply) public onlyOwner() {
        require( _supply > currentSupply && _supply <= maxSupply, 'Provide a valid supply i.e. greater than current supply and less than/equal to max supply');
        currentSupply = _supply;
    }

    //toggles enable or disable sale
    function toggleSale() public onlyOwner() {
        saleOpen = !saleOpen;
    }
    
    function toggleReveal() public onlyOwner() {
        revealed = !revealed;
    }

    //sets baseURI
    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function getBaseURI() public view returns (string memory) {
        return baseURI;
    }

    //owner can set whitelist address
    function whiteList(address account) external onlyOwner {
        _whitelist[account] = true;
    }
    
    //owner can set multiple whitelist addresses
    function whiteListMany(address[] memory accounts) external onlyOwner {
        for (uint256 i; i < accounts.length; i++) {
            _whitelist[accounts[i]] = true;
        }
    }
    
    
    function withdraw() external onlyOwner {
        uint256 percent = address(this).balance / 100;

        (bool success1, ) = payable(w1).call{value: (percent * 31)}("");
        require(success1, "Transaction Unsuccessful");
        (bool success2, ) = payable(w2).call{value: (percent * 31)}("");
        require(success2, "Transaction Unsuccessful");
        (bool success3, ) = payable(w3).call{value: (percent * 31)}("");
        require(success3, "Transaction Unsuccessful");

    }
    receive() external payable {}
}