import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const heading1 = React.createElement("h1" , {id:"heading1"} , "Hello World");
// const heading2 = React.createElement("h2" , {id:"heading2"} , "Learning React...");
// const heading3 = React.createElement("h3" , {id:"heading3"} , "Let us play with React !!!!");

// const createDiv = React.createElement("div" , {className:"creatediv"} , [heading1 , heading2 , heading3])
// root.render(createDiv);

// Let's play 
// TASK-01

  <div class="parent">
    <div id="child">
        <h1>This is heading1</h1>
        <h2>This is heading2</h2>
    </div>
</div> 


const heading = React.createElement(
  "div",
  { className: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is heading1"),
    React.createElement("h2", {}, "This is heading2"),
  ])
);


root.render(heading);