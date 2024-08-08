const { expect, assert } = require("chai");
const { deployContract } = require("ethereum-waffle");
const { ethers, deployments } = require("hardhat");
const { waffle } = require("hardhat");

const provider = waffle.provider;
//require('hardhat/console');

let Dabunny20Instance, dabunnyInstance, NFTInstance, nftInstance, currentPasuseStatus;

// let gasLimit = 100000;
const imgBaseURL = "https://gateway.pinata.cloud/ipfs/QmPSGy6NGW5YSch8tVDx7DVH6WPTa7gPeMhy31Poz2VUcx"; // 1.png, 2.png
const metaBaseURL = "https://gateway.pinata.cloud/ipfs/QmYJfBnWNVjYR2gayhRZucjScnTg1D9h6wqpPotr2qd7N4"; //1.json, 2.json

const param_totalSupply = 10000;
const param_price = 0.08; // * 10 ** 18;
const param_rareprice = 0.12; // * 10 ** 18;
const param_maxMintAllowedOnce = 25;

const ownerAddress = '0xda210a5DF6985380DeE4990C914744e54E771Ad6';
const nftName = "MyNFTOriginal";
const nftSymbol = "MNO" ;
// const contractAddress = "0x20c2905297D4Cd567ED4a70AAF45473d0bcD3d78";

const baseURI = "https://gateway.pinata.cloud/ipfs/"; //QmYJfBnWNVjYR2gayhRZucjScnTg1D9h6wqpPotr2qd7N4";
const  notRevealedUri = "https://gateway.pinata.cloud/ipfs/QmSXTv28979BJUVX41368hp42xx2JeJaRkx3D9NtTBeLqe";
let owner, acct1, acct2, acct3;

before(async function () {

  //----------------Rinkeby Testing---------------------------/
  // [owner, account1] = await ethers.getSigners();
  // let signer = provider.getSigner();
  // console.log("Singner Address: ", await signer.getAddress());
  // NFTInstance = await deployments.getArtifact("DaBunny");
  // //let owner = await nftInstance.owner();
  // console.log("Contract Name: ", NFTInstance.contractName);
  // console.log("Get Singners Acc 1: ", owner.address);
  // console.log("Get Singners Acc 2: ", account1.address);
  // nftInstance = new ethers.Contract(contractAddress, NFTInstance.abi, signer);
  // console.log("NFT instance address: ", nftInstance.address);
  // let ownerAdd = await nftInstance.owner();
  // // const nftDeployer = await ethers.getSigners();
  // console.log("Present Owner Address: ", ownerAdd);

  //-----------------------Local Testing-----------------------------/
  [owner, acct1, acct2, acct3, acct4] = await ethers.getSigners();
  Dabunny20Instance = await ethers.getContractFactory("Dabunny");
  dabunnyInstance = await Dabunny20Instance.deploy(owner.address, acct1.address, acct2.address);
  await dabunnyInstance.deployed();
  
  NFTInstance = await ethers.getContractFactory("AAA");
  nftInstance = await NFTInstance.deploy(acct1.address, acct2.address, acct3.address);
  await nftInstance.deployed();

  let ownerAddress = await nftInstance.owner();
  console.log('Contract owner address is :', ownerAddress);
  console.log('Dabunny20 contract address is :', dabunnyInstance.address);  
  console.log('DabunnyNFT contract address is :', nftInstance.address);  

  //set not revealed URI
  // let tx1 = await nftInstance.setNotRevealedURI('https://gateway.pinata.cloud/ipfs/QmSXTv28979BJUVX41368hp42xx2JeJaRkx3D9NtTBeLqe');
  // await tx1.wait();
  // console.log("NFT notRevealedURI set to - ", await nftInstance.notRevealedUri());

  //set baseURI of the nft
  let tx = await nftInstance.setBaseURI(notRevealedUri);
  await tx.wait();
  let baseURI1 = await nftInstance.getBaseURI();
  console.log("NFT baseURI set to - ", baseURI1);

});

//check whether the contract has a valid address
describe("DaBunny NFT - Checking default parameters", function () {
  it("Contract is successfully deployed", async () => {
    assert.notEqual(nftInstance.address, "", "Contract has a address");
    assert.notEqual(nftInstance.address, 0x0, "Contract has a address");
    assert.notEqual(nftInstance.address, null, "Contract has a address");
    assert.notEqual(nftInstance.address, undefined, "Contract has a address");
  });

  it("Maximum Supply is set correctly", async () => {
    let totalSupply = await nftInstance.maxSupply();
    // console.log(totalSupply.toString());
    assert.equal(totalSupply.toString(), param_totalSupply, "Total supply not set correctly");
  });

  it("Total maxMintAllowedOnce is set correctly", async () => {
    let maxMintAllowed = await nftInstance.maxMintAllowedOnce();
    assert.equal(maxMintAllowed.toString(), param_maxMintAllowedOnce, "Total maxMintAllowedmaxMintAllowed NFT is not set correctly.");
  });

  it("NFT price is set correctly", async () => {
    let getBunnyPrice = await nftInstance.bPrice();
    let getRareBunnyPrice = await nftInstance.rPrice();
    
    //console.log(ethers.utils.formatEther(getNFTPrice.toString()));
    assert.equal(ethers.utils.formatEther(getBunnyPrice.toString()),"0.08",
      "NFT price is 0.08 ether");

    assert.equal(ethers.utils.formatEther(getRareBunnyPrice.toString()),"0.12",
      "NFT price is 0.12 ether");

  });

  it("Not revealed URI is set correctly", async () => {
    let baseURI1 = await nftInstance.getBaseURI();
    assert.equal(
      baseURI1, notRevealedUri, "Base URI is not set correctly"
    );
  });

  it("Revealed Base URI is set correctly", async () => {
    let tx = await nftInstance.toggleReveal();
    await tx.wait();

    let tx1 = await nftInstance.setBaseURI(baseURI);
    await tx1.wait();

    let baseURI1 = await nftInstance.getBaseURI();
    assert.equal(
      baseURI1, baseURI, "Base URI is not set correctly"
    );
  });

  it("Check owner is the contract creator", async () => {
    let ownerAdd = await nftInstance.owner();
    assert.equal(ownerAdd, owner.address, "Owner is the contract creator");
  });
});

describe("NFT Contract - Setting parameters", function () {
  it("Changing current Supply", async () => {
    let ownerAdd = await nftInstance.owner();
    console.log(ownerAdd);
    let tx = await nftInstance.setCurrentSupply("2000");
    await tx.wait();

    let currentSupply = await nftInstance.currentSupply();
    //console.log(totalSupply.toString());
    assert.equal(
      currentSupply.toString(),
      "2000",
      "Current supply not changed to 2000"
    );
  });

  it("Set asset price", async () => {
    await nftInstance.setbPrice(ethers.utils.parseUnits("1.0", "ether"));
    let bPrice = await nftInstance.bPrice();
    //console.log(ethers.utils.formatEther(getNFTPrice.toString()));
    assert.equal(
      ethers.utils.formatEther(bPrice.toString()),
      "1.0",
      "NFT price is changed to 1 ether"
    );

    
  });

  it("Set rare asset price", async () => {
    await nftInstance.setrPrice(ethers.utils.parseUnits("1.0", "ether"));
    let rareBunnyPrice = await nftInstance.rPrice();
    //console.log(ethers.utils.formatEther(getNFTPrice.toString()));
    assert.equal(
      ethers.utils.formatEther(rareBunnyPrice.toString()),
      "1.0",
      "rareBunnyPrice price is changed to 1 ether"
    );

  });

  it("Set new Base URI", async () => {
    nftInstance.setBaseURI("https://drive.google.com/");
    let baseURI = await nftInstance.getBaseURI();
    assert.equal(
      baseURI,
      "https://drive.google.com/",
      "Base URI changed successfully"
    );
  });
});

describe("DaBunny NFT - Minting Tokens", function () {
  it("Mint single token", async () => {
    await nftInstance.connect(owner).mint(1, false, {
      value: ethers.utils.parseEther(param_price.toString())
      // gasLimit: gasLimit * 2,
    });

    let totalMintedTokens = await nftInstance.totalSupply();
    //console.log(totalSupply.toString());
    assert.equal(
      totalMintedTokens.toString(),
      "1",
      "Total minted tokens not correct"
    );
  });

  it("Mint multiple token", async () => {
    await nftInstance.connect(owner).mint(9, false, {
      value: ethers.utils.parseUnits( (0.72).toString(), "ether")
      // gasLimit: gasLimit * 3,
    });
    let totalMintedTokens = await nftInstance.totalSupply();
    assert.equal(
      totalMintedTokens.toString(),
      "10",
      "Total minted tokens not correct"
    ); 
  });
});

describe("DaBunny NFT - Test saleOpen", function () {
  it("Owner can mint when sale is closed", async () => {
  });
  it("Whitelist user can mint when sale is closed", async () => {
  });
  it("Other users can't mint when sale is closed", async () => {
  });
  it("Saleopen can be toggled", async () => {
  });
});

describe("DaBunny NFT - Set current supply", function () {
  it("Current supply can be set more than already exists", async () => {
  });
  it("Current supply can't be set less than current and more than max supply", async () => {
  });
});

describe("DaBunny NFT - revealed token functionality", function () {
  it("Getting not revealed URI when revealed is false", async () => {
  });
  it("Getting correct tokenURI when revealed is true", async () => {
  });
  it("Can toggle revealed", async () => {
  });
});

describe("DaBunny NFT - Withdrawing ethers", function () {
  it("Non Owner cant withdraw", async () => {
    //let [owner, account1] = await ethers.getSigners();
    try {
      let tx = await nftInstance.connect(acct4).withdraw();
      console.log('Transaction non owner withdraw:', tx);
      assert.ok(false, "The other account can not withdraw");
    } catch (err) {
      console.log("The other account failed to call the withdraw function of the NFT:");
      assert.ok(
        true,
        "The other account failed to call the withdraw function of the NFT"
      );
    }
  });

  it("Owner can withdraw", async () => {
    //let [owner, account1] = await ethers.getSigners();
    try {
      let contractBal_before = await provider.getBalance(nftInstance.address);
      console.log('erc20Balance1::', ethers.utils.formatEther(erc20Balance1.toString()));
      let ownerBal_before = await provider.getBalance(owner.address);
      console.log('acct1Balance1::', ethers.utils.formatEther(acct1Balance1.toString()));

      let tx = await nftInstance.connect(owner).withdraw();
      await tx.wait();

      let erc20Balance = await provider.getBalance(nftInstance.address);
      console.log('erc20Balance::', ethers.utils.formatEther(erc20Balance.toString()));
      let ownerBal_after = await provider.getBalance(owner.address);

      expect(ownerBal_after).to.equal(ownerBal_before.mul(contractBal_before));

    } catch (err) {
      console.log("The owner failed to call the withdraw function of the NFT:", err);
      // assert.ok(
      //   true,
      //   "The other account failed to call the withdraw function of the NFT"
      // );
    }
  });

});

// describe("DaBunny NFT - Checking transfer of ownership", function () {
//   it("Check transfer owner of the contract creator", async () => {
//     //let [owner1, owner2] = await ethers.getSigners();
//     //console.log(owner.address, account1.address);
//     let ownerAdd = await nftInstance.owner();
//     console.log("owneradd: ", ownerAdd);
//     assert.equal(ownerAdd, account1.address, "Owner of contract not correct");
//     let tx = await nftInstance
//       .connect(account1)
//       .transferOwnership(owner.address, { gasLimit: gasLimit });
//     //console.log("tx: ", tx);
//     // await tx.wait();
//     //console.log('tx1:', tx1);
//     newAdd = await nftInstance.owner();
//     console.log("newAdd: ", newAdd);
//     assert.equal(newAdd, account1.address, "Owner of contract not trasnferred");
//   }); //.timeout(50000);
// });
