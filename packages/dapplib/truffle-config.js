require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remind attitude inflict enter outer genuine'; 
let testAccounts = [
"0xe71a04d70a4641ecff3e7fe2405274ea0e816b6f7894af6415026ee24567cac5",
"0x0dcd169c22990a9d21ba21608b1ef5d60042d6b70e32ae50a9a8222efaa6216e",
"0x23fabd18bf9d568068a5673ca9d0cd8df0b6c7b43148c7c8930402e817ece557",
"0x60be90fd950caedb13895aa979951822f8e7cf0a957e8006a541ccb92840c78c",
"0x97acc57c43aec101a104f1c9b280f96f66c2217267cfd2e679d02cdef6257353",
"0x7b00573ee7c96f9f9cdde5905ada6af91ee64caed6aa518ed5985bcda6d5654e",
"0x48c7b37849852c0c404c1dce87a9bb9df93ef71f4d1942a9995c11f433dfd1a6",
"0xd82cf0fda8dba8fa0662224ae958d31db77e2619244329cba8f07e92b9001d67",
"0xae08d7ee921c61e7e4916e593e24c7ccbb56f10c20d8dfed027c8c264467a49e",
"0x9f4667de8c934154decd333d73df82edd2b6928dfee47de4d06624442732c4fe"
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
