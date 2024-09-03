import React from "react";
import ReactDOM from "react-dom/client";

class Car extends React.Component{
  render(){
    return <h2>This is my car </h2>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Car />
);