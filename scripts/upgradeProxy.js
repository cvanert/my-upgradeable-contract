const { ethers, upgrades } = require('hardhat');

/*
Compiled 1 Solidity file successfully (evm target: paris).
The current contract owner is: [object Promise]
Implementation contract address: 0x904E87E20B35953dF5a8770Ef6d6402C3833E05B
*/

// TO DO: Place the address of your proxy here!
const proxyAddress = '0x6A2CC315A1f75eE131F9E9d98d94dB3227d3EBc6';

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("The current contract owner is: " + upgraded.owner());
  console.log('Implementation contract address: ' + implementationAddress);
}

main();