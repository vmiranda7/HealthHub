
// Conectar la Dapp con la Red Ethereum

if(Meteor.isClient){
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
    console.log("CLIENT CONNECT METAMASK");
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    console.log("CLIENT CONNECT TO OWN NODE");
  }
}
