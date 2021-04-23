import Link from "next/link";
import React from "react";
import ConnectWalletButton from "./ConnectWalletButton";

export default function Header(props) {
  return (
    <div className="flex justify-between text-white p-4 px-4 md:px-8">
      <Link href="/">
        <div className="flex items-center">
          <div className="text-xl">SafeThai</div>
        </div>
      </Link>

      <div>
        <ConnectWalletButton></ConnectWalletButton>
      </div>
    </div>
  )
}