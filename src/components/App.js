import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div className="App">
      <h1>React Tooltip Demo</h1>

      <Tooltip text="This is a tooltip for text 1">
        <p>Hover over this text 1</p>
      </Tooltip>

      <Tooltip text="Another helpful tooltip here">
        <button>Hover over this button</button>
      </Tooltip>

      <Tooltip text="Tooltips make UI better!">
        <span style={{ color: "blue", cursor: "pointer" }}>
          Hover over this span
        </span>
      </Tooltip>
    </div>
  );
}

export default App;
