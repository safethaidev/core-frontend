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
        <div className="container mx-auto my-12 p-4 text-white">
          <div className="mb-4">
            <div className="flex justify-center mb-12">
              <img src="/safethai.png" style={{
                maxWidth: 240
              }}></img>
            </div>

            <div className="text-4xl text-center mb-2">SafeThai - ช่วย Defi ไทยใบนี้ไว้</div>
            <div className="text-2xl text-center mb-4">Defi Venture Capital สำหรับคนไทย</div>
            <div className="text-xl text-center mb-1">Buy &amp; HODL SafeThai ตอนนี้</div>
            <div className="text-xl text-center mb-1">SafeThai ลงทุนในโปรเจคใหม่คนไทย</div>
            <div className="text-xl text-center mb-1">โปรเจคเหล่านั้นให้ผลตอบแทนแก่คนที่ HODL</div>
            <div className="text-xl text-center mb-1">ทุกครั้งที่มีการเทรดจะมีเงินกองทุนมากขึ้น</div>
          </div>

          <div className="flex flex-col items-center my-5">
            <div className="text-2xl my-3">Round 0</div>

            <div className="my-3 text-center text-xl">
              <div>4,000,000 MSafeThai</div>
              <div>10 BNB</div>
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
                className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
              >
                <div>ซื้อ Round 0</div>
              </button>
            </Link>

            {round1Ended ?
              <button
                className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
              >
                <div>ซื้อจาก Pancakeswap</div>
              </button>
            :
              <Link href="/airdrop">
                <button
                  className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
                >
                  <div>ล่า Airdrop</div>
                </button>
              </Link>
            }
          </div>
        </div>
      </div>

      {/* Knowledge */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto pt-8 md:pt-12">
          <div className="text-center text-3xl mb-4">แหล่งความรู้เกี่ยวกับ Defi</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12">

        </div>
      </div>

      {/* Sponsored Project */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto pt-8 md:pt-12">
          <div className="text-center text-3xl mb-4">โปรเจค/ผู้คนที่ได้รับการสนับสนุนเงินทุน</div>
          <div className="text-center mb-2">* ไม่มีส่วนเกี่ยวข้องในการพัฒนา SafeThai</div>
          {/* <div className="text-center">* เน้นเฉพาะโปรเจคที่มีอนาคต / Dev ฝีมือดี แต่ไม่ค่อยมีเงิน</div> */}
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12">
          

          <div className="flex flex-col md:flex-row justify-center">
            <a
              className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
              href="https://forms.gle/Bsg8xdYTC5fdi8br9"
              target="_blank"
            >
              <div>ขอรับการสนับสนุน</div>
            </a>
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
              <div className="mb-2">เมษายน 2564</div>
              <div>โดยผู้ที่ Submit ก่อนจะได้การมองเห็นที่ดีกว่า</div>
            </div>
          </TimelineItem>

          <TimelineItem index={1}>
            <div className="mb-8">
              <div className="text-lg mb-1">เปิดขายผ่านหน้าเว็บ</div>
              <div className="mb-2">เมษายน 2564</div>
              <div>รอบ 0 และ 1 จำเป็นต้องซื้อผ่านหน้าเว็บ สำหรับรอบอื่นๆสามารถซื้อผ่านหน้าเว็บได้ตลอดถ้าราคาถูกกว่า PancakeSwap</div>
            </div>
          </TimelineItem>

          <TimelineItem index={2}>
            <div className="mb-8">
              <div className="text-lg mb-1">เปิดขายผ่าน PancakeSwap</div>
              <div className="mb-2">เมษายน 2564</div>
              <div>ราคาขึ้นอย่างน้อย 4x จากการขายรอบ 0 แน่นอน!</div>
            </div>
          </TimelineItem>

          <TimelineItem index={3}>
            <div className="mb-8">
              <div className="text-lg mb-1">List บนเว็บไซต์อื่นๆ</div>
              <div className="mb-2">พฤษภาคม 2021</div>
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
              <div className="mb-2">ตั้งแต่ พฤษภาคม 2021</div>
              <div>Exchange ไหนยอม List ให้รับรองดังแน่นอน</div>
            </div>
          </TimelineItem>

          <TimelineItem index={6}>
            <div className="mb-8">
              <div className="text-lg mb-1">สนับสนุน Defi ไทย ได้อย่างเต็มกำลัง</div>
              <div className="mb-2">ตั้งแต่ พฤษภาคม 2021</div>
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
          <div className="text-center text-3xl">ทุกการทำธุรกรรม</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12">
          <div className="flex justify-around flex-col md:flex-row">
            <div className="my-4 text-center">
              <div className="text-3xl mb-3">Liquidity</div>
              <div className="text-xl">5%</div>
            </div>

            <div className="my-4 text-center">
              <div className="text-3xl mb-3">Reflection</div>
              <div className="text-xl">1%</div>
            </div>

            <div className="my-4 text-center">
              <div className="text-3xl mb-3">เงินกองทุน</div>
              <div className="text-xl">2%</div>
            </div>
          </div>

          <div className="flex justify-around flex-col md:flex-row">
            <div className="my-4 text-center">
              <div className="text-3xl mb-3">พัฒนาและจัดจ้าง</div>
              <div className="text-xl">1%</div>
            </div>

            <div className="my-4 text-center">
              <div className="text-3xl mb-3">Buyback &amp; Burn</div>
              <div className="text-xl">1%</div>
            </div>
          </div>
        </div>

        <div className="text-center my-4 text-white">
          <div className="text-xl mb-3">เฉพาะส่วนของ BNB เท่านั้น</div>
          <div className="text-xl">ส่วนของ SafeThai จะถูกเผาทำลายทิ้ง</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white" id="products">
        <div className="container mx-auto pt-8 md:pt-12">
          <div className="text-center text-3xl">การกระจายเหรียญ</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12">
          <div className="flex justify-around flex-col md:flex-row my-4">
            <div className="my-4 text-center">
              <div className="text-3xl mb-3">10,000,000M</div>
              <div className="text-xl">ทยอยขายในแต่ละรอบ</div>
            </div>

            <div className="my-4 text-center">
              <div className="text-3xl mb-3">เพิ่ม 2 เท่า/รอบ</div>
              <div className="text-xl">ราคาเหรียญ</div>
            </div>

            <div className="my-4 text-center">
              <div className="text-3xl mb-3">1,000,000M</div>
              <div className="text-xl">Airdrop</div>
            </div>
          </div>

          <div className="text-center my-4 mb-8">
            <div className="text-lg mb-2">Round 0 ขายแค่ 2,000,000M = 10 BNB</div>
            <div className="text-lg mb-2">ไม่มี Dev Token ปลอดภัยต่อการ Rug Pull</div>
            <div className="text-lg mb-2">ทุกเหรียญจะถูก Lock ไว้ใน Contract พิเศษ</div>
          </div>

          <div className="text-center my-4">
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

      <div className="text-center my-4 text-white">
        <div className="text-xl mb-3">เฉพาะส่วนของ BNB เท่านั้น</div>
        <div className="text-xl">ส่วนของ SafeThai จะถูกเผาทำลายทิ้ง</div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12 text-center text-lg">
          <Link href="/airdrop">
            <button
              className="bg-white hover:bg-gray-100 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-lg md:text-xl"
            >
              <div>ล่า Airdrop แล้วเข้าร่วมกลุ่มเลย</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
