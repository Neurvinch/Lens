'use client'
// import { signMessageWith } from "@lens-protocol/client/ethers";
// import { ethers } from 'ethers';
// import { client } from "../client";
// import { privateKey  } from "../signer";

// async function login() {
//   if (!privateKey) {
//     throw new Error("Private key is undefined. Please provide a valid private key.");
//   }
//   const signer = new ethers.Wallet(privateKey);

//   const authenticated = await client.login({
//     onboardingUser: {
//       app: "0x5678…",
//       wallet: signer.address,
//     },
//     signMessage: signMessageWith(signer),
//   });

//   if (authenticated.isErr()) {
//     console.error(authenticated.error);
//   } else {
//     const sessionClient = authenticated.value;
//     // Use sessionClient here
//   }
// }

// login();


import React, { useState } from 'react';
import { signMessageWith } from "@lens-protocol/client/ethers";
import { ethers } from 'ethers';
import { client } from "../client";
import { privateKey } from "../signer";

function Login() {
  const [address, setAddress] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
     if (!privateKey) {
    throw new Error("Private key is undefined. Please provide a valid private key.");
  }
    try {
      const signer = new ethers.Wallet(privateKey);
      const authenticated = await client.login({
        onboardingUser: {
          app: "0x5678…",
          wallet: signer.address,
        },
        signMessage: signMessageWith(signer),
      });

      if (authenticated.isErr()) {
        setError(authenticated.error.message ?? 'Unknown error');
      } else {
        const sessionClient = authenticated.value;
        // Use sessionClient here
        setAddress(signer.address);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={handleLogin}>Login with Lens</button>
      )}
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <p>Logged in as: {address}</p>
      )}
    </div>
  );
}

export default Login;