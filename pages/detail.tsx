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
    <div className="md:px-8">
      <Head>
        <title>SafeThai - รายละเอียด</title>
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

            <div className="text-4xl text-center mb-2 text-yellow-200">SafeThai - Defi ไทยต้องก้าวไกลระดับโลก</div>
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
        <div className="my-3">ทางทีมผู้สร้างมีความตั้งใจจริง ที่จะทำให้เกิด Platform ที่รวบรวมข่าวสาร และเนื้อหาสาระต่างๆมาไว้ในที่เดียว โดยเริ่มต้นที่เรื่อง Cryptocurrency แต่ในอนาคตจะไม่ได้จำกัดเฉพาะเรื่อง Cryptocurrency ซึ่งเกิดจาก Pain point ของผู้สร้างเอง กล่าวคือในปัจจุบันในโลก Defi มีข่าวสารมากมายกระจายอยู่ในหลายที่ โดยข่าวหรือเนื้อหาสาระไหนที่เป็นของใหม่ จะมีการประกาศข่าวอยู่เพียงแค่ไม่กี่ที่ เมื่อเรื่องนั้นได้รับความสนใจมากขึ้น จึงค่อยมีผู้ที่ประกาศเรื่องนั้นมากขึ้น หลังจากนั้นจึงส่งผลให้เรื่องเหล่านั้นถูกผลักดันขึ้นมาใน Social media ดังนั้นเป็นเรื่องที่ยากมากที่จะทราบข่าวหรือเนื้อหาสาระใหม่ๆได้ โดยอาศัยแค่การรออ่านข่าวที่เด้งขึ้นมาใน Social media และถ้าใช้วิธีการไล่อ่านข่าวทุกสำนัก ก็จะใช้เวลามาก</div>

        {/* <div className="my-3">ด้วยเหตุนี้ผู้พัฒนาจึงพยายามคิดหาวิธีการแก้ปัญหาดังกล่าว แต่ก็ต้องพบเจอกับปัญหาทางด้านเงินทุน และด้านการตลาด จึงเกิดความคิดที่อยากจะช่วยให้ผู้ที่มีความสามารถ มีไอเดีย มีแรงผลักดัน สามารถทำให้ไอเดียเหล่านั้นเกิดขึ้นจริงได้จากการที่มีผู้สนับสนุนแหล่งเงินทุน สนับสนุนทางด้านการตลาด และอื่นๆ</div> */}

        <div className="my-3">หากทว่าก่อนหน้านี้ทางผู้พัฒนาพบว่าได้มีความเข้าใจที่คลาดเคลื่อนในตัวโครงการนี้กับบุคคลภายนอกดังนั้นเพื่อให้ทุกคนเข้าใจข้อมูลที่ครบถ้วน ทางเราได้ทำการรวบรวมข้อมูลที่เกี่ยวข้องกับโครงการนี้ดังต่อไปนี้</div>
      </div>

      <div className="mt-4 mb-4 text-white">ข้อที่คุณควรรู้ก่อนตัดสินใจ</div>
      
      <ol className="list-decimal text-white pl-8">
        <li>ขณะนี้ทางเราได้รับการสนับสนุนถึงเป้าหมายที่ได้ตั้งไว้ในตอนต้น จากผู้สนับสนุน 103 กระเป๋า เป็นจำนวน 13.333 BNB</li>
        <li>เราได้ทำการพัฒนาในส่วนของ Smart contract และได้นำขึ้น testnet แล้วโดยทุกคนสามารถเข้าร่วมการทดสอบได้โดยสมัครใจ มิได้บังคับให้เข้าร่วมการทดสอบ ผู้เข้าร่วมการทดสอบจำเป็นต้องมีความรู้ความชำนาญในการใช้ testnet ของ binance smart chain ในระดับที่ดี ทั้งนี้ทางทีมผู้พัฒนาจะไม่รับผิดชอบต่อความเสียหายที่เกิดขึ้นจากการเข้าร่วมการทดสอบ testnet สำหรับผู้ที่เข้าใจในข้อตกลงและความเสี่ยงของการทดสอบใน testnet แล้วสามารถเข้าร่วมการทดสอบการซื้อขายเหรียญ SafeThai ได้ที่ <a className="underline" href="https://pancakeswap-bsc-testnet.chom.finance/#/swap?outputCurrency=0x99156Ee81c2eAC49Df9d120f24b7823a848324A1" target="blank">https://pancakeswap-bsc-testnet.chom.finance/#/swap?outputCurrency=0x99156Ee81c2eAC49Df9d120f24b7823a848324A1</a></li>
        <li>สิ่งที่จะทำต่อไปคือทางทีมผู้สร้างจะทำการปรับปรุง Branding เพื่อรักษาผลประโยชน์ของผู้ลงทุน ไม่ต้องมาแบกรับความเสี่ยงที่ไม่สามารถคาดการณ์ได้ในอนาคต โดยจะมีการวางแผนโครงสร้างต่างๆใหม่ รวมถึง Tokenomic และ Roadmap โดยที่ยังคงแนวคิดในเรื่องการเป็น Platform ที่รวบรวมข่าวสาร และเนื้อหาสาระต่างๆมาไว้ในที่เดียวเอาไว้อยู่ รวมถึงจะมีการเพิ่มเติมส่วนประกอบอื่นๆเข้ามาเพื่อให้ครอบคลุมมากยิ่งขึ้น โดยรายละเอียดในการปรับปรุง Branding จะมีการประกาศเพิ่มเติมในภายหลัง</li>
        {/* <li>จะมีการเปิดขาย Preorder NFT เป็นรอบๆ ในแต่ละรอบจะมี NFT เป็นจำนวนจำกัด โดยที่ NFT ในรอบที่ 1 ถึง 5 จะมีมูลค่ารวม 25 BNB, 50 BNB, 100 BNB, 200 BNB และ 400 BNB ตามลำดับ และทุกๆการซื้อ จะแบ่งรายได้ 20% ไปทำการ Buyback แล้วทำการ Burn เหรียญ SafeThai และ 80% เป็นทุนในการพัฒนาโปรเจคต่อไป เมื่อโปรเจคทำการพัฒนาเสร็จ ผู้ที่ซื้อ NFT จะได้รับการ Airdrop เหรียญของ Platform ที่ได้รับการ Rebrand รวมรอบละ 100,000,000 หน่วย โดยจะทำการทยอยปล่อยเริ่มตั้งแต่เมื่อพัฒนาเสร็จสิ้นจนถึง 3 เดือนหลังจากพัฒนาเสร็จสิ้น</li> */}
        {/* <li>NFT ที่ได้ทำการ Preorder ไว้จะถูกแจกจ่ายให้กับท่านที่ซื้อ หลังจาก Binance NFT เปิดตัว ผ่านทางช่องทาง Binance NFT ทั้งนี้ Binance ไม่ได้มีส่วนรู้เห็นกับการพัฒนา SafeThai ใดๆ ทั้งสิ้น</li> */}
        <li>มูลค่าของเหรียญที่ปล่อยออกมา จะเป็นไปตามกลไกของระบบ AMM (Automated market maker) ซึ่งอยู่นอกเหนือขอบเขตอำนาจการควบคุมของผู้พัฒนา ซึ่งหมายความว่าทีมพู้พัฒนาไม่สามารถควบคุม และไม่สามารถการันตีผลกำไร และทีมผู้พัฒนาไม่จำเป็นต้องชดใช้เมื่อมีการขาดทุนเกิดขึ้น</li>
        <li>ในกรณีที่โปรเจคไม่ประสบความสำเร็จ มูลค่าของเหรียญ ก็จะยังคงเป็นไปตามกลไกของระบบ AMM (Automated market maker) ซึ่งอยู่นอกเหนือขอบเขตอำนาจการควบคุมของผู้พัฒนาเช่นเดิม แต่จะมีความเสี่ยงที่ผู้ถือเหรียญจะขาดทุนสูง โดยผู้ถือเหรียญ ได้รับทราบในความเสี่ยงนี้เป็นอย่างดี และรับทราบว่าผู้ถือเหรียญจะต้องรับผิดชอบต่อผลกำไรหรือขาดทุนทั้งหมด และจะไม่เรียกร้องให้ทีมผู้พัฒนาชดใช้เมื่อมีการขาดทุนเกิดขึ้น</li>
        {/* <li>ทุกๆการโอนเหรียญหรือการซื้อขาย SafeThai จะต้องเสียค่าธรรมเนียม 10% ของจำนวนเหรียญที่ทำธุรกรรม โดยจะนำมาใช้ในการ Provide liquidity ใน PancakeSwap V2 4%, การให้รางวัลแก่ผู้ถือเหรียญ SafeThai 2%, ใช้เป็นทุนในการพัฒนาระบบ 2% และทำการ Burn เหรียญ SafeThai 2%</li> */}
        {/* <li>เหรียญ SafeThai ถูกสร้างขึ้นมาเพื่อใช้ในการสนับสนุนผู้ที่มีส่วนร่วมในการช่วยให้ Platform SafeThai ประสบความสำเร็จ ไม่ว่าจะเป็นผู้ที่ให้การสนับสนุนในช่วงเริ่มต้น, ผู้ที่ซื้อ NFT, ผู้ที่ลงทุนถือเหรียญ SafeThai, โปรเจค Defi ของคนไทย, ผู้ผลิตเนื้อหา, ผู้ช่วยรวบรวมและจัดเรียงเนื้อหา และผู้พัฒนาระบบ โดยรูปแบบในการสนับสนุนนั้น ไม่ได้จำกัดเฉพาะการให้หรือกระจายเหรียญ SafeThai เท่านั้น แต่ยังรวมถึงการสนับสนุนด้วย BNB, SafeThai-BNB LP และอื่นๆ อีกด้วย</li> */}
        {/* <li>สำหรับผู้ที่ได้เข้าร่วมกิจกรรม Airdrop ซึ่ง ณ ปัจจุบันได้ปิดกิจกรรมดังกล่าวไปแล้ว จะได้รับเหรียญของ Platform ที่ได้รับการ Rebrand แล้ว ตามจำนวนที่สมควรได้รับ (Task Facebook 300 ล้านหน่วย, Task Discord 300 ล้านหน่วย และ Task Twitter 300 ล้าหน่วย) โดยจะได้รับเหรียญเมื่อโปรเจคได้ทำการพัฒนาเสร็จสิ้นแล้ว</li> */}
        {/* <li>SafeThai จะมีการ Rebrand เกิดขึ้น โดยจะมีการวางแผนโครงสร้างต่างๆใหม่ รวมถึง Tokenomic โดยที่ยังคงแนวคิดในเรื่องการเป็น Platform ที่รวบรวมข่าวสาร และเนื้อหาสาระต่างๆมาไว้ในที่เดียวเอาไว้อยู่ รวมถึงจะมีการเพิ่มเติมส่วนประกอบอื่นๆเข้ามาเพื่อให้ครอบคลุมมากยิ่งขึ้น โดยรายละเอียดในการ Rebrand จะมีการประกาศเพิ่มเติมในภายหลัง</li> */}
        {/* <li>เมื่อการ Rebrand และการพัฒนาโปรเจคเสร็จสิ้น ผู้ที่ถือเหรียญ SafeThai สามารถนำเหรียญ SafeThai มาแลกเป็นเหรียญของ Platform ที่ได้รับการ Rebrand และพัฒนาจนเสร็จสิ้นแล้ว ในอัตรา 1 ต่อ 1 โดยไม่เสียค่าธรรมเนียมใดๆเพิ่มเติม นอกจากค่า Gas ทั้งนี้เป็นความสมัครใจของผู้ถือเหรียญว่าต้องการจะแลกเหรียญ SafeThai เป็นเหรียญของ Platform ใหม่หรือไม่ เมื่อแลกแล้วจะไม่สามารถแลกกลับคืนได้ และผู้พัฒนาไม่มีส่วนเกี่ยวข้อง และไม่ต้องรับผิดชอบใดๆทั้งสิ้นต่อผลกำไรหรือขาดทุนจากกการแลกเหรียญ</li> */}
        <li>
          การปรับปรุง Branding จะมีการปรับปรุง Roadmap เพิ่มเติม ซึ่งรายละเอียดจะประกาศให้ทราบในภายหลัง
        </li>
        <li>
          <div className="mb-2">เราได้มีการจัดทำ Business model ของการ Rebrand โปรเจค โดยใช้ Lean canvas ขึ้นมาเบื้องต้น เพื่อให้ทุกท่านเห็นภาพรวมของการทำธุรกิจเพิ่มเติมดังนี้</div>
          <div>
            <img src="/leancanvas.png"></img>
          </div>
        </li>
        <li>ผู้พัฒนาได้ใส่เงินเป็นจำนวน 1.01 BNB ตาม <a href="https://bscscan.com/tx/0x70ba873efe9b2a7612a4ee8cde2edb6f1d37b6da3aae0ee432cbd5763ad2747d" target="blank">transaction</a> นี้ และ <a href="https://bscscan.com/tx/0x084cfe79a4fd6d1868752b61aa4ec6de9d4687b008912299b62a6bd05d12a25d" target="blank">transaction</a> นี้ โดยถ้าหากมีการ Refund เกิดขึ้น จะนำเงินส่วนนี้ไปใช้จ่ายเป็นค่าธรรมเนียมในการ Refund โดยผู้พัฒนาจะได้รับเหรียญ SafeThai ในปริมาณเท่ากับผู้สนับสนุนทั่วไป</li>
        <li>ถ้าหากยอดเงินคงเหลือหลังจาก Refund น้อยกว่า 7 BNB จะระงับการปล่อยเหรียญ และเปิดรับคืนเงินไปเรื่อยๆ</li>
        <li>ถ้าหากยอดเงินคงเหลือหลังจาก Refund เหลืออย่างน้อย 7 BNB ทางทีมผู้พัฒนาจะทำการปรับปรุง Branding ให้เร็วที่สุด และจะมีการปล่อยเหรียญออกมาอีกครั้ง</li>
        {/* <li>ผู้สนับสนุนที่ไม่ได้ขอเงินคืนสามารถขอรับ NFT ได้ในภายหลัง โดยไม่จำเป็นต้องเสียค่าใช้จ่ายเพิ่มเติม ซึ่งรายละเอียดจะประกาศให้ทราบในภายหลัง</li> */}
        <li>ข้อมูลที่ให้มาทั้งหมดเพื่อให้ทุกคนพิจารณาว่าอยากจะสนับสนุนต่อหรือไม่ ถ้าไม่อยากสนับสนุนต่อสามารถที่จะกด ปุ่มขอคืนเงิน เพื่อขอคืนเงินที่สนับสนุนมาแล้วได้ แต่ถ้าอยากสนับสนุนต่อ ทางทีมผู้พัฒนาก็จะทำการปรับปรุง Branding และทำการพัฒนาต่อ</li>
        <li>ถ้าหากไม่ทำการตัดสินใจภายใน 5 พฤษภาคม 2564 เวลา 21:00 จะถือว่าท่านเลือกที่จะสนับสนุนต่อ</li>
      </ol>
      
      <div className="my-4 text-white">ทางผู้พัฒนาขอขอบคุณทุกท่านที่ให้ความไว้วางใจและสนับสนุนโครงการ SafeThai ในครั้งนี้ครับ</div>

      {/* Roadmap */}
      {/* <div className="bg-gray-800 text-white">
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
      </div> */}

      <SafeThaiOfficial></SafeThaiOfficial>
    </div>
  )
}
