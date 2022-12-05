const { ethers } = require('hardhat');

const provider = new ethers.provider.Web3Provider(window.ethereum);
let signer;

const tokenAbi = [];
const tokenAddress = "";
let tokenContract = null;

const dexAbi = [
  "constructor(address _token, uint256 _price)",
  "function associatedToken() view returns (address)",
  "function buy(uint256 numTokens) payable",
  "function getPrice(uint256 numTokens) view returns (uint256)",
  "function getTokenBalance() view returns (uint256)",
  "function sell()",
  "function withdrawFunds()",
  "function withdrawTokens()"
];
const dexAddress = "";
let dexContract = null;

async function getAccess() {
  if (tokenContract) return;
  await provider.send('eth_requestAccounts', []);
  signer = provider.getSigner();
  tokenContract = new ethers.Contract(tokenAddress, tokenAbi, signer);
  dexContract = new ethers.Contract(dexAddress, dexAbi, signer);
}