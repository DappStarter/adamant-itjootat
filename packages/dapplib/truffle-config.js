require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth place minute hunt knife blue trend'; 
let testAccounts = [
"0xadb126fa834ba37e71db69a6b2724827da6c8e00d2318a9ea62fe7f57bf19914",
"0xc3da024018b1d11969a842a18f6e485f42544f2c8a9bc89350df835219c96865",
"0xcc50b90f0357e46a9dcdd84010a3f761e517b0da1080e5b4ed7ed59ce194a3ef",
"0xf794a560db45100f33b0a698a5b55910d428cc5ccc544ff923fa64e2cb1f7593",
"0xb5c1c00c5d8aa9afc19a4b9d8a3040145304ab99fe1332bca6ac69ea34c67e54",
"0x388fb01347c1e0b1e459622632eba424b18e4ee596af635ac465e5c6aeca2dc1",
"0xd64c82dfe52aba5c5492b707eccd95276d319e9abb7a82d20635d133bb764b88",
"0x4fd08d443c58c13d0063750c87dfae242535cc6f62eb5d1955d2e4d9e9458ac2",
"0x6fae1e04029508ce31698737d442c584f7fa650d030a6182b5a2a557504852b9",
"0x666b7e009aed2727d10cc6e8401c859edfd4a7d1e1e5f73f93b4413ef845cac0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
