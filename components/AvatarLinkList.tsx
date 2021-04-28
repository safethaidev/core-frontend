import React from "react"
import AvatarLink from "./AvatarLink"

export default function AvatarLinkList(props) {
  return (
    <div className={`${props.center && props.items.length < 4 ? 'flex flex-col md:flex-row justify-center' : 'grid grid-cols-1 md:grid-cols-4 gap-3'}`}>
      {props.items.map((item, i) => <AvatarLink {...item} key={i}></AvatarLink>)}
    </div>
  )
}