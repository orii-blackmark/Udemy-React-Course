import React from "react";
import ReactDom from "react-dom/client";

const element = (

  <table>
    <tr>
      <th>Name</th>
      <th>Phone</th>
    </tr>
    <tr>
      <td>Oriel</td>
      <td>0758997669</td>
    </tr>
  </table>
)

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  element
)