import React from "react";
import ReactDOM from "react-dom/client";

function Person(props) {
  return (
    <h1>
      My name is {props.name}, and my age is {props.age}
    </h1>
  );
}

function Oriel() {
  const myobj = { name: "Oriel Kiplangat", age: "24" };

  return (
    <>
      <h1>I live in Kenya</h1>
      <Person name={myobj.name} age={myobj.age} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Oriel />);
