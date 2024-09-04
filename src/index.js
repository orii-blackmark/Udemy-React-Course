import React from "react";
import ReactDOM from "react-dom/client";

class Car extends React.Component {
 constructor(props){
  super(props);
  this.state = {
    brand:"BMW",
    model:"2002",
    color:"black"
  };
 }
render(){
  return(
    <div>
      <h1>
        my {this.state.brand}
      </h1>
      <p>It is {this.state.color} in color</p>
      <p>it is a {this.state.model} model</p>
    </div>
  )
}

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Car />
);
