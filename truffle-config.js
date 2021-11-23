require('babel-register');
require('babel-polyfill');

require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" 
    },
    ropsten: {
      networkCheckTimeout: 10000,
      provider: function(){
        return new HDWalletProvider(
          process.env.MNEMONIC_ROPSTEN,
          `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY_ROPSTEN}`
        )
      },
      gasPrice: 25000000000,
      network_id: "*" 
    },
    kovan: {
      provider: function(){
        return new HDWalletProvider(
          process.env.MNEMONIC_KOVAN,
          'https://kovan.infura.io/v3/${process.env.INFURA_API_KEY_KOVAN}'
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42
    },
  },
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "^0.8",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}