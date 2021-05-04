import Link from "next/link";
import React from "react";
import ConnectWalletButton from "./ConnectWalletButton";

export default function Header(props) {
  return (
    <div className="flex justify-between text-white p-4 px-4 md:px-8">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          {/* <img src="/safethai.png" style={{
            maxWidth: 36
          }}></img> */}
          <div className="text-xl ml-3">SafeThai</div>
        </div>
      </Link>

      <div>
        <ConnectWalletButton></ConnectWalletButton>
      </div>
    </div>
  )
}