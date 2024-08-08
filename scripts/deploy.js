// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");

async function main() {

  //baseURI and not revealed uri
  let baseURI = "https://gateway.pinata.cloud/ipfs/QmYJfBnWNVjYR2gayhRZucjScnTg1D9h6wqpPotr2qd7N4/";
  let notRevealedUri = "https://gateway.pinata.cloud/ipfs/QmSXTv28979BJUVX41368hp42xx2JeJaRkx3D9NtTBeLqe";
  
  // We get the contract to deploy
  const accts = await ethers.getSigners();
  // accts.forEach( acct => {
  //   console.log('Account address: ', acct.address);
  // })
  console.log('Deployer address :', accts[0].address);
  const maxBatchSize = 10;
  const collectionSize = 5000;

  //Get NFTContract
  const NFTContract1 = await ethers.getContractFactory('BEE')
  //deploy nft
  const nftDeployed1 = await NFTContract1.deploy(
    "BeeNft", "BEE", 10, 5000);

  await nftDeployed1.deployed();
  console.log('NFT Contract deployed to address:', nftDeployed1.address)
  console.log("NTF owner: ", await nftDeployed1.owner());
 
  console.log(`Command to verify SC: $ npx hardhat verify --network mumbai ${nftDeployed1.address} BeeNft BEE 10 5000`);
  //set baseURI of the nft
  await nftDeployed1.updateBaseURI(notRevealedUri);
  let baseURI1 = await nftDeployed1.getBaseURI();
  console.log("baseURI set to - ", baseURI1);

  let tx = await nftDeployed1.adoptBunny(1,
    {value: ethers.utils.parseEther('0.12'), gasLimit: 300000});
  const receipt = await tx.wait();
  for (const event of receipt.events) {
    if (event.event !== 'Transfer') {
      console.log('ignoring unknown event type ', event.event)
      continue
    }
    tokenId = event.args.tokenId.toString()
    console.log("TokenId fetched - ", tokenId);
  }
  console.log('1 - tokenURI of tokenID: ', tokenId, await nftDeployed.tokenURI(tokenId));

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
