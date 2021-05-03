import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import AvatarLinkList from "../components/AvatarLinkList";
import ConnectWalletButton from "../components/ConnectWalletButton";
import SafeThaiOfficial from "../components/SafeThaiOfficial";
import TimelineItem from "../components/TimelineItem";
import { web3 } from "../utils/web3";

const PREVIEW_CONTENT = [
  {
    img: "/img/content/pages/newgen.jpg",
    title: "Blockchain The New Gen",
    href: "https://www.facebook.com/BlockchainNewGen",
  },
  {
    img: "/img/content/pages/blockchainreview.jpg",
    title: "Blockchain Review",
    href: "https://www.facebook.com/blockchainreviewth",
  },
  {
    img: "/img/content/groups/defikanmai.jpg",
    title: "defi กันไหมวัยรุ่น",
    href: "https://www.facebook.com/groups/899570467532460",
  },
  {
    img: "/img/content/groups/nft.jpg",
    title: "NFT and Crypto Art Thailand",
    href: "https://www.facebook.com/groups/1112704465822065",
  },
];

const SPONSORED_CONTENT = [
  {
    img: "/img/content/pages/newgen.jpg",
    title: "Blockchain The New Gen",
    href: "https://www.facebook.com/BlockchainNewGen",
    description: "เนื่องจากมีการนำเนื้อหาในเพจมาใช้",
  },
];

async function signMsg(msgParams, from) {
  return await web3.eth.personal.sign(msgParams, from, "safethai");
}

export default function Home() {
  const [round1Ended, setRound1Ended] = useState(false);
  const { account, active } = useWeb3React();

  return (
    <div className="md:px-8">
      <Head>
        <title>SafeThai - ประกาศสำคัญ</title>
      </Head>

      {/* Introduction block */}
      <div className="bg-gray-800">
        <div className="container mx-auto my-12 p-4 text-white">
          <div className="mb-4">
            <div className="flex justify-center mb-12">
              <img
                src="/safethai.png"
                style={{
                  maxWidth: 240,
                  height: 240,
                }}
              ></img>
            </div>

            <div className="text-4xl text-center mb-2 text-yellow-200">
              SafeThai - Defi ไทยต้องก้าวไกลระดับโลก
            </div>
          </div>

          {/* <div className="flex flex-col md:flex-row justify-center">
            <button
              className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
            >
              <div>ซื้อจาก Pancakeswap</div>
            </button>
          </div> */}
        </div>
      </div>

      {/* Announcement */}
      <div className="mt-2 text-white text-center">
        <div className="my-3">
          SafeThai เปิดโอกาสให้ผู้ที่ไม่ต้องการสนับสนุนแล้วสามารถขอเงินคืนได้
          ตั้งแต่ตอนนี้ ถึงวันที่ 5 พฤษภาคม 2564 เวลา 21:00
          โดยเป้าหมายหลักของทีมผู้พัฒนานั้นต้องการรักษาผลประโยชน์ให้กับผู้ลงทุนที่พร้อมสนับสนุนโปรเจคของเรา
          ทางทีม SafeThai ได้ทำการวิเคราะห์แล้วพบว่า Branding
          นั้นยังทำได้ไม่ดีพอ
          จึงส่งผลให้ยังไม่ได้รับการตอบรับที่ดีพอในด้านความน่าเชื่อถือ
          แต่ทั้งนี้ทางทีมผู้พัฒนามิได้มีเจตนาในการทอดทิ้งโปรเจค
          แต่จะทำการปรับปรุงในด้านต่างๆ โดยเฉพาะอย่างยิ่งด้าน Branding
          แล้วจึงทำการปล่อยเหรียญออกมาอีกครั้ง
          เพื่อรักษาผลประโยชน์ให้แก่ผู้ลงทุน
          ไม่ต้องมาแบกรับความเสี่ยงที่ไม่สามารถคาดการณ์ได้ในอนาคต ตอนนี้ทาง
          SafeThai ได้รับการสนับสนุนโปรเจคทั้งหมดตอนนี้เป็นจำนวน 13.333 BNB
          โดยถ้าหากมีผู้ขอคืนเงินจนเหลือต่ำกว่า 7 BNB
          ทางผู้พัฒนาจะไม่ทำการออกเหรียญ SafeThai
          และเปิดให้สมัครใจคืนเงินไปเรื่อยๆ แต่ถ้าเหลืออย่างน้อย 7 BNB
          ทางทีมผู้พัฒนาจะทำการปรับปรุง Branding ให้เร็วที่สุด
          และจะมีการปล่อยเหรียญออกมาอีกครั้ง
        </div>

        <div className="my-4 text-xl">Defi ไทยต้องก้าวไกลระดับโลก</div>
      </div>

      <div className="flex flex-col md:flex-row justify-center">
        <Link href="/detail">
          <button className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center">
            <div>รายละเอียดเพิ่มเติม</div>
          </button>
        </Link>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto pt-8 md:pt-12">
          <div className="text-center text-3xl mb-4 text-yellow-200">การตัดสินใจ</div>
        </div>
      </div>

      {!active ? (
        <div className="flex flex-row my-3 justify-center">
          <ConnectWalletButton></ConnectWalletButton>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row my-3 justify-center">
          <button
            className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
            onClick={async () => {
              try {
                if (!confirm("คุณจะได้รับเงินคืนภายใน 3 วัน และคุณเข้าใจว่าเป็นการสละสิทธิ์การได้รับเหรียญของคุณ")) return;

                let amount = prompt("กรุณาระบุจำนวนเงินที่ต้องการขอคืน ในหน่วย BNB");
                if (!parseFloat(amount)) {
                  alert("กรุณาใส่จำนวนเงินให้ถูกต้อง");
                  return;
                }
  
                let signature = await signMsg("Refund " + amount, account);
                console.log(signature);
  
                await window.db.collection("refund").doc(account).set({
                  refundAmount: amount,
                  address: account,
                  signature
                })

                alert("ขอคืนเงินสำเร็จ คุณจะได้รับเงินคืนภายใน 3 วัน")
              } catch (err) {
                console.error(err);
                alert("เกิดข้อผิดพลาดในการขอคืนเงิน กรุณาติดต่อทาง Inbox ของเพจ SafeThai")
              }
            }}
          >
            <div>ขอคืนเงิน</div>
          </button>

          <button
            className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
            onClick={async () => {
              try {
                if (!confirm("คุณได้ทราบว่าทาง SafeThai จะมีการพัฒนา Branding ซึ่งต้องใช้เวลามากขึ้นในการออกเหรียญ และได้ศึกษาและยอมรับความเสี่ยงต่างๆที่ได้ระบุไว้ในรายละเอียดเพิ่มเติม")) return;

                let signature = await signMsg("Support", account);
                console.log(signature);
  
                await window.db.collection("refund").doc(account).set({
                  refundAmount: 0,
                  address: account,
                  signature
                })

                alert("ทางผู้พัฒนาขอขอบคุณทุกท่านที่ให้ความไว้วางใจและสนับสนุนโครงการ SafeThai ในครั้งนี้ครับ")
              } catch (err) {
                console.error(err);
                alert("เกิดข้อผิดพลาดในการขอคืนเงิน กรุณาติดต่อทาง Inbox ของเพจ SafeThai")
              }
            }}
          >
            <div>สนับสนุนต่อ</div>
          </button>
        </div>
      )}

      <div className="my-4 text-white text-center">
        จะมีการขอ Sign Signature Request ซึ่งไม่เสียค่าใช้จ่ายใดๆ
      </div>

      <div className="my-4 text-white text-center">
        เมื่อคุณทำการกดขอคืนเงิน หรือสนับสนุนต่อ หมายความว่าคุณได้อ่าน เข้าใจและยอมรับ<Link href="/detail"><span className="underline">รายละเอียดเพิ่มเติม</span></Link>
      </div>

      <div className="my-4 text-white text-center">
        ทางผู้พัฒนาขอขอบคุณทุกท่านที่ให้ความไว้วางใจและสนับสนุนโครงการ SafeThai
        ในครั้งนี้ครับ
      </div>

      <SafeThaiOfficial></SafeThaiOfficial>
    </div>
  );
}
