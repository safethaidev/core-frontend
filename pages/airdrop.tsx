import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import ConnectWalletButton from "../components/ConnectWalletButton";

export default function Airdrop(props) {
  const { account, active } = useWeb3React();
  const LINK = "https://safethai.finance/airdrop?w=" + account;
  const LinkComponent = <a className="underline" href={LINK} target="blank">{LINK}</a>

  const HeadSection = (
    <Head>
      <title>SafeThai - แจก Airdrop เพื่อช่วย Defi ไทยใบนี้ไว้</title>
    </Head>
  )

  return (
    <div className="px-2 md:px-4 container text-white mx-auto">
      <div className="my-8">
        <div className="text-3xl text-yellow-200">SafeThai Airdrop</div>
      </div>

      <div className="my-8">
        <div>Airdrop ปิดชั่วคราวเพื่อป้องกันปัญหาที่อาจเกิดตามมาครับ โดยทางเราจะทำการปรับปรุง Content ให้ดียิ่งขึ้น</div>
      </div>

      <div className="my-8 flex flex-col lg:flex-row">
        <Link href="/">
          <button
            className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
          >
            <div>ศึกษาข้อมูลเกี่ยวกับ SafeThai เพิ่มเติม</div>
          </button>
        </Link>
      </div>
    </div>
  )
}