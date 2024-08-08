import { ethers } from "ethers";
// import {dabunnynftAbi} from "./dabunny-nft";
import BEE from "./BEE.json";

import { nftaddress } from "./config";

export const getNFTContract = (provider) => {
  return new ethers.Contract(nftaddress, BEE.abi, provider);
};

export const getNFTAddress = () => {
  return nftaddress;
};

