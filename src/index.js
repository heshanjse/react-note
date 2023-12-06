import React, { Fragment } from "react"
import ReactDOM from "react-dom/client"
import App from "./test1/App";
// import App from "./test2/App";
// import App from "./test3/App";
// import App from "./test4/App";

let el = document.getElementById("root");
const root = ReactDOM.createRoot(el);





//babel convert jsx(Javascript Syntac Extension) in to JS , you can reffer Babeljs.io

root.render(<>
<App />
</>);
// let el2 = React.createElement("h1",null,"welcome");
// root.render(el2);