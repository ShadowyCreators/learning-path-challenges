import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  paths: {
    sources: './contracts',
    tests: './contracts'
  },
};

export default config;
