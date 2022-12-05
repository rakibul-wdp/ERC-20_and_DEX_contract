const { expect } = require("chai");

describe('DEX', () => {
  let tokenSupply = '100';

  let token;
  let dex;

  let price = 100;

  let owner;
  let addr1;
  let addr2;

  beforeEach(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory('Token');
    token = await Token.deploy(tokenSupply);

    const DEX = await ethers.getContractFactory('DEX');
    dex = await DEX.deploy(token.address, price);
  })
})