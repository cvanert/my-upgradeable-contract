const { ethers, upgrades } = require('hardhat');

/*
Compiled 3 Solidity files successfully (evm target: paris).
Proxy contract address: 0x6A2CC315A1f75eE131F9E9d98d94dB3227d3EBc6
Implementation contract address: 0x904E87E20B35953dF5a8770Ef6d6402C3833E05B
*/

async function main() {
  const VendingMachineV1 = await ethers.getContractFactory('VendingMachineV1');
  const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
  await proxy.deployed();

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxy.address
  );

  console.log('Proxy contract address: ' + proxy.address);

  console.log('Implementation contract address: ' + implementationAddress);
}

main();