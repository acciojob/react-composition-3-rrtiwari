

import React, { useState } from "react";
import "./Tooltip.css";

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  const callIfFunc = (fn, e) => {
    if (typeof fn === "function") fn(e);
  };

  const handleMouseEnter = (e) => {
    setVisible(true);
    callIfFunc(children.props && children.props.onMouseEnter, e);
  };

  const handleMouseLeave = (e) => {
    setVisible(false);
    callIfFunc(children.props && children.props.onMouseLeave, e);
  };

  const mergedClass =
    (children.props && children.props.className ? children.props.className + " " : "") +
    "tooltip";

  return React.cloneElement(children, {
    className: mergedClass.trim(),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: (
      <>
        {children.props && children.props.children}
        {visible && <div className="tooltiptext">{text}</div>}
      </>
    ),
  });
}

export default Tooltip;




