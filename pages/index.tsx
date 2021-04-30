import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import AvatarLinkList from '../components/AvatarLinkList';
import SafeThaiOfficial from '../components/SafeThaiOfficial';
import TimelineItem from '../components/TimelineItem'

const PREVIEW_CONTENT = [
  // {
  //   img: "/img/content/pages/newgen.jpg",
  //   title: "Blockchain The New Gen",
  //   href: "https://www.facebook.com/BlockchainNewGen",
  // },
  // {
  //   img: "/img/content/pages/blockchainreview.jpg",
  //   title: "Blockchain Review",
  //   href: "https://www.facebook.com/blockchainreviewth",
  // },
  // {
  //   img: "/img/content/groups/defikanmai.jpg",
  //   title: "defi กันไหมวัยรุ่น",
  //   href: "https://www.facebook.com/groups/899570467532460",
  // },
  // {
  //   img: "/img/content/groups/nft.jpg",
  //   title: "NFT and Crypto Art Thailand",
  //   href: "https://www.facebook.com/groups/1112704465822065",
  // },
];

const SPONSORED_CONTENT = [
  // {
  //   img: "/img/content/pages/newgen.jpg",
  //   title: "Blockchain The New Gen",
  //   href: "https://www.facebook.com/BlockchainNewGen",
  //   description: "เนื่องจากมีการนำเนื้อหาในเพจมาใช้",
  // }
];

export default function Home() {
  const [round1Ended, setRound1Ended] = useState(false);

  return (
    <div className="px-2">
      <Head>
        <title>SafeThai - ช่วย Defi ไทยใบนี้ไว้ - Defi Venture Capital สำหรับคนไทย</title>
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
            {/* <div className="text-2xl text-center mb-2 text-yellow-200">Defi Venture Capital สำหรับคนไทย</div>
            <div className="text-2xl text-center mb-4 text-yellow-200">และเป็นแหล่งรวมคอนเทนต์ต่างๆของคนไทย</div>
            <div className="text-xl text-center mb-1">Buy &amp; HODL SafeThai ตอนนี้</div>
            <div className="text-xl text-center mb-1">SafeThai ลงทุนในโปรเจคใหม่คนไทย</div>
            <div className="text-xl text-center mb-1">โปรเจคเหล่านั้นให้ผลตอบแทนแก่คนที่ HODL</div>
            <div className="text-xl text-center mb-1">ทุกครั้งที่มีการเทรดจะมีเงินกองทุนมากขึ้น</div> */}
          </div>

          {/* <div className="flex flex-col items-center my-5">
            <div className="text-2xl my-3 text-yellow-200">Round 1</div>

            <div className="my-3 text-center text-xl">
              <div>100,000,000 MSafeThai</div>
              <div>25 BNB</div>
              <div>Round 1 ภายในสัปดาห์หน้า เร็วสุดเสาร์นี้</div>
            </div>

            <div className="my-4 text-center">
              <div>ราคาเพิ่มขึ้น 2 เท่า ทุกรอบ (ไม่ใช่การการันตีผลตอนแทน)</div>
              <div>มีตั้งแต่ Round 0 ถึง 5 เท่านั้น</div>
              <div>เมื่อซื้อระบบจะ Provide Liquidity อัตโนมัติ</div>
              <div>สามารถเทรดได้ใน PancakeSwap หลัง Round 1 จบ</div>
            </div>
          </div> */}

          <div className="flex flex-col items-center my-5">
            <div className="text-3xl my-3 text-yellow-200">ประกาศ</div>

            <div className="my-3 text-center text-xl">
              <div>ผู้ที่ถูก SafeThai พูดถึงทุกคนไม่มีส่วนเกี่ยวข้องกับการพัฒนา SafeThai ใดๆทั้งสิ้น</div>
              <div>ทาง SafeThai ต้องขออภัยมา ณ ที่นี้ด้วย</div>
              <div>และจะมีการปรับปรุงทิศทางของพัฒนาเพื่อไม่ให้เกิดเหตุการณ์เช่นนี้อีก</div>
            </div>

            <div className="my-4 text-center">
              <a className="underline" href="https://www.facebook.com/SafeThaiFinance/posts/109012454671790">อ่านแถลงการณ์ฉบับเป็นทางการ</a>
            </div>

            {/* <div className="my-4 text-center">
              <div>ราคาเพิ่มขึ้น 2 เท่า ทุกรอบ (ไม่ใช่การการันตีผลตอนแทน)</div>
              <div>มีตั้งแต่ Round 0 ถึง 5 เท่านั้น</div>
              <div>เมื่อซื้อระบบจะ Provide Liquidity อัตโนมัติ</div>
              <div>สามารถเทรดได้ใน PancakeSwap หลัง Round 1 จบ</div>
            </div> */}
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
            {/* <Link href="/round0"> */}
              <button
                className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
              >
                <div>Round 0 ขายหมดแล้ว</div>
              </button>
            {/* </Link> */}

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

      {/* What is SafeThai */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto pt-8 md:pt-12">
          <div className="text-center text-3xl text-yellow-200">SafeThai ทำอะไร</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12 px-2 text-center">
          <p className="mb-3">SafeThai เป็นผู้พัฒนา Community Aggregator ซึ่งคือ Platform ที่ทำการควบรวมเนื้อหาจากหลากหลาย Community มาไว้ในที่เดียว เพื่อให้ผู้เล่นรายใหม่ที่เข้ามาในโลกของ Defi ไทย สามารถหาความรู้ได้ง่าย และรู้สึกปลอดภัยในการลงทุนในโลก Defi</p>
          <p className="mb-3">นอกจากนั้น SafeThai ยังทำการจัดตั้งกองทุนเพื่อลงทุนในโปรเจคคนไทยที่มี Idea ดีแต่ไม่มีเงินทุนอีกด้วย เพื่อพัฒนาโลก Defi ไทยให้แข็งแกร่งยิ่งขึ้น</p>
          <p className="mb-3">โดยมีสิ่งที่ทำไปแล้ว 10% ก็คือ <a className="underline" href="https://www.safethai.finance/content/community" target="blank">หน้ารวมแหล่งความรู้สำหรับ Defi ไทย</a></p>
        </div>
      </div>

      <SafeThaiOfficial></SafeThaiOfficial>

      {/* Knowledge */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto pt-8 md:pt-12">
          <div className="text-center text-3xl mb-4 text-yellow-200">แหล่งความรู้สำหรับ Defi ไทย</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12 px-2">
          <AvatarLinkList items={PREVIEW_CONTENT}></AvatarLinkList>

          <div className="flex flex-row justify-center mt-8">
            <Link href="/content/community">
              <button
                className="bg-white hover:bg-gray-100 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-lg md:text-xl"
              >
                <div>ดูเพิ่มเติม...</div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Sponsored Project */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto pt-8 md:pt-12">
          <div className="text-center text-3xl mb-4 text-yellow-200">โปรเจค/ผู้คนที่ได้รับการสนับสนุนเงินทุน</div>
          <div className="text-center mb-2">* ไม่มีส่วนเกี่ยวข้องในการพัฒนา SafeThai</div>
          {/* <div className="text-center">* เน้นเฉพาะโปรเจคที่มีอนาคต / Dev ฝีมือดี แต่ไม่ค่อยมีเงิน</div> */}
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12">
          <AvatarLinkList items={SPONSORED_CONTENT} center={true}></AvatarLinkList>

          <div className="flex flex-col md:flex-row justify-center mt-8">
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

      {/* Business Model */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto pt-8 md:pt-12">
          <div className="text-center text-3xl text-yellow-200">Business Model</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12">
          <ul className="list-disc">
            <li>บางโปรเจคที่ได้รับการสนับสนุนเงินทุน จะรองรับการใช้จ่ายด้วย SafeThai</li>
            <li>บางโปรเจคที่ได้รับการสนับสนุนเงินทุน จะช่วยนำกำไรมา Buyback and Burn SafeThai</li>
            <li>ในอนาคตอาจมี Premium subscription โดยจะเป็นในลักษณะของการ Hold เหรียญ หรือการจ่ายรายเดือน แล้วแต่ลักษณะของ Feature นั้นๆ</li>
            <li>รายได้จากค่าโฆษณา</li>
          </ul>
        </div>
      </div>

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
              <div>เป็นไปตามกลไกตลาด</div>
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

      {/* Tokenomics */}
      <div className="bg-gray-800 text-white" id="products">
        <div className="container mx-auto pt-8 md:pt-12 mt-8 md:mt-12">
          <div className="text-center text-3xl text-yellow-200">ทุกการทำธุรกรรม</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12">
          <div className="flex justify-around flex-col md:flex-row">
            <div className="my-4 text-center">
              <div className="text-3xl mb-3">Liquidity</div>
              <div className="text-xl">4%</div>
            </div>

            <div className="my-4 text-center">
              <div className="text-3xl mb-3">Reflection</div>
              <div className="text-xl">2%</div>
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
              <div className="text-3xl mb-3">Burn SafeThai</div>
              <div className="text-xl">1%</div>
            </div>
          </div>
        </div>

        {/* <div className="text-center my-4 text-white">
          <div className="text-xl mb-3">เฉพาะส่วนของ BNB เท่านั้น</div>
          <div className="text-xl">ส่วนของ SafeThai จะถูกเผาทำลายทิ้ง</div>
        </div> */}
      </div>

      <div className="bg-gray-800 text-white" id="products">
        <div className="container mx-auto pt-16 md:pt-24">
          <div className="text-center text-3xl text-yellow-200">การกระจายเหรียญ</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12">
          <div className="flex justify-around flex-col md:flex-row my-4">
            <div className="my-4 text-center">
              <div className="text-3xl mb-3">100,000,000M</div>
              <div className="text-xl">ทยอยขายในแต่ละรอบ</div>
            </div>

            <div className="my-4 text-center">
              <div className="text-3xl mb-3">เพิ่ม 2 เท่า/รอบ</div>
              <div className="text-xl">ราคาเหรียญ (ไม่ใช่การรับประกันกำไร)</div>
            </div>

            <div className="my-4 text-center">
              <div className="text-3xl mb-3">&lt; 40,000,000M</div>
              <div className="text-xl">Airdrop</div>
            </div>
          </div>

          <div className="text-center my-4 mb-8">
            <div className="text-lg mb-2">Round 0 ขายแค่ 4,000,000M = 10 BNB</div>
            <div className="text-lg mb-2">เฉพาะ Round 0 นำไปใช้ 50% LP, 50% Dev</div>
          </div>

          <div className="text-center my-4 mb-8">
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
          <div className="text-center text-3xl text-yellow-200">เงินที่ได้จากการขายไปไหน</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12">
          <div className="flex justify-around flex-col md:flex-row my-4">
            <div className="my-4 text-center">
              <div className="text-3xl mb-3">50%</div>
              <div className="text-xl mb-2">Provide liquidity</div>
              <div className="text-xl mb-2">และ Burn ทิ้งทันที</div>
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

      <div className="bg-gray-800 text-white" id="products">
        <div className="container mx-auto pt-12 md:pt-16">
          <div className="text-center text-3xl text-yellow-200">ใครเป็นคนสร้าง</div>
        </div>
      </div>

      <div className="text-center my-4 text-white">
        <div className="text-lg mb-2">สามารถส่งข้อความมาถามที่</div>
        <div className="text-lg mb-2"><a className="underline" href="https://www.facebook.com/SafeThaiFinance" target="_blank">Inbox ของเพจ SafeThai - ช่วย Defi ไทยใบนี้ไว้</a></div>
        <div className="text-lg mb-4">ก่อนเปิดขาย Round 1</div>
        <div className="text-lg mb-4">นอกจากนั้นถ้าหาก Dev ว่างจะมานั่งคุยใน <a className="underline" href="https://discord.gg/3nzFyJq6gd" target="_blank">Voice channel ใน Discord</a> ด้วย</div>
      </div>

      <div className="bg-gray-800 text-white" id="products">
        <div className="container mx-auto pt-12 md:pt-16">
          <div className="text-center text-3xl text-yellow-200">Scam ไหม</div>
        </div>
      </div>

      <div className="text-center my-4 text-white">
        <div className="text-lg mb-2">ไม่ Scam แน่นอนเพราะมีคนรู้หน้าของคนสร้าง</div>
        <div className="text-xl mb-2">ไม่งั้นบ้านโดนระเบิดแน่</div>
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
