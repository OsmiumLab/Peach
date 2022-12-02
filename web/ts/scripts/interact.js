const API_KEY = "MEhtp_BB4XbDcq6Qwhiz7IsRakZ2OJfo";
const PRIVATE_KEY = "91474fbad92ae7b8d443663db9ed1e8ab94a8e6633efa7c118b4972c2bb8c397"
const CONTRACT_ADDRESS = "0xFaE642f1Cfe33Bd9D461022F88B774C80803B82d"

const contract = require("../artifacts/contracts/TopSecret.sol/TopSecret.json");


const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const Test = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    document.getElementById("button").addEventListener("click", async function() {
        const result = await Test.getSecret();
        document.getElementById("secret").innerHTML = result;
    });
}
  main();