import React from "react"
import AvatarLink from "./AvatarLink"

export default function AvatarLinkList(props) {
  return (
    <div className={`${props.center && props.items.length < 3 ? 'flex flex-col lg:flex-row justify-center' : 'grid grid-cols-1 lg:grid-cols-3 lg:gap-y-8 lg:gap-x-4 gap-y-3'}`}>
      {props.items.map((item, i) => <AvatarLink {...item} key={i}></AvatarLink>)}
    </div>
  )
}