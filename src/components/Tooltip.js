
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

  const handleMouseOver = (e) => {
    setVisible(true);
    callIfFunc(children.props && children.props.onMouseOver, e);
  };

  const handleMouseOut = (e) => {
    setVisible(false);
    callIfFunc(children.props && children.props.onMouseOut, e);
  };

  const combinedClass =
    (children.props && children.props.className
      ? children.props.className + " "
      : "") + "tooltip";

  return React.cloneElement(children, {
    className: combinedClass.trim(),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    children: (
      <>
        {children.props && children.props.children}
        {visible && <div className="tooltiptext">{text}</div>}
      </>
    ),
  });
}

export default Tooltip;




