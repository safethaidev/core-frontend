import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import TimelineItem from '../components/TimelineItem'

export default function Home() {
  const [round1Ended, setRound1Ended] = useState(false);

  return (
    <div className="px-2">
      <Head>
        <title>SafeThai - Defi ไทยก้าวไกลสู่ระดับโลก - สร้างขึ้นจากความร่วมมือของ Dev และชุมชนชาวไทย</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Introduction block */}
      <div className="bg-gray-800">
        <div className="container mx-auto my-24 p-4 text-white">
          <div className="mb-4">
            <div className="flex justify-center mb-4">
              <img src="/square-dice.png" style={{
                maxWidth: 240
              }}></img>
            </div>

            <div className="text-4xl text-center mb-3">SafeThai - Defi ไทยก้าวไกลสู่ระดับโลก</div>
            <div className="text-xl text-center mb-1">ทุกการสนับสนุนต่อ SafeThai</div>
            <div className="text-xl text-center mb-4">จะถูกแบ่งปันให้ผู้ขับเคลื่อน Defi ไทย</div>
            <div className="text-xl text-center">ซื้อได้ไม่กี่วันหลังจาก PancakeV2 เสร็จ ที่เว็บไซต์นี้</div>
          </div>

          <div className="flex flex-col items-center my-5">
            <div className="text-2xl my-3">Round 0</div>

            <div className="my-3 text-center text-xl">
              <div>1,000,000 MSafeThai</div>
              <div>25 BNB</div>
              <div>ได้เหรียญภายในหนึ่งวันหลังจากเปิด Round 1</div>
            </div>

            <div className="my-4 text-center">
              <div>ราคาเพิ่มขึ้น 2 เท่า ทุกรอบ</div>
              <div>เมื่อซื้อระบบจะ Provide Liquidity อัตโนมัติ</div>
              <div>สามารถเทรดได้ใน PancakeSwap หลัง Round 1 จบ</div>
            </div>
          </div>

          {/* <div className="flex flex-col items-center my-5">
            <div className="text-2xl my-3">Round 1</div>

            <div className="my-3 text-center text-xl">
              <div>10,000,000 MSafeThai</div>
              <div>500 BNB</div>
            </div>

            <div className="my-4 text-center">
              <div>ราคาเพิ่มขึ้น 2 เท่า ทุกรอบ</div>
              <div>เมื่อซื้อระบบจะ Provide Liquidity อัตโนมัติ</div>
              <div>สามารถเทรดได้ใน PancakeSwap หลัง Round 1 จบ</div>
            </div>
          </div> */}

          <div className="flex flex-col md:flex-row justify-center">
            <Link href="/round0">
              <button
                className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl"
              >
                <div>ซื้อ Round 0</div>
              </button>
            </Link>

            {round1Ended ?
              <button
                className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl"
              >
                <div>ซื้อจาก Pancakeswap</div>
              </button>
            :
              <button
                className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl"
              >
                <div>ล่า Airdrop</div>
              </button>
            }
          </div>
        </div>
      </div>

      {/* Sponsored Project */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto pt-8 md:pt-12">
          <div className="text-center text-3xl mb-4">โปรเจค/ผู้คนที่ได้รับการสนับสนุนเงินทุน</div>
          <div className="text-center mb-2">* ไม่มีส่วนเกี่ยวข้องในการพัฒนา SafeThai</div>
          <div className="text-center">* เน้นเฉพาะโปรเจคที่มีอนาคต / Dev ฝีมือดี แต่ไม่ค่อยมีเงิน</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12">
          

          <div className="flex flex-col md:flex-row justify-center">
            <button
              className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl"
            >
              <div>ขอรับการสนับสนุน</div>
            </button>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto pt-8 md:pt-12">
          <div className="text-center text-3xl">ถนนสู่ดวงจันทร์</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12">
          <TimelineItem index={0}>
            <div className="mb-8">
              <div className="text-lg mb-1">เปิดพื้นที่ให้ชาวไทยประชาสัมพันธ์ Project และ Community ต่างๆ</div>
              <div className="mb-2">23 เมษายน 2564</div>
              <div>โดยผู้ที่ Submit ก่อนจะได้การมองเห็นที่ดีกว่า</div>
            </div>
          </TimelineItem>

          <TimelineItem index={1}>
            <div className="mb-8">
              <div className="text-lg mb-1">เปิดขายผ่านหน้าเว็บ</div>
              <div className="mb-2">25 เมษายน 2564</div>
              <div>รอบ 1 จำเป็นต้องซื้อผ่านหน้าเว็บ สำหรับรอบอื่นๆสามารถซื้อผ่านหน้าเว็บได้ตลอดถ้าราคาถูกกว่า PancakeSwap</div>
            </div>
          </TimelineItem>

          <TimelineItem index={2}>
            <div className="mb-8">
              <div className="text-lg mb-1">เปิดขายผ่าน PancakeSwap</div>
              <div className="mb-2">25 เมษายน 2564</div>
              <div>ปุ่ม Airdrop จะเปลี่ยนเป็นปุ่มกดไปหน้าซื้อขายอัตโนมัติหลังจากจบการขายรอบที่ 1</div>
            </div>
          </TimelineItem>

          <TimelineItem index={3}>
            <div className="mb-8">
              <div className="text-lg mb-1">List บนเว็บไซต์อื่นๆ</div>
              <div className="mb-2">เมษายน 2021</div>
              <div>อย่างเช่น Dex.guru, PooCoin และ Coinmarketcap</div>
            </div>
          </TimelineItem>

          <TimelineItem index={4}>
            <div className="mb-8">
              <div className="text-lg mb-1">ก้าวไกลสู่ระดับโลก</div>
              <div className="mb-2">พฤษภาคม 2021</div>
              <div>นำแนวคิดนี้ไปสร้างเว็บไซต์ระดับโลก โดยสร้างเหรียญใหม่ที่สร้างจากทีม SafeThai แล้วทำการนำ Funding ที่ได้รับส่วนหนึ่งมา Buyback &amp; Burn และ การันตีราคาขั้นต่ำของ SafeThai ต่อ</div>
            </div>
          </TimelineItem>

          <TimelineItem index={5}>
            <div className="mb-8">
              <div className="text-lg mb-1">ขายบน CEX</div>
              <div className="mb-2">พฤษภาคม 2021</div>
              <div>Exchange ไหนยอม List ให้รับรองดังแน่นอน</div>
            </div>
          </TimelineItem>

          <TimelineItem index={6}>
            <div className="mb-8">
              <div className="text-lg mb-1">สนับสนุน Defi ไทย ได้อย่างเต็มกำลัง</div>
              <div className="mb-2">พฤษภาคม 2021</div>
              <div>เมื่อโครงสร้างพื้นฐานครบแล้ว ก็สามารถดึงให้ Project ชาวไทย ที่น่าสนใจ แต่มีทุนไม่มาก ประสบความสำเร็จได้</div>
            </div>
          </TimelineItem>

          <TimelineItem index={7}>
            <div className="mb-8">
              <div className="text-lg mb-2">ก้าวไกลสู่ Chain อื่น</div>
              <div className="mb-2">2022</div>
              <div>ไม่ว่าจะเป็น Chain อื่น หรือ Level 2 ก็ตาม</div>
            </div>
          </TimelineItem>
        </div>
      </div>

      {/* Tokenomics */}
      <div className="bg-gray-800 text-white" id="products">
        <div className="container mx-auto pt-8 md:pt-12 mt-8 md:mt-12">
          <div className="text-center text-3xl">Tokenomics</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12">
          <div className="flex justify-around flex-col md:flex-row">
            <div className="my-4 text-center">
              <div className="text-3xl mb-3">พัฒนามาจาก</div>
              <div className="text-xl">SafeMoon</div>
            </div>

            <div className="my-4 text-center">
              <div className="text-3xl mb-3">Liquidity</div>
              <div className="text-xl">5%</div>
            </div>

            <div className="my-4 text-center">
              <div className="text-3xl mb-3">Reflection</div>
              <div className="text-xl">5%</div>
            </div>
          </div>

          <div className="flex justify-around flex-col md:flex-row my-4">
            <div className="my-4 text-center">
              <div className="text-3xl mb-3">10,000,000M</div>
              <div className="text-xl">ต่อรอบการขาย</div>
            </div>

            <div className="my-4 text-center">
              <div className="text-3xl mb-3">ในอนาคต</div>
              <div className="text-xl">เหรียญใช้งานอย่างอื่นได้</div>
            </div>

            <div className="my-4 text-center">
              <div className="text-3xl mb-3">2,000,000M</div>
              <div className="text-xl">Airdrop</div>
            </div>
          </div>

          <div className="text-center my-4">
            <div className="text-lg mb-2">Round 0 ขายแค่ 1,000,000M = 25 BNB</div>
            <div className="text-lg mb-2">ในอนาคตเหรียญจะสามารถใช้ซื้อผลิตภัณฑ์ต่างๆ</div>
            <div className="text-lg mb-2">ที่ได้รับการสนับสนุนจาก SafeThai ได้</div>
            <div className="text-lg mb-2">และผลิตภัณฑ์เหล่านั้น จะร่วมกันสร้างกำแพงราคาขั้นต่ำ</div>
            <div className="text-lg">เพื่อแสดงให้เห็นว่า SafeThai ไม่ใช่เหรียญขยะ</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white" id="products">
        <div className="container mx-auto pt-8 md:pt-12">
          <div className="text-center text-3xl">เงินที่ได้จากการขายไปไหน</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12">
          <div className="flex justify-around flex-col md:flex-row my-4">
            <div className="my-4 text-center">
              <div className="text-3xl mb-3">50%</div>
              <div className="text-xl mb-2">Provide liquidity</div>
              <div className="text-xl mb-2">และ Lock ไว้ 4 เดือน</div>
            </div>

            <div className="my-4 text-center">
              <div className="text-3xl mb-3">30%</div>
              <div className="text-xl mb-2">เป็นทุนให้โปรเจคชาวไทย</div>
              <div className="text-xl mb-2">และจ่ายค่าใช้จ่ายต่างๆ</div>
            </div>

            <div className="my-4 text-center">
              <div className="text-3xl mb-3">20%</div>
              <div className="text-xl">ค่าจ้าง</div>
              <div className="text-xl">ทีมผู้พัฒนา</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white" id="products">
        <div className="container mx-auto pt-8 md:pt-12">
          <div className="text-center text-3xl">Liquidity ที่ได้มาเอาไปทำอะไร</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12">
          <div className="flex justify-around flex-col md:flex-row my-4">
            <div className="my-4 text-center">
              <div className="text-3xl mb-3">50%</div>
              <div className="text-xl mb-2">นำไป Lock ไว้ 4 เดือน</div>
            </div>

            <div className="my-4 text-center">
              <div className="text-3xl mb-3">30%</div>
              <div className="text-xl mb-2">เป็นทุนให้โปรเจคชาวไทย</div>
              <div className="text-xl mb-2">และจ่ายค่าใช้จ่ายต่างๆ</div>
            </div>

            <div className="my-4 text-center">
              <div className="text-3xl mb-3">20%</div>
              <div className="text-xl">ค่าจ้าง</div>
              <div className="text-xl">ทีมผู้พัฒนา</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-4 text-white">
        <div className="text-xl mb-3">เฉพาะส่วนของ BNB เท่านั้น</div>
        <div className="text-xl">ส่วนของ SafeThai จะถูกเผาทำลายทิ้ง</div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12 text-center text-lg">
          <button 
            className="bg-white hover:bg-gray-100 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-lg md:text-xl"
          >
            <div>ล่า Airdrop แล้วเข้าร่วมกลุ่มเลย</div>
          </button>
        </div>
      </div>
    </div>
  )
}
