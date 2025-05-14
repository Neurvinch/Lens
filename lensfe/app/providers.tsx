'use client'

import {RainbowKitProvider, darkTheme} from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css"
import { WagmiProvider } from 'wagmi'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


import { polygonMumbai } from 'wagmi/chains'
import { JSX } from "react"



 

const config = getDefaultConfig({
  appName : "Lens",
  projectId: "kk",
  chains: [ polygonMumbai],  
  ssr: true,
});

const queryclient = new QueryClient()

const theme = darkTheme({
  accentColor: '#7b3fe4',
  accentColorForeground: "white",
  fontStack : "system",
  overlayBlur: "small",
})

export default function Providers({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryclient}>
        <RainbowKitProvider theme={theme}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}