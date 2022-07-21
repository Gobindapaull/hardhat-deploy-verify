
require("@nomiclabs/hardhat-waffle");
let secret =require("./secret");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks:{
    rinkeby:{
      url:secret.url,
      accounts:[secret.key]
    }
  },
  etherscan:
  {
    apiKey:"I85Z6ZRMZI8N9ZMVH3RCJ14KADYXE"
  }
  ,
  spdxLicenseIdentifier: {
    overwrite: true,
    runOnCompile: true,
  }
};