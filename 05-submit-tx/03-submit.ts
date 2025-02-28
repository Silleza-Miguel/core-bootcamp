// 0x3b26E8DA9aDedAAe86a260b6354aC1855AA65C14

import path from 'path'
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

import {
  Hex,
  createWalletClient,
  getContract,
  http,
  publicActions,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import artifacts from "./submit.artifacts.json";

// Application Binary Interface
const { abi } = artifacts;

const privateKey = process.env.PRIVATE_KEY;
const account = privateKeyToAccount(`0x${privateKey}` as Hex);

(async () => {
  const client = createWalletClient({
    account,
    transport: http(process.env.API_URL),
  }).extend(publicActions);

  const contractAddress = '0x3b26E8DA9aDedAAe86a260b6354aC1855AA65C14';
  const contract = getContract({
    address: contractAddress,
    abi,
    client,
  });

  const tx = await contract.write.recordSubmission([
    'Silleza-Miguel',
    'Megel',
    '0x64418c7b1133356bdd6980A4562C80AA4806df00',
    '0x14B8158EF421958daE0e1e643A287d4349F2f05E'
    ]);    
  console.log('tx', tx);
})();