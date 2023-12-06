import React, { Fragment } from "react"
import ReactDOM from "react-dom/client"

let el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

let name = "Hesh";
let bool = true;
let arr = ["A", "B", "C"]
let obj = { name: "Jay" }
// we can show only string and numbers
function printf() {
  return "JAY"
};

function App() {
  return (
    <>
      <h1>Welcome to React with {name} {bool} {arr} {printf()}</h1>
      <h2>Thanks</h2>
    </>
  );
  //jsx only support only one parent, you cannot <h1></h1><h1></h1>
  // jsx support Fragments
  // jsx need camelcase for attributes otherwise it gives warnings
  // attribute values we need to use curlybrase in jsx
}
//babel convert jsx(Javascript Syntac Extension) in to JS , you can reffer Babeljs.io

root.render(<App />)
// let el2 = React.createElement("h1",null,"welcome");
// root.render(el2);