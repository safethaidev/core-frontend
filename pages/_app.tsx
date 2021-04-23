import Head from "next/head";
import React from "react";
import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import "../styles/globals.css";

import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

declare global {
  interface Window { 
    ethereum: any;
    web3: any;
    web3client: any;
  }
}

function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <Header></Header>

        <Component {...pageProps} />
      </Web3ReactProvider>
    </>
  );
}

export default MyApp;
