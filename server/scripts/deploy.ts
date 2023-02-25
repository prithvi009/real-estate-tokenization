import { ethers } from "hardhat";

async function main() {
  // const [deployer] = await ethers.getSigner();
  const Token = await ethers.getContractFactory("RealEstateToken");
  const token = await Token.deploy();
  console.log("token address :", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x24a94ebcF32d3A8d5B3fCA1173EAb17db6e18440
