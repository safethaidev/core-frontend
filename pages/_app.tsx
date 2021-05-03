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

    firebase: any;
    db: any;
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
          <link rel="icon" href="/safethai.png" />
          <title>SafeThai - Defi ไทยต้องก้าวไกลระดับโลก - Defi Venture Capital สำหรับคนไทย</title>
          <meta property="og:image"         content="https://safethai.finance/img/cover/fbcover.jpg" key="ogimage" />

          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-C5C63W7XJC"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
  
              gtag('config', 'G-C5C63W7XJC');
              `
            }}
          ></script>

          {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
          <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js"></script>

          {/* <!-- TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries --> */}
          <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-analytics.js"></script>

          <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-firestore.js"></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Your web app's Firebase configuration
                // For Firebase JS SDK v7.20.0 and later, measurementId is optional
                var firebaseConfig = {
                  apiKey: "AIzaSyAkk1Hj5OiyFQl2otRSmwqddvL84WI3Ork",
                  authDomain: "safethai-26478.firebaseapp.com",
                  projectId: "safethai-26478",
                  storageBucket: "safethai-26478.appspot.com",
                  messagingSenderId: "207141143268",
                  appId: "1:207141143268:web:9d4609b855b4348b7762f1",
                  measurementId: "G-6K6SB1E0NB"
                };
                // Initialize Firebase
                firebase.initializeApp(firebaseConfig);
                firebase.analytics();

                window.db = firebase.firestore();
              `
            }}
          ></script>
        </Head>

        <Header></Header>

        <Component {...pageProps} />
      </Web3ReactProvider>
    </>
  );
}

export default MyApp;
