import { signMessageWith } from "@lens-protocol/client/ethers";
import { ethers } from 'ethers';
import { client } from "../client";
import { privateKey  } from "../signer";

async function login() {
  if (!privateKey) {
    throw new Error("Private key is undefined. Please provide a valid private key.");
  }
  const signer = new ethers.Wallet(privateKey);

  const authenticated = await client.login({
    onboardingUser: {
      app: "0x5678…",
      wallet: signer.address,
    },
    signMessage: signMessageWith(signer),
  });

  if (authenticated.isErr()) {
    console.error(authenticated.error);
  } else {
    const sessionClient = authenticated.value;
    // Use sessionClient here
  }
}

login();