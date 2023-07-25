import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading1 = React.createElement("h1" , {id:"heading1"} , "Hello World");
const heading2 = React.createElement("h2" , {id:"heading2"} , "Learning React...");
const heading3 = React.createElement("h3" , {id:"heading3"} , "Let us play with React !!!!");

const createDiv = React.createElement("div" , {className:"creatediv"} , [heading1 , heading2 , heading3])
root.render(createDiv);