const { ethers } = require('hardhat');

const provider = new ethers.provider.Web3Provider(window.ethereum);
let signer;

const tokenAbi = [];
const tokenAddress = "";
let tokenContract = null;

const dexAbi = [];
const dexAddress = "";
let dexContract = null;

async function getAccess() {
  if (tokenContract) return;
  await provider.send('eth_requestAccounts', []);
  signer = provider.getSigner();
  tokenContract = new ethers.Contract(tokenAddress, tokenAbi, signer);
  dexContract = new ethers.Contract(dexAddress, dexAbi, signer);
}