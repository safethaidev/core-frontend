import Head from "next/head"
import React from "react"
import AvatarLinkList from "../../components/AvatarLinkList"
import Link from "next/link"

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
]

const FACEBOOK_GROUPS = [
  {
    img: "/img/content/groups/newgendefi.jpg",
    title: "New Gen Defi Society",
    href: "https://www.facebook.com/groups/1738492826331671",
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
]

export default function Community() {
  return (
    <div className="px-2 md:px-8 container text-white mx-auto">
      <Head>
        <title>SafeThai - เพจ บุคคลสำคัญ และกลุ่มที่คุณควรติดตามเพื่อเป็นแหล่งความรู้สำหรับ Defi - พร้อมแจก Airdrop</title>
      </Head>
      
      <div className="my-8">
        <div className="text-3xl mb-3 text-yellow-200">แหล่งความรู้สำหรับ Defi ไทย</div>
        <div className="text-lg">* เนื้อหาบางส่วนมาจาก<a className="underline" href="https://www.facebook.com/BlockchainNewGen/posts/106675951555465" target="blank">โพสนี้ในเพจ Blockchain The New Gen</a></div>
      </div>

      <div className="my-12">
        <div className="text-2xl mb-8 text-yellow-200">Facebook Pages</div>
        <div>
          <AvatarLinkList items={FACEBOOK_PAGES}></AvatarLinkList>
        </div>
      </div>

      <div className="my-12">
        <div className="text-2xl mb-8 text-yellow-200">Facebook Groups</div>
        <div>
          <AvatarLinkList items={FACEBOOK_GROUPS}></AvatarLinkList>
        </div>
      </div>

      <hr />

      <div className="my-12">
        <div className="text-2xl mb-8 text-yellow-200">Airdrop SafeThai</div>
        <div>
          <Link href="/airdrop">
            <button
              className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
            >
              <div>ล่า Airdrop</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}