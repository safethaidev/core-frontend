import Head from "next/head"
import React from "react"
import AvatarLinkList from "../../components/AvatarLinkList"
import Link from "next/link"
import SafeThaiOfficial from "../../components/SafeThaiOfficial"

const FACEBOOK_PAGES = [
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
    img: "/img/content/pages/siamblockchain.png",
    title: "Siam Blockchain",
    href: "https://www.facebook.com/siamblockchain"
  },
  {
    img: "/img/content/pages/kim.jpg",
    title: "Kim DeFi Daddy",
    href: "https://www.facebook.com/kimdefidaddy",
  },
  {
    img: "/img/content/pages/bit.png",
    title: "Bit Investment",
    href: "https://www.facebook.com/bitinvestmentth",
  },
  {
    img: "/img/content/pages/bitcoinaddict.png",
    title: "Bitcoin Addict",
    href: "https://www.facebook.com/bitcoinaddictthailand",
  },
  {
    img: "/img/content/pages/bittoon.jpg",
    title: "BitToon",
    href: "https://www.facebook.com/bittoonfunny",
  },
  {
    img: "/img/content/pages/nftthai.png",
    title: "NFT Thai Community",
    href: "https://www.facebook.com/NFT.Thai.Community",
  },
  {
    img: "/img/content/pages/cryptobobo.jpg",
    title: "Crypto โบโบ้",
    href: "https://www.facebook.com/Cryptobobo",
  },
  {
    img: "/img/content/persons/poramin.jpg",
    title: "ปรมินทร์ อินโสม",
    href: "https://www.facebook.com/InsomPoramin"
  },
]

const FACEBOOK_GROUPS = [
  {
    img: "/img/content/groups/newgendefi.jpg",
    title: "New Gen Defi Society",
    href: "https://www.facebook.com/groups/1738492826331671",
  },
  {
    img: "/img/content/groups/bitcoinaddict.png",
    title: "Bitcoin Addict Community",
    href: "https://www.facebook.com/groups/cryptoaddict",
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
  {
    img: "/img/content/groups/safemoonthailand.jpg",
    title: "SAFE_MOON_THAILAND",
    href: "https://www.facebook.com/groups/305524347587484",
  },
  {
    img: "/img/content/groups/cryptonews.jpg",
    title: "CRYPTO NEWS THAILAND",
    href: "https://www.facebook.com/groups/301888907999466",
  },
  {
    img: "/img/content/groups/polkadotthailand.jpg",
    title: "Polkadot​ thailand",
    href: "https://www.facebook.com/groups/967887583615100",
  },
  {
    img: "/img/content/groups/shitcointhailand.jpg",
    title: "SHITCOIN THAILAND",
    href: "https://www.facebook.com/groups/274853860929455",
  },
]

const INFLUENCERS = [
  {
    img: "/img/content/persons/blockchainreview.png",
    title: "Peeraphat Hankongkaew",
    href: "https://www.facebook.com/bueakhan.peeraphat"
  },
  {
    img: "/img/content/persons/kim.png",
    title: "Kim DeFi Daddy",
    href: "https://www.facebook.com/kimdefidaddy",
  },
  {
    img: "/img/content/persons/bit.png",
    title: "Bit Investment",
    href: "https://www.facebook.com/bitinvestmentth"
  },
  {
    img: "/img/content/persons/piriya.png",
    title: "Piriya Sambandaraksa",
    href: "https://www.facebook.com/piriya33"
  },
  {
    img: "/img/content/persons/eddie.png",
    title: "Eddie Paradorn",
    href: "https://www.facebook.com/eddie.paradorn"
  },
  {
    img: "/img/content/persons/niran.png",
    title: "Niran Pravithana",
    href: "https://www.facebook.com/niranpr"
  },
  {
    img: "/img/content/persons/sanjay.png",
    title: "สัญชัย ปอปลี",
    href: "https://www.facebook.com/SanjayPopli.23"
  },
  {
    img: "/img/content/persons/top.png",
    title: "ท๊อป จิรายุส",
    href: "https://www.facebook.com/toppjirayutofficial"
  },
  {
    img: "/img/content/persons/tonhor.png",
    title: "TonHor Palakorn",
    href: "https://www.facebook.com/tonhor"
  },
  {
    img: "/img/content/persons/poramin.jpg",
    title: "ปรมินทร์ อินโสม",
    href: "https://www.facebook.com/InsomPoramin"
  },
];

export default function Community() {
  return (
    <div className="px-4 md:px-8 container text-white mx-auto">
      <Head>
        <title>SafeThai - เพจ กลุ่ม และบุคคลสำคัญในด้าน Defi ที่คุณควรติดตามเพื่อเป็นแหล่งความรู้ - พร้อมแจก Airdrop</title>
        <meta property="og:type"          content="article" key="ogtype" />
        <meta property="og:title"         content="SafeThai - เพจ กลุ่ม และบุคคลสำคัญในด้าน Defi ที่คุณควรติดตามเพื่อเป็นแหล่งความรู้ - พร้อมแจก Airdrop" key="ogtitle" />
        <meta property="og:description"   content="เพจ กลุ่ม และบุคคลสำคัญในด้าน Defi ที่คุณควรติดตามเพื่อเป็นแหล่งความรู้ พร้อมแจก Airdrop SafeThai" key="ogdescription" />
        <meta property="og:image"         content="https://safethai.finance/img/cover/community2.jpg" key="ogimage" />
      </Head>
      
      <div className="my-8">
        <div className="text-3xl mb-3 text-yellow-200">แหล่งความรู้สำหรับ Defi ไทย</div>
        <div className="text-lg">* เนื้อหาบางส่วนมาจาก<a className="underline" href="https://www.facebook.com/BlockchainNewGen/posts/106675951555465" target="blank">โพสนี้ในเพจ Blockchain The New Gen</a></div>
      </div>

      <div className="my-16">
        <div className="text-2xl mb-8 text-yellow-200">Facebook Pages</div>
        <div>
          <AvatarLinkList items={FACEBOOK_PAGES}></AvatarLinkList>
        </div>
      </div>

      <div className="my-16">
        <div className="text-2xl mb-8 text-yellow-200">Facebook Groups</div>
        <div>
          <AvatarLinkList items={FACEBOOK_GROUPS}></AvatarLinkList>
        </div>
      </div>

      <div className="my-16">
        <div className="text-2xl mb-8 text-yellow-200">บุคคลสำคัญ</div>
        <div>
          <AvatarLinkList items={INFLUENCERS}></AvatarLinkList>
        </div>
      </div>

      <div className="my-16">
        <div className="text-2xl mb-8 text-yellow-200">มีบางอย่างขาดหายไป ?</div>
        <div>
          <a href="https://forms.gle/oy2rzEygaRrgzQqZ8" target="blank">
            <button
              className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
            >
              <div>แนะนำ เพจ / กลุ่ม / บุคคลสำคัญ และอื่นๆ เพิ่มเติม</div>
            </button>
          </a>
        </div>
      </div>

      <hr />

      <div className="my-16">
        <div className="text-3xl mb-8 text-yellow-200 text-center">SafeThai Airdrop &amp; Presale</div>
        <div className="flex justify-center">
          <Link href="/airdrop">
            <button
              className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
            >
              <div>ล่า Airdrop</div>
            </button>
          </Link>

          <Link href="/round0">
            <button
              className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
            >
              <div>ซื้อ Round 0</div>
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="/">
            <button
              className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
            >
              <div>ศึกษาข้อมูลเกี่ยวกับ SafeThai เพิ่มเติม</div>
            </button>
          </Link>
        </div>
      </div>

      <SafeThaiOfficial></SafeThaiOfficial>
    </div>
  )
}