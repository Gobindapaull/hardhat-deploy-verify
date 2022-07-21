
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deployer address:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  // contract Name
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();

  console.log("Contract address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });