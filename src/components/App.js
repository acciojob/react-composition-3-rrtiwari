import React from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css"; 

const App = () => {
  return (
    <div className="maindiv">
      <h2>
        <Tooltip text="This is a tooltip">
          <span>Hover over me!</span>
        </Tooltip>
      </h2>
      <p>
        <Tooltip text="This is another tooltip">
          <span>Hover over this text!</span>
        </Tooltip>
      </p>
      <div className="forhr"></div> {}
    </div>
  );
};

export default App;

