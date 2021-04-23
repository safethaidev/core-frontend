import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { web3 } from "../utils/web3";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const WALLET_ADDRESS = "0x3beb93Cd777EAab48d09d37A80e00853f9A2a895";

export default function Round0(props) {
  const [loading, setLoading] = useState(true);
  const [bnbBalance, setBnbBalance] = useState(0);
  const [bnbAmount, setBnbAmount] = useState("");
  const { account } = useWeb3React();

  let remainingBnb = Math.max(0, 25 - bnbBalance);

  // Polling to get wallet balance
  async function getWalletBalance(polling = false) {
    let balance = parseFloat(
      web3.utils.fromWei(await web3.eth.getBalance(WALLET_ADDRESS))
    );
    setBnbBalance(balance);
    setLoading(false);

    if (polling) {
      setTimeout(getWalletBalance, 3000);
    }

    return balance;
  }

  useEffect(() => {
    getWalletBalance(true);
  }, []);

  useEffect(() => {
    let filtered = bnbAmount.replace(/[^\d\.]/g, "");
    if (filtered != bnbAmount) {
      setBnbAmount(filtered);
    }
  }, [bnbAmount]);

  return (
    <div className="text-white">
      <div className="flex flex-col items-center my-4">
        <div className="text-4xl mb-2">Round 0</div>
        <div className="text-lg">รอบสำหรับผู้ศรัทธา</div>
      </div>

      {loading ? (
        <div className="text-3xl my-12 text-center">กำลังโหลด...</div>
      ) : (
        <>
          <div className="flex flex-col items-center my-4 mt-8">
            <div className="text-3xl mb-3">คงเหลือ</div>
            <div className="text-lg mb-2">
              {numberWithCommas(Math.floor(remainingBnb * 40000))} MSafeThai
            </div>
            <div className="text-lg mb-2">{remainingBnb} BNB</div>
          </div>

          <div className="flex flex-col items-center my-4">
            <div className="text-lg mb-1">
              ได้เหรียญภายในหนึ่งวันหลังจากเปิด Round 1
            </div>
            <div className="text-lg mb-1">Round อื่นๆ ได้เหรียญทันที</div>
          </div>

          <div className="flex flex-col items-center my-4">
            <div className="text-lg mb-1">ถูกกว่า Round 1 ถึง 2 เท่า</div>
            <div className="text-lg mb-1">
              ปิดเมื่อขายหมด หรือเปิดขาย Round 1
            </div>
          </div>

          <div
            className="mx-auto px-4 my-8"
            style={{
              width: "100%",
              maxWidth: 420,
            }}
          >
            <label className="block text-sm font-medium text-white mb-3">
              ต้องการซื้อ
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">
              $
            </span>
          </div> */}
              <input
                onChange={(event: any) => setBnbAmount(event.target.value)}
                type="text"
                name="price"
                id="price"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 py-3 sm:text-sm border-gray-300 rounded-md text-black"
                placeholder="0.00"
              ></input>
              <div className="absolute inset-y-0 right-0 flex items-center text-black pr-4">
                <div>BNB</div>
              </div>
            </div>
          </div>

          {parseFloat(bnbAmount || "0") ? (
            <div className="flex flex-col items-center my-4">
              <div className="text-lg mb-1">
                ได้รับ{" "}
                {numberWithCommas(
                  Math.floor(parseFloat(bnbAmount || "0") * 40000)
                )}
                ,000,000 SafeThai
              </div>
              <div className="text-lg mb-1">
                ภายในหนึ่งวันหลังจากเปิด Round 1
              </div>

              <div className="my-3">
                <button
                  className="bg-white hover:bg-gray-200 text-black px-8 py-2 rounded mx-2 w-100 sm:w-auto my-2 text-lg"
                  onClick={async () => {
                    let bnbAmountFloat = parseFloat(bnbAmount);

                    if (!bnbAmountFloat || bnbAmountFloat < 0) {
                      alert("จำนวนเหรียญไม่ถูกต้อง");
                      return;
                    }

                    await web3.eth.sendTransaction({
                      to: WALLET_ADDRESS,
                      from: account,
                      value: web3.utils.toWei(bnbAmount, "ether"),
                    });
                  }}
                >
                  ซื้อเลย
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </>
      )}
    </div>
  );
}
