import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


const metamask_private_key = "8c61e3d0d3070ce80f5b5d933b6e90a627c2262081195212df5356d9e09bdc0c"

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url:"https://goerli.infura.io/v3/1829068b9bb8479182ff09808aa51a0e",
      accounts:[metamask_private_key]
    }
  }
};

export default config;
