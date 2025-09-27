
import React, { useState } from "react";
import "./Tooltip.css";

export default function Tooltip({ text, children }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      <div className={`tooltiptext ${hover ? "show" : ""}`}>{text}</div>
    </div>
  );
}











