import { privateKeyToAccount } from "viem/accounts";

export const signer = privateKeyToAccount(process.env.APP_PRIVATE_KEY);