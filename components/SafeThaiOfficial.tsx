import Link from "next/link"
import React from "react"
import AvatarLinkList from "./AvatarLinkList"

const CHANNELS = [
  {
    img: "/img/socialbtn/discord.png",
    title: "Discord",
    href: "https://discord.gg/3nzFyJq6gd"
  },
  {
    img: "/img/socialbtn/facebook.png",
    title: "Facebook",
    href: "https://www.facebook.com/SafeThaiFinance/"
  },
  {
    img: "/img/socialbtn/facebookgroup.png",
    title: "Facebook Group",
    href: "https://www.facebook.com/groups/791619518452583"
  },
  {
    img: "/img/socialbtn/twitter.png",
    title: "Twitter",
    href: "https://twitter.com/SafethaiD"
  },
  {
    img: "/img/socialbtn/github.png",
    title: "Github",
    href: "http://github.com/safethaidev"
  },
]

export default function SafeThaiOfficial(props) {
  return (
    <>
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto pt-8 md:pt-12">
          <div className="text-center text-3xl mb-4 text-yellow-200">SafeThai Official</div>
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 md:py-12 px-2">
          <AvatarLinkList items={CHANNELS}></AvatarLinkList>
        </div>
      </div>
    </>
  )
}