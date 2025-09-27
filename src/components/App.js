
import React from "react";
import Tooltip from "./Tooltip";
import "./Tooltip.css";

function App() {
  return (
    <div className="App">
      <Tooltip text="Tooltip for heading">
        <h2>Hover over heading</h2>
      </Tooltip>

      <Tooltip text="Tooltip for paragraph">
        <p>Hover over paragraph</p>
      </Tooltip>

      <Tooltip text="Tooltip for span">
        <span>Hover over span</span>
      </Tooltip>
    </div>
  );
}

export default App;
