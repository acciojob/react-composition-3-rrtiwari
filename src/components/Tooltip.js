import React, { useState } from "react";
import "./Tooltip.css";

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  function showTooltip() {
    setVisible(true);
  }

  function hideTooltip() {
    setVisible(false);
  }

  return (
    <div
      className="tooltip"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && <div className="tooltiptext">{text}</div>}
    </div>
  );
}

export default Tooltip;
