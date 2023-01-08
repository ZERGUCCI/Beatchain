require('chai');
require('ethereum-waffle');
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('ethers');
require('solidity-coverage');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.2",
  "build": "hardhat compile",
  "test:light": "hardhat test",
  "test": "hardhat coverage",
};
