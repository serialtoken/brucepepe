require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-abi-exporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "localhost",

  solidity: {
    compilers: [
      {
        version: "0.4.18",
      },
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },

    hardhat: {
      forking: {
        url: process.env.RPC_ARCHIVE,
        blockNumber: 17275561,
      },
    },

    mainnet: {
      url: process.env.RPC_ETHEREUM || "",
      accounts: process.env.PK_ETHEREUM !== undefined ? [process.env.PK_ETHEREUM] : [],
    },

    goerli: {
      url: process.env.RPC_GOERLI || "",
      accounts: process.env.PK_GOERLI !== undefined ? [process.env.PK_GOERLI] : [],
    },
  },
  gasReporter: {
    enabled: true,
    token: "ETH",
    gasPriceApi: "https://api.etherscan.io/api?module=proxy&action=eth_gasPrice",
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP,
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
      mainnet: process.env.ETHERSCAN_API_KEY,
    },
  },
  abiExporter: {
    path: "./abi",
    pretty: true,
  },
};
