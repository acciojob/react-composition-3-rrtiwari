
import React from "react";

export default function Tooltip({ text, children }) {
  return React.cloneElement(children, {
    className: (children.props.className || "") + " tooltip",
    children: (
      <>
        {children.props.children}
        <div className="tooltiptext">{text}</div>
      </>
    ),
  });
}










