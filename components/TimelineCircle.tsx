import React from "react"

export default function TimelineCircle({active = false}) {
  return (
    <div className="flex flex-col h-full items-center">
      <div style={{
        borderRadius: "50%",
        width: 16,
        height: 16,
        border: "2px solid white",
        backgroundColor: "white",
        flexGrow: 0,
        flexShrink: 0,
        marginTop: 8,
      }}>

      </div>

      <div style={{
        flexGrow: 1,
        height: "100%",
        borderLeft: "2px solid white",
      }}>

      </div>
    </div>
  )
}