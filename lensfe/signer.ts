import { Wallet } from 'ethers';
import { privateKeyToAccount } from "viem/accounts";

const privateKey = process.env.APP_PRIVATE_KEY;
if (!privateKey || !privateKey.startsWith("0x")) {
  throw new Error("APP_PRIVATE_KEY environment variable must be defined and start with '0x'");
}

const account = privateKeyToAccount(privateKey as `0x${string}`);
const signer = new Wallet(privateKey);
export { signer ,privateKey};

