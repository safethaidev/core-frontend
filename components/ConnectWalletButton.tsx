import React, { useEffect } from "react";

import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  injected,
  // network,
  // walletconnect,
  // walletlink,
  // ledger,
  // trezor,
  // lattice,
  // frame,
  // authereum,
  // fortmatic,
  // magic,
  // portis,
  // torus
} from '../utils/connector'

export default function ConnectWalletButton(props) {
  const { connector, library, chainId, account, activate, deactivate, active, error } = useWeb3React();

  function activateWithCatch(c, allowDeactivate = false) {
    try {
      if (allowDeactivate && active) {
        alert("คุณสามารถเปลี่ยนกระเป๋าได้ โดยเปิด Metamask เปลี่ยนกระเป๋า แล้วกดที่ Not connected")
      } else {
        activate(c);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    activateWithCatch(injected);
  }, [])

  return (
    <button
      className="bg-white hover:bg-gray-200 text-black px-4 md:px-8 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-lg"
      onClick={() => activateWithCatch(injected, true)}
    >
      {connector && account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : "Connect Wallet"}
    </button>
  );
}