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

const ROUND0 = {
  "0x0011888b0ce1ec8caef6ac85d388cca9afa0c284": 0.02,
  "0x024b4643b868828f96a7eb47979ceca37de8934c": 0.06,
  "0x031e157b4822cefc2cbf432739fbd29ddaf755ed": 1.5,
  "0x03d226f668ca49c1ce00eb200bbc20b8f712d2f5": 0.44,
  "0x06e5c3433d3e4e9c1bcf263954dc6437b44fb281": 0.37,
  "0x089f832f8336ba6801c771aa4272bd69a1c8c04b": 0.1,
  "0x0cf0abe8478817d6dba4bb93cdb7b87ad07c477b": 0.1,
  "0x0f6d58aa61b971805ecf4c9f5eab5f0697a72355": 0.1,
  "0x121409b45f62c53c756e0e7b78b272d7dead7600": 0.16,
  "0x18d2885b896b0de54374055a29d941110dd4670a": 0.1,
  "0x24b953b38f47f672bc68d11f02a11d73a9e9cfa9": 0.11,
  "0x27fe777e4e0051b87021ec20c20f1294ca128a7b": 0.01,
  "0x2b6fbd1d6e10895b25b2c3741cad3ce1a0e617fe": 0.01,
  "0x2fb97b840dec694669d9a2ff7c693c81599d924b": 0.05,
  "0x33326fb672959b266e085d9d464346dc609cb570": 0.05,
  "0x37e9d4bf6d6114d6ef7f2969127a3669de5e2cf0": 0.4,
  "0x391ca2e60455d68a43992bcc9e9259420ee9ac11": 0.03,
  "0x3cb610d731e097a586569268729543ddff872def": 0.1,
  "0x3d96078a5031a5b11dbd710841c147af5d89a7a7": 0.03,
  "0x414cbc6495030075036e9d14f8647d69d3c905ac": 0.01,
  "0x42b9955032b7eea3199ffebb298b3bd24c6a5db6": 0.2,
  "0x44d929aeb3fd891d1d1ee31ce3950d37cb4d0586": 0.05,
  "0x466107b85f1ef3e91d28f848856d8040fa4908d5": 0.03,
  "0x486f017a0ffe9cb57dd9f0a262d80699e8347bee": 0.03,
  "0x4a6166b58fdf7f09a3ac937d3069ad7c1ea5fcd5": 0.01,
  "0x4b840ea09b810a8b1da8cf546fdefcf88be35a30": 0.0295494,
  "0x4d53406b594238d98ec2fc063f65ccf10226f3f3": 0.1,
  "0x4daec239cfc29391d4c6aac18c37242e9c909ab5": 0.01,
  "0x5d9ef6c0e89f5ebc535b6c840031bf76aa142a8b": 0.05,
  "0x5ebaddf71482d40044391923be1fc42938129988": 0.1,
  "0x627672243d33b44d3c3a8db6242067fe9789801d": 0.1,
  "0x63559d188b1b19c7d3d58c8ff05762c65983d09a": 0.22,
  "0x637eb05d2d72c515f0ca8baeb80b0eccf681b344": 0.0625,
  "0x63a43a24de2ce6b1bfed393f6fad714b172a977e": 0.02,
  "0x657ecc322c7f74ef8a838dd45529ff16ec674010": 0.02,
  "0x66372c7e6a4f3f410f83ca4b2a4dd8e113b0876e": 0.05,
  "0x679382d91c23aa87cc4ea2e37751a58d64979dd6": 0.1,
  "0x680cdbe0fca61636fe44ddb4bfc0c3ffe190e2ab": 0.06,
  "0x68c0267c09437d10a6f67383b1a8456c371f6f09": 0.05,
  "0x69408a3268daeb6bb41ff3fe211f7fbccb3edbe5": 0.01,
  "0x72f1c027decb1ce26a12e57318767a172bef78cd": 0.07,
  "0x7512dd40cc0e556d4f7d65255b8a0c3a1aa37a29": 0.01,
  "0x7791aeeea246c09275247acb2de43aba62a1e207": 0.02,
  "0x7836a2143cd2bf005a793513cdee480dc81f07fc": 0.08,
  "0x78d1cf799bf3dde2ec657b943dee4a6b5e72730c": 0.05,
  "0x7b43331494860f1cec9d884a703e617e2ee859fc": 0.01,
  "0x7d28ae69425b02f4ecc9c7391b45d444e55ed439": 0.01,
  "0x7dc426e13d5be44008b6108d438dac5e7f170481": 1,
  "0x7edbfc757e581b0711091b95c155f21465aed54a": 0.01,
  "0x7fc494000a8e836cf9a77139d0055559132fec7a": 0.1,
  "0x7ff47f1097c85f66db8b6e967fed773e1ab1b8f9": 0.1,
  "0x80b16aa528399b1e9a41e25049f46b0abb322df0": 0.1,
  "0x8682f3bf315d031b99082b5d09646ea5d3918189": 0.04,
  "0x8cfd55768d2d7b5261e9ad95a20cc0fb0799a9ea": 0.16,
  "0x8fbd12ebad6ee1caad615952a94e6b4f4c76e714": 0.11,
  "0x94ad1d7b27aad64f0c222c35e0f1bf8e232f28e9": 0.06,
  "0x9537ad1fcb79e3f9738f607700f14f53db89d9f7": 0.04,
  "0x964691df621c6cd11be466f2bc0cacde98ebb464": 0.099,
  "0x977f26bfb6ff2935261364bee6adad2746358197": 0.02,
  "0x985fdbcb45411889e539abff1dc0073a5d305038": 0.1,
  "0x99f60d88492bbe5bf0d0f6ea9dc07f6b7cd5aff3": 0.07,
  "0x9b4e512e10d2b0057a225a44de478c048f68ec7c": 0.01,
  "0xa2f28a71cca242abe55aec0ff046c1c8dcde5edd": 0.1,
  "0xa6ac24ee081cbd654bb886d2bc0eafd3b0c9366d": 0.1,
  "0xa972b3b940f6dddd0acd847de98ba255381a77f2": 0.025,
  "0xaf6fea6eef9d831b829ed85f59a825edd9bce92d": 0.12,
  "0xb03b8dc1982b7e1245b87eb42c5a6ae8f9b38c07": 0.02,
  "0xb34c427e93cdad512d7905c8be53bc470eac1fb2": 0.2,
  "0xb522310315e0fdc50c737dffb13f02a284c2d4ea": 0.06,
  "0xb88802fa65737c6b41d416a52446d36e2dfb4c30": 0.1,
  "0xbfc0d877c6d49b36621bf0403fe3e889af2f1cd6": 0.15,
  "0xc0946c98e27d9ba92d954d99695bcabb0d966ab1": 0.01,
  "0xc18eb02b247f861468551bcad9f07d64a5e5d51f": 0.47,
  "0xc4443c421d756430c401f2a0b8be4d4f9a63d737": 0.07,
  "0xc4b824b63235c719ddf54276f3b313f653178387": 0.05,
  "0xc72d94f7a55223390bb128e0faa77e76972d0ead": 0.07,
  "0xca0c7a7f7d68302b19c96d1e06ea058bf171790c": 0.2,
  "0xcaec09a3332c6f64797335993370ee250a821438": 0.5,
  "0xcaf76ca5cf79510f7928eee79efeb92372957c10": 0.5,
  "0xcb366b82f1d6c4487425c4f83a53782e064c49d6": 0.03,
  "0xcffbb8537e1c6a23f2c51b5ce72664d5413d2c25": 0.01,
  "0xd07af3dfa0ffe55d4f1f4b198058cc162a76a79d": 0.05,
  "0xd0dd6613a58e732e31a3d940b0e2ad2522253b0f": 0.2,
  "0xd74b7046ae3f892a5655f30194f5be8b3289561a": 0.199895,
  "0xd8ddd5b6d874a5aa3cafa011da7839002e8bfe04": 0.1,
  "0xdb7fe62dec33cff3ecc798d0626f5133864822a1": 0.02,
  "0xdbdd3c0fa66b11c7eee58bb47ea56f95fd182643": 0.4,
  "0xe16e0ad61b53ed1eac1b295642b87b5f7c3dd1ff": 0.4,
  "0xe522a011188f2ee46fd96486d7f83e44f0df7ba6": 0.02,
  "0xe9eb6d4be2020be7c90f4557aa4c04f542366b01": 0.03,
  "0xeab165ae03b4bfcf4d4b5e7d06d4d694343d096d": 0.01,
  "0xecfebb9b35c7c583fba592408b03336ce95786cd": 0.097,
  "0xee42bcd5428b8d19ba5342485a8bcd60098d4768": 0.01,
  "0xee62180365134484f99a07891b786421db559a09": 0.2,
  "0xef34f1872209ddd66142738568dbf4f3e4c5d990": 0.01,
  "0xefb31ce97402b21cf9be17eeb3a142c76f15013a": 0.041,
  "0xf01dd015bc442d872275a79b9cae84a6ff9b2a27": 1.01,
  "0xf5015ddc079e8cea816d0d3b34fa8885d7d1c826": 0.15,
  "0xf8489ed45230749bde70b88b0b48f3c8feb445ff": 0.1,
  "0xfaa9fd4bc6c0c4f79a80802caa24c587d3f1f420": 0.1,
  "0xfb2e123b5e3983601ffb8f8b15862e0e24f38ed2": 0.055,
  "0xfd9e3157ee540a353708233f66f14b5080aef791": 0.01,
  "0xffcf879dba2f74bab95a8a75b4d58c8ac11e20b6": 0.015,
};

async function signMsg(msgParams, from) {
  return await web3.eth.personal.sign(msgParams, from, "safethai");
}

export default function Home() {
  const [round1Ended, setRound1Ended] = useState(false);
  const { account, active } = useWeb3React();
  let round0Amount = ROUND0[account ? account.toLowerCase() : ""];

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
          <div className="text-center text-3xl mb-4 text-yellow-200">
            การตัดสินใจ
          </div>
        </div>
      </div>

      {!active ? (
        <div className="flex flex-row my-3 justify-center">
          <ConnectWalletButton></ConnectWalletButton>
        </div>
      ) : round0Amount ? (
        <div>
          <div className="text-center my-3 text-xl text-white">
            คุณสนับสนุน {round0Amount} BNB
          </div>
          <div className="flex flex-col md:flex-row my-3 justify-center">
            <button
              className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
              onClick={async () => {
                try {
                  if (
                    !confirm(
                      "คุณจะได้รับเงินคืนภายใน 3 วัน และคุณเข้าใจว่าเป็นการสละสิทธิ์การได้รับเหรียญของคุณ"
                    )
                  )
                    return;

                  let amount = prompt(
                    "กรุณาระบุจำนวนเงินที่ต้องการขอคืน ในหน่วย BNB (ทั้งหมด " +
                      round0Amount +
                      " BNB)"
                  );
                  if (!parseFloat(amount)) {
                    alert("กรุณาใส่จำนวนเงินให้ถูกต้อง");
                    return;
                  }

                  if (parseFloat(amount) > round0Amount) {
                    alert("คุณขอคืนมากกว่าที่คุณสนับสนุนไป");
                    return;
                  }

                  let signature = await signMsg("Refund " + amount, account);
                  console.log(signature);

                  await window.db
                    .collection("refund")
                    .doc(account)
                    .set({
                      refundAmount: parseFloat(amount),
                      address: account,
                      signature,
                    });

                  alert("ขอคืนเงินสำเร็จ คุณจะได้รับเงินคืนภายใน 3 วัน");
                } catch (err) {
                  console.error(err);
                  alert(
                    "เกิดข้อผิดพลาดในการขอคืนเงิน กรุณาติดต่อทาง Inbox ของเพจ SafeThai"
                  );
                }
              }}
            >
              <div>ขอคืนเงิน</div>
            </button>

            <button
              className="bg-white hover:bg-gray-200 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-xl text-center"
              onClick={async () => {
                try {
                  if (
                    !confirm(
                      "คุณได้ทราบว่าทาง SafeThai จะมีการพัฒนา Branding ซึ่งต้องใช้เวลามากขึ้นในการออกเหรียญ และได้ศึกษาและยอมรับความเสี่ยงต่างๆที่ได้ระบุไว้ในรายละเอียดเพิ่มเติม"
                    )
                  )
                    return;

                  let signature = await signMsg("Support", account);
                  console.log(signature);

                  await window.db.collection("refund").doc(account).set({
                    refundAmount: 0,
                    address: account,
                    signature,
                  });

                  alert(
                    "ทางผู้พัฒนาขอขอบคุณทุกท่านที่ให้ความไว้วางใจและสนับสนุนโครงการ SafeThai ในครั้งนี้ครับ"
                  );
                } catch (err) {
                  console.error(err);
                  alert(
                    "เกิดข้อผิดพลาดในการขอคืนเงิน กรุณาติดต่อทาง Inbox ของเพจ SafeThai"
                  );
                }
              }}
            >
              <div>สนับสนุนต่อ</div>
            </button>
          </div>


          <div className="my-4 text-white text-center">
            จะมีการขอ Sign Signature Request ซึ่งไม่เสียค่าใช้จ่ายใดๆ
          </div>

          <div className="my-4 text-white text-center">
            เมื่อคุณทำการกดขอคืนเงิน หรือสนับสนุนต่อ หมายความว่าคุณได้อ่าน
            เข้าใจและยอมรับ
            <Link href="/detail">
              <span className="underline">รายละเอียดเพิ่มเติม</span>
            </Link>
          </div>

          <div className="my-4 text-white text-center">
            ทางผู้พัฒนาขอขอบคุณทุกท่านที่ให้ความไว้วางใจและสนับสนุนโครงการ SafeThai
            ในครั้งนี้ครับ
          </div>
        </div>
      ) : (
        <div className="my-4 text-xl text-center text-white">คุณไม่ได้เป็นผู้สนับสนุน</div>
      )}

      <SafeThaiOfficial></SafeThaiOfficial>
    </div>
  );
}
