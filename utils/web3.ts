import Web3 from "web3";

export let web3 = process.browser ? new Web3(window.ethereum ?? window.web3.currentProvider) : new Web3();

if (process.browser) {
  window.web3client = web3;
}