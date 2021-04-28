import React from "react";

const DESKTOP_SIZE = 96;
const MOBILE_SIZE = 48;

export default function AvatarLink({ img, title, href = "#", target="blank", description="" }) {
  return (
    <div>
      <div className="hidden md:block">
        <a className="flex flex-col items-center" href={href} target={target}>
          <img className="rounded-full mb-4" src={img} style={{
            width: DESKTOP_SIZE,
            height: DESKTOP_SIZE,
            objectFit: "cover",
          }}></img>
          <div className="text-xl text-center mb-1">{title}</div>
          {description && <div className="text-center mb-1">{description}</div>}
          <button
            className="bg-white hover:bg-gray-100 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 mt-3 text-lg md:text-xl"
          >
            <div>เข้าชมเลย</div>
          </button>
        </a>
      </div>

      <div className="block md:hidden">
        <a className="flex flex-row items-center pb-3" style={{borderBottom: "1px solid white"}} href={href} target={target}>
          <img className="rounded-full mr-4" src={img} style={{
            width: MOBILE_SIZE,
            height: MOBILE_SIZE,
            objectFit: "cover",
          }}></img>

          <div className="flex-grow text-xl">{title}</div>

          <div className="text-2xl text-right" style={{
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: 36,
          }}>
            &gt;
          </div>
        </a>
      </div>
    </div>
  );
}
