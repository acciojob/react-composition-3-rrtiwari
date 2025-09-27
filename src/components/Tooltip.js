
import React, { useState } from "react";
import "./Tooltip.css";

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div className="tooltiptext">{text}</div>}
    </span>
  );
}

export default Tooltip;

