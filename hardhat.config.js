require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const INFURA_API_KEY = process.env.NEXT_PUBLIC_INFURA_API_KEY_1;
const privateKey1 = process.env.PRIVATE_KEY_OWNER1;
const privateKey2 = process.env.PRIVATE_KEY_OWNER2;
const privateKey3 = process.env.PRIVATE_KEY_OWNER3;
const privateKeyMainnet = process.env.PRIVATE_KEY_MAINNET_ACCOUNT;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
          metadata: {
            bytecodeHash: "none",
          },
        },
      },
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${privateKey1}`, `0x${privateKey2}`, `0x${privateKey3}`],
      saveDeployments: true,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${privateKey1}`],
      gasPrice: 30000000000,
    },
    mumbai: {
      // Infura
      url: `https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}`,
      //url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey1],
      gasPrice: 35000000000,
      saveDeployments: true,
    },
    matic: {
      // Infura
      url: `https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}`,
      // url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey1],
      gasPrice: 35000000000,
    }
  },
  etherscan: {
    apiKey: '81ZHMHFVIG9648HXRV5P3DHIXDYG8SESP9',
  },
  polygonscan: {
    apiKey: "81ZHMHFVIG9648HXRV5P3DHIXDYG8SESP9"
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    coinmarketcap: '03c08687-31bd-4ca0-88a2-ba13fb634273',
    gasPrice: 40
  }
};