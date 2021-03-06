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
      <title>SafeThai - แจก Airdrop เพื่อDefi ไทยต้องก้าวไกลระดับโลก</title>
    </Head>
  )

  if (!active) {
    return (
      <div className="px-2 md:px-4 container text-white mx-auto">
        <div className="my-8">
          <div className="text-3xl">SafeThai Airdrop</div>
        </div>

        <div className="my-8">
          <div>* ได้เหรียญในไม่กี่สัปดาห์หลังจากขาย Round 3 หมด</div>
          <div>* จำกัดเฉพาะ 5000 คนแรกเท่านั้น</div>
          <div>* ถ้าดังถึงระดับ SafeMoon แค่ Airdrop ก็เกิน 10,000 บาทแล้ว</div>
        </div>

        <div className="my-8">
          <ConnectWalletButton></ConnectWalletButton>
        </div>
      </div>
    )
  }

  return (
    <div className="px-2 md:px-4 container text-white mx-auto">
      <div className="my-8">
        <div className="text-3xl text-yellow-200">SafeThai Airdrop</div>
      </div>

      <div className="my-8">
        <div>* ได้เหรียญในไม่กี่สัปดาห์หลังจากขาย Round 3 หมด</div>
        <div>* จำกัดเฉพาะ 5000 คนแรกเท่านั้น</div>
        <div>* ถ้าดังถึงระดับ SafeMoon แค่ Airdrop ก็เกิน 10,000 บาทแล้ว</div>
      </div>

      <div className="my-8" id="facebook">
        <div className="text-xl mb-4 text-yellow-200">Facebook (300,000,000 SafeThai)</div>

        <ol className="list-decimal px-8">
          <li>กด Like <a className="underline" href="https://www.facebook.com/SafeThaiFinance/" target="blank">เพจ SafeThai - Defi ไทยต้องก้าวไกลระดับโลก</a></li>
          <li>เข้ากลุ่ม <a className="underline" href="https://www.facebook.com/groups/791619518452583" target="blank">SafeThai Community</a></li>
          <li>แชร์ <a className="underline" href="https://www.facebook.com/SafeThaiFinance/posts/107818658124503" target="blank">โพสนี้</a> แล้วแท็กเพื่อน 3 คน</li>
          <li>Comment ใต้ <a className="underline" href="https://www.facebook.com/SafeThaiFinance/posts/107818658124503" target="blank">โพสนี้</a> โดยบอกสิ่งที่อยากได้จาก SafeThai พร้อมแปะลิ้ง {LinkComponent} เข้าไปต่อท้าย</li>
        </ol>
      </div>

      <div className="my-8">
        <div className="text-xl mb-4 text-yellow-200">Twitter (300,000,000 SafeThai)</div>

        <ol className="list-decimal px-8">
          <li>กด Follow <a className="underline" href="https://twitter.com/SafethaiD">Twitter SafeThai - Defi ไทยต้องก้าวไกลระดับโลก</a></li>
          <li>Retweet <a className="underline" href="https://twitter.com/SafethaiD/status/1387704101807525895" target="blank">tweet นี้</a> แล้วแท็กเพื่อน 3 คน</li>
          <li>Comment ใต้ <a className="underline" href="https://twitter.com/SafethaiD/status/1387704101807525895" target="blank">tweet นี้</a> โดยบอกสิ่งที่อยากได้จาก SafeThai พร้อมทั้งแปะลิ้ง {LinkComponent} เข้าไปต่อท้าย</li>
        </ol>
      </div>

      <div className="my-8">
        <div className="text-xl mb-4 text-yellow-200">Discord (300,000,000 SafeThai)</div>

        <ol className="list-decimal px-8">
          <li>Join <a className="underline" href="https://discord.gg/3nzFyJq6gd" target="blank">Discord SafeThai - Defi ไทยต้องก้าวไกลระดับโลก</a></li>
          <li>แปะลิ้ง {LinkComponent} ไว้ใน Channel #airdrop</li>
        </ol>
      </div>

      {/* <div className="my-8">
        <div className="text-xl mb-4 text-yellow-200">Blockchain The New Gen (100,000,000 SafeThai)</div>
        <div></div>

        <ol className="list-decimal px-8">
          <li>ทำ Task Facebook ข้างบน</li>
          <li>กด Like <a className="underline" href="https://www.facebook.com/BlockchainNewGen" target="blank">เพจ Blockchain The New Gen</a></li>
          <li>เข้ากลุ่ม <a className="underline" href="https://www.facebook.com/groups/1738492826331671" target="blank">New Gen Defi Society</a></li>
        </ol>
      </div> */}

      {/* <div className="my-8">
        <div className="text-xl mb-4 text-yellow-200">Free Style (1,000,000,000 SafeThai)</div>
        <div className="mb-4">
          <div>* 2000 คนแรกเท่านั้นที่ผ่านการพิจารณา</div>
          <div>* ต้องแปะในที่ที่มีสมาชิกอย่างน้อย 500 คน</div>
          <div>* ถ้าใช้การ Comment ต้อง Comment 2 โพส หรือ Comment 1 โพส พร้อม Share</div>
        </div>

        <ol className="list-decimal px-8">
          <li>เขียนโพสด้วยตนเอง หรือ Copy จากโพสตัวอย่างนี้ ไปแปะในที่ไหนก็ได้ ที่มีสมาชิกอยู่มาก หรือ Comment ใต้โพส 2 โพส หรือ Comment 1 โพส พร้อม Share (เลือกอย่างใดอย่างหนึ่ง หรือทำทั้งหมดก็ได้)</li>
          <li>ส่งลิ้ง พร้อมแคปหน้าจอ ไปใน Channel #freestyle-airdrop ใน <a className="underline" href="https://discord.gg/3nzFyJq6gd" target="blank">Discord SafeThai - Defi ไทยต้องก้าวไกลระดับโลก</a></li>
        </ol>
      </div> */}

      <div className="my-8 flex flex-col lg:flex-row">
        <Link href="/round0">
          <button
            className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
          >
            <div>ซื้อ Round 0 ต่อเลย</div>
          </button>
        </Link>

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