//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/cryptography/ECDSA.sol';
import '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';
import "./ERC721A.sol";

contract BEE is Ownable, ERC721A, ReentrancyGuard {
    using MerkleProof for bytes32[];
    using Strings for uint256;
    using ECDSA for bytes32;

    uint256 public immutable adoptionLimit = 15;
    mapping(uint256=> string) private _tokenURIs;
    bool public saleOpen = false;
    string private baseURI = "https://dabunny.mypinata.cloud/ipfs/QmTyDT7KCvijzaPDcEqU6n8JZP7U9DecVWnFnuGvtxCeFh";
    bool private reveal = false;
    uint256 public price = 0.12 * 10 ** 18;
    uint256 public currentSupply = 100;
    bytes32 public whitelistedUsersMerkleRoot;

    mapping(address => bool) private _whitelist;

    constructor(
        string memory name, 
        string memory symbol, 
        uint256 _maxBatchSize,
        uint256 _collectionSize) 
        ERC721A(name, symbol, _maxBatchSize, _collectionSize) {
        //mint 100 to dev;
        // _safeMint(msg.sender, 15);
    }

    function adoptBunny(uint256 _quantity, bytes32[] memory _proof) public payable {
        require(totalSupply() + _quantity < currentSupply, "Reaching max supply");

        if (_msgSender() != owner()) {
            require(msg.value >= price * _quantity, "Needs to send more eth");
            require(getMintedCountByOwner(msg.sender) + _quantity <= adoptionLimit, "Exceed max adoption amount");
            if(!isWhitelisted(msg.sender, _proof)){
                require(saleOpen, "Sorry!! can't mint when sale is closed.");
            }
        }
        _safeMint(msg.sender, _quantity);
        refundIfOver(price * _quantity);
    }
    
    function isWhitelisted(address _account, bytes32[] memory _proof) public view returns (bool){
        bytes32 node = keccak256(abi.encodePacked(_account));
        if(_proof.verify(whitelistedUsersMerkleRoot, node))
            return true;
        else 
            return false;
    }
    
    function refundIfOver(uint256 amountPaid) private {
        require(msg.value >= amountPaid, "Need to send more ETH.");
        if (msg.value > amountPaid) {
           payable(msg.sender).transfer(msg.value - amountPaid);
        }
    }

    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
        require(
            _exists(_tokenId),
            "ERC721Metadata: URI set of nonexistent token"
        );
        if(reveal) {yte3rzz
            return string(abi.encodePacked(baseURI, _tokenId.toString(), '.json'));
        }

        return baseURI;
    }


    function setWhitelistUserMerkleRoot(bytes32 _merkleRoot) external onlyOwner {
        whitelistedUsersMerkleRoot = _merkleRoot;
    }

    function revealBee() onlyOwner public {
        reveal = true;
    } 

    function updateBaseURI(string memory _newBaseURI) onlyOwner public {
        baseURI = _newBaseURI;
    }

    function getBaseURI() external view returns(string memory) {
        return baseURI;
    }

    function setPrice(uint256 _price) public onlyOwner() {
        price = _price;
    }

    function setCurrentSupply(uint256 _supply) public onlyOwner() {
        require(_supply > currentSupply, 'Provide a valid supply i.e. greater than current supply and less than/equal to max supply.');
        currentSupply = _supply;
    }

    function toggleSale() public onlyOwner() {
        saleOpen = !saleOpen;
    }

    function whitelist(address[] memory accounts) external onlyOwner {
        for (uint256 i; i < accounts.length; i++) {
            _whitelist[accounts[i]] = true;
        }
    }

    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    function getMintedCountByOwner(address owner) public view returns (uint256) {
        return _numberMinted(owner);
    }

    function withdraw() external onlyOwner nonReentrant{
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        require(success, "Transfer failed.");
    }

    function getMaxSupply() public view returns (uint256){
        return collectionSize;
    }

    function getMaxBatchSize() public view returns (uint256){
        return maxBatchSize;
    }

    function getOwnershipData(uint256 tokenId)
    external
    view
    returns (TokenOwnership memory){
        return ownershipOf(tokenId);
    }

    receive() external payable {}

}
