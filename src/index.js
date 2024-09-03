import React from "react";
import ReactDOM from "react-dom/client";

const x = 30;
let text = "Less than 20";
if(x>20){
  text = "More than 20"
}
const myElement = (
<>
<p>{text}</p>
</>
);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(myElement);