/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

API_URL = "https://eth-goerli.g.alchemy.com/v2/MEhtp_BB4XbDcq6Qwhiz7IsRakZ2OJfo"
PRIVATE_KEY = "91474fbad92ae7b8d443663db9ed1e8ab94a8e6633efa7c118b4972c2bb8c397"

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
};
