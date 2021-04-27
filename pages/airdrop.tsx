import { useWeb3React } from "@web3-react/core";
import React from "react";
import ConnectWalletButton from "../components/ConnectWalletButton";

export default function Airdrop(props) {
  const { account, active } = useWeb3React();
  const LINK = "https://safethai.finance/airdrop?w=" + account;
  const LinkComponent = <a className="underline" href={LINK} target="blank">{LINK}</a>

  if (!active) {
    return (
      <div className="px-2 md:px-8 container text-white">
        <div className="my-8">
          <div className="text-3xl">SafeThai Airdrop</div>
        </div>

        <div className="my-8">
          <ConnectWalletButton></ConnectWalletButton>
        </div>
      </div>
    )
  }

  return (
    <div className="px-2 md:px-8 container text-white">
      <div className="my-8">
        <div className="text-3xl text-yellow-200">SafeThai Airdrop</div>
      </div>

      <div className="my-8">
        <div>* ได้เหรียญในไม่กี่สัปดาห์หลังจากขาย Round 3 หมด</div>
        <div>* จำกัดเฉพาะ 10000 คนแรกเท่านั้น</div>
      </div>

      <div className="my-8" id="facebook">
        <div className="text-xl mb-4 text-yellow-200">Facebook (20,000,000 SafeThai)</div>

        <ol className="list-decimal px-8">
          <li>กด Like <a className="underline" href="https://www.facebook.com/SafeThaiFinance/" target="blank">เพจ SafeThai - ช่วย Defi ไทยใบนี้ไว้</a></li>
          <li>เข้ากลุ่ม <a className="underline" href="https://www.facebook.com/groups/791619518452583" target="blank">SafeThai Community</a></li>
          <li>แชร์ โพสนี้ แล้วแท็กเพื่อน 3 คน</li>
          <li>Comment ใต้ โพสนี้ แล้วแท็กเพื่อน 3 คน พร้อมทั้งแปะลิ้ง เข้าไปต่อท้าย</li>
        </ol>
      </div>

      <div className="my-8">
        <div className="text-xl mb-4 text-yellow-200">Twitter (20,000,000 SafeThai)</div>

        <ol className="list-decimal px-8">
          <li>กด Follow <a className="underline" href="https://twitter.com/SafethaiD">Twitter SafeThai - ช่วย Defi ไทยใบนี้ไว้</a></li>
          <li>Retweet tweet นี้ แล้วแท็กเพื่อน 3 คน</li>
          <li>Comment ใต้ tweet นี้ แล้วแท็กเพื่อน 3 คน พร้อมทั้งแปะลิ้ง เข้าไปต่อท้าย</li>
        </ol>
      </div>

      <div className="my-8">
        <div className="text-xl mb-4 text-yellow-200">Discord (20,000,000 SafeThai)</div>

        <ol className="list-decimal px-8">
          <li>Join <a className="underline" href="https://discord.gg/3nzFyJq6gd" target="blank">Discord SafeThai - ช่วย Defi ไทยใบนี้ไว้</a></li>
          <li>แปะลิ้ง {LinkComponent} ไว้ใน Channel #airdrop</li>
        </ol>
      </div>

      <div className="my-8">
        <div className="text-xl mb-4 text-yellow-200">Blockchain The New Gen (10,000,000 SafeThai)</div>
        <div></div>

        <ol className="list-decimal px-8">
          <li>ทำ Task Facebook ข้างบน</li>
          <li>กด Like <a className="underline" href="https://www.facebook.com/BlockchainNewGen" target="blank">เพจ Blockchain The New Gen</a></li>
          <li>เข้ากลุ่ม <a className="underline" href="https://www.facebook.com/groups/1738492826331671" target="blank">New Gen Defi Society</a></li>
        </ol>
      </div>
    </div>
  )
}