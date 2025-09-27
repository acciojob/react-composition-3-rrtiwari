
import React, { useState } from "react";
import "./Tooltip.css";

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  return React.cloneElement(children, {
    className: (children.props.className || "") + " tooltip",
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
    children: (
      <>
        {children.props.children}
        <div
          className="tooltiptext"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {text}
        </div>
      </>
    ),
  });
}

export default Tooltip;



