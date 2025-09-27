
import React from "react";
import "./Tooltip.css";

function App() {
  return (
    <div className="App" style={{ padding: "50px", textAlign: "center" }}>

      <h2 className="tooltip">
        Hover over me
        <div className="tooltiptext">This is a tooltip</div>
      </h2>

      <p className="tooltip">
        Hover over me to see another tooltip
        <div className="tooltiptext">This is another tooltip</div>
      </p>

    </div>
  );
}

export default App;











