import React from "react"

export default function Card(props) {
  return (
    <a className="card flex flex-col" style={{width: 240}} href={props.href}>
      <div className="card-image">
        <img src={props.img || "/cover.jpg"}></img>
      </div>

      <div className="card-body">
        <div className="text-xl">{props.header}</div>
        {props.body && <div className="text-xl mt-4">
          {props.body}
        </div>}
      </div>
    </a>
  )
}