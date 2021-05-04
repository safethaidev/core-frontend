import React from "react";

const DESKTOP_SIZE = 96;
const MOBILE_SIZE = 48;

export default function AvatarLink({
  img,
  title,
  href = "#",
  refHref = "#",
  target = "blank",
  description = "",
  largeImg = false,
}) {
  return (
    <div>
      <div className="hidden md:block hover-opacity">
        <a className="flex flex-col items-center" href={href} target={target}>
          <img
            className="rounded-full mb-4"
            src={img}
            style={{
              width: DESKTOP_SIZE * (largeImg ? 2 : 1),
              height: DESKTOP_SIZE * (largeImg ? 2 : 1),
              objectFit: "cover",
            }}
          ></img>
          <div className="text-xl text-center my-2">{title}</div>
          {description && <div className="text-center mb-1">{description}</div>}
          {/* {href && href != "#" && (
            <button className="bg-white hover:bg-gray-100 text-black px-12 py-2 rounded mx-2 w-100 sm:w-auto my-2 mt-3 text-lg">
              <div>เข้าชมเลย</div>
            </button>
          )} */}
        </a>
      </div>

      <div className="block md:hidden">
        <a
          className="flex flex-row items-center pb-3"
          style={{ borderBottom: "1px solid white" }}
          href={href}
          target={target}
        >
          <img
            className="rounded-full mr-4"
            src={img}
            style={{
              width: MOBILE_SIZE,
              height: MOBILE_SIZE,
              objectFit: "cover",
            }}
          ></img>

          <div className="flex-grow">
            <div className="text-xl">{title}</div>
            {description && (
              <div className="mt-1">{description}</div>
            )}
          </div>

          {href && href != "#" && (
            <div
              className="text-2xl text-right"
              style={{
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: 36,
              }}
            >
              &gt;
            </div>
          )}
        </a>
      </div>
    </div>
  );
}
