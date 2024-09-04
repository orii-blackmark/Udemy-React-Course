import React from "react";
import ReactDOM from "react-dom/client";

function Person() {
  const callName = (name) => {
    alert("Hello " + name);
  };
  return <button onClick={callName("Oriel")}>Call Me!</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Person />);
