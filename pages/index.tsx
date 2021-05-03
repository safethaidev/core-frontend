import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import AvatarLinkList from '../components/AvatarLinkList';
import SafeThaiOfficial from '../components/SafeThaiOfficial';
import TimelineItem from '../components/TimelineItem'

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
  }
];

export default function Home() {
  const [round1Ended, setRound1Ended] = useState(false);

  return (
    <div className="px-2">
      <Head>
        <title>SafeThai - ประกาศสำคัญ</title>
      </Head>

      {/* Introduction block */}
      <div className="bg-gray-800">
        <div className="container mx-auto my-12 p-4 text-white">
          <div className="mb-4">
            <div className="flex justify-center mb-12">
              <img src="/safethai.png" style={{
                maxWidth: 240,
                height: 240,
              }}></img>
            </div>

            <div className="text-4xl text-center mb-2 text-yellow-200">SafeThai - ช่วย Defi ไทยใบนี้ไว้</div>
          </div>

          <div className="flex flex-col md:flex-row justify-center">
            <button
              className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
            >
              <div>ซื้อจาก Pancakeswap</div>
            </button>
          </div>
        </div>
      </div>

      {/* Announcement */}
      <ol className="list-decimal">
        <li></li>
      </ol>

      {/* Roadmap */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto pt-8 md:pt-12">
          <div className="text-center text-3xl text-yellow-200">ถนนสู่ดวงจันทร์</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12">
          <TimelineItem index={0}>
            <div className="mb-8">
              <div className="text-lg mb-1">เปิดพื้นที่ให้ชาวไทยประชาสัมพันธ์ Project และ Community ต่างๆ</div>
              <div className="mb-2">เมษายน 2564</div>
              <div>ในช่วงแรกจะทำการรวบรวมข้อมูลเองก่อน แล้วจึงนำข้อมูลจากผู้ที่กรอกฟอร์มมาแสดงเพิ่ม</div>
            </div>
          </TimelineItem>

          <TimelineItem index={1}>
            <div className="mb-8">
              <div className="text-lg mb-1">Testnet &amp; Community Audits</div>
              <div className="mb-2">สัปดาห์แรก พฤษภาคม 2564</div>
              <div>เปิด Testnet เพื่อให้ Community มาทดสอบ วิจารณ์ Code และเขียน Audit report</div>
            </div>
          </TimelineItem>

          <TimelineItem index={2}>
            <div className="mb-8">
              <div className="text-lg mb-1">เปิดขายผ่านหน้าเว็บ</div>
              <div className="mb-2">สัปดาห์แรก พฤษภาคม 2564</div>
              <div>รอบ 0 และ 1 จำเป็นต้องซื้อผ่านหน้าเว็บ สำหรับรอบอื่นๆสามารถซื้อผ่านหน้าเว็บได้ตลอดถ้าราคาถูกกว่า PancakeSwap</div>
            </div>
          </TimelineItem>

          <TimelineItem index={3}>
            <div className="mb-8">
              <div className="text-lg mb-1">เปิดขายผ่าน PancakeSwap</div>
              <div className="mb-2">เมษายน 2564</div>
              <div>ราคาขึ้นอย่างน้อย 2x จากการขายรอบ 0 แน่นอน!</div>
            </div>
          </TimelineItem>

          <TimelineItem index={4}>
            <div className="mb-8">
              <div className="text-lg mb-1">List บนเว็บไซต์อื่นๆ</div>
              <div className="mb-2">เมษายน - พฤษภาคม 2021</div>
              <div>อย่างเช่น Dex.guru, PooCoin และ Coinmarketcap</div>
            </div>
          </TimelineItem>

          <TimelineItem index={5}>
            <div className="mb-8">
              <div className="text-lg mb-1">ก้าวไกลสู่ระดับโลก</div>
              <div className="mb-2">พฤษภาคม 2021</div>
              <div>นำแนวคิดนี้ไปสร้างเว็บไซต์ระดับโลก โดยสร้างเหรียญใหม่ที่สร้างจากทีม SafeThai แล้วทำการนำ Funding ที่ได้รับส่วนหนึ่งมา Buyback &amp; Burn</div>
            </div>
          </TimelineItem>

          <TimelineItem index={6}>
            <div className="mb-8 text-yellow-200">
              <div className="text-xl mb-1">เป็นแหล่งรวม Community และโปรเจคของคนไทย</div>
              <div className="text-lg mb-2">ตั้งแต่ พฤษภาคม 2021</div>
              <div className="text-lg">ทุกคนต้องนึกถึง SafeThai เมื่ออยากเรียนรู้สิ่งต่างๆในโลก Defi หรือสนับสนุนโปรเจคคนไทย เพราะเป็นเจ้าแรกเจ้าเดียวที่รวมทุกสิ่งทุกอย่างเกี่ยวกับ Defi ไทย และความรู้ต่างๆไม่ว่าจะเป็น ความรู้เบื้องต้น, NFT และอื่นๆ ที่เป็นภาษาไทย และปัจจุบันกระจัดกระจายอยู่ทั่วทุกมุมโลก มาไว้ในเว็บไซต์เดียว โดยจะมีการทำการ Partnership กับ Community และโปรเจคต่างๆทั่วฟ้าเมืองไทย</div>
            </div>
          </TimelineItem>

          <TimelineItem index={7}>
            <div className="mb-8">
              <div className="text-lg mb-1">ขายบน CEX</div>
              <div className="mb-2">ตั้งแต่ พฤษภาคม 2021</div>
              <div>Exchange ไหนยอม List ให้รับรองดังแน่นอน</div>
            </div>
          </TimelineItem>

          <TimelineItem index={8}>
            <div className="mb-8">
              <div className="text-lg mb-1">สนับสนุน Defi ไทย ได้อย่างเต็มกำลัง</div>
              <div className="mb-2">ตั้งแต่ พฤษภาคม 2021</div>
              <div>เมื่อโครงสร้างพื้นฐานครบแล้ว ก็สามารถดึงให้ Project ชาวไทย ที่น่าสนใจ แต่มีทุนไม่มาก ประสบความสำเร็จได้</div>
            </div>
          </TimelineItem>

          <TimelineItem index={9}>
            <div className="mb-8">
              <div className="text-lg mb-2">ก้าวไกลสู่ Chain อื่น</div>
              <div className="mb-2">2022</div>
              <div>ไม่ว่าจะเป็น Chain อื่น หรือ Level 2 ก็ตาม</div>
            </div>
          </TimelineItem>
        </div>
      </div>

      <SafeThaiOfficial></SafeThaiOfficial>
    </div>
  )
}
