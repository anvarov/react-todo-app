import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";

const Hello = () => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
};

ReactDOM.render(<Hello />, document.getElementById("app"));
