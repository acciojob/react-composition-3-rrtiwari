
import React, { useState } from "react";
import "./Tooltip.css";

export default function Tooltip({ text, children }) {
  return (
    <div className="tooltip">
      {children}
      <div className="tooltiptext">{text}</div>
    </div>
  );
}












