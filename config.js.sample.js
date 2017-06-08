var web3 = require('web3');
var net = require('net');

var config = function () {
  
  this.logFormat = "combined";
  this.ipcPath = process.env["HOME"] + "/.local/share/io.parity.ethereum/jsonrpc.ipc";
  this.provider = new web3.providers.IpcProvider(this.ipcPath, net);
  
  this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/solar/bootstrap.min.css";
  
  this.namesKovan = {
    "0x007733a1fe69cf3f2cf989f81c7b4cac1693387a": "POA-Digix",
    "0x00e4a10650e5a6d6001c38ff8e64f97016a1645c": "POA-Aurel",
    "0x00e6d2b931f55a3f1701c7389d592a7778897879": "POA-Maker",
    "0x0010f94b296a852aaac52ea6c5ac72e03afd032d": "POA-Paritytech",
    "0x0020ee4be0e2027d76603cb751ee069519ba81a1": "POA-Melonport",
    "0x4ed9b08e6354c70fe6f8cb0411b0d3246b424d6c": "POA-OneBit",
    "0x00d6cc1ba9cf89bd2e58009741f4f7325badc0ed": "POA-Etherscan",
    "0x00a0a24b9f0e5ec7aa4c7389b8302fd0123194de": "POA-GridS",
    "0x00427feae2419c15b89d1c21af10d1b6650a4d3d": "POA-Attores"    
  }

    this.names = {
    "0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8": "Ethermine",
    "0x4Bb96091Ee9D802ED039C4D1a5f6216F90f81B01": "Ethpool_2",
    "0x52bc44d5378309EE2abF1539BF71dE1b7d7bE3b5": "Nanopool",
    "0x61C808D82A3Ac53231750daDc13c777b59310bD9": "f2pool",
    "0xb2930B35844a230f00E51431aCAe96Fe543a0347": "DwarfPool1",
    "0xb2930B35844a230f00E51431aCAe96Fe543a0347": "miningpoolhub_1",
    "0xA42AF2C70d316684E57AEfcC6E393fecb1c7e84E": "Coinotron",
    "0x1E9939DaaAd6924AD004C2560e90804164900341": "ethfans.org",
    "0x73b8865edA227D6ffFABc83c78124dEA8C347FEA": "poolgpu"    
  }

  
}

module.exports = config;