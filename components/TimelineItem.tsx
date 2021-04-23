import React from "react";
import TimelineCircle from "./TimelineCircle";

export default function TimelineItem(props) {
  return (
    <div>
      <div className="flex md:hidden">
        <div className="mx-3">
          <TimelineCircle active={props.active ?? false}></TimelineCircle>
        </div>

        <div className="flex-grow">{props.children}</div>
      </div>

      <div className="hidden md:flex">
        <div style={{ flexBasis: "50%", textAlign: "right" }}>
          {props.index % 2 == 1 ? props.children : <div></div>}
        </div>

        <div className="mx-3">
          <TimelineCircle active={props.active ?? false}></TimelineCircle>
        </div>

        <div style={{ flexBasis: "50%", textAlign: "left" }}>
          {props.index % 2 == 0 ? props.children : <div></div>}
        </div>
      </div>
    </div>
  );
}
