import React from "react";
import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const heading = React.createElement(
//   "div",
//   { id: "heading-div" },
//   React.createElement("h1" , { } , "This is heading 1 ")
// );

// root.render(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// const jsxHeading = <h1 className="heading">This is from JSX code</h1>;
// root.render(jsxHeading);

const Title = () => {
  return <h1>This is from title component....🚀🚀</h1>;
};

// if we want to inject React element under one element then also use curly braces where we want to inject that code
const elem = <span>This is span Tag</span>;

const HeadingComponent = () => {
  return (
    <React.Fragment>
      {/* This is called as the React Component composition because one component is used with another newly created component*/}
      <Title />
      <Title></Title>
      {Title()}
      {/* above three syntax convey same meaning */}
      {title}
      <h1>This is from React functional component</h1>
    </React.Fragment>
  );
};

// what if i want to render react element inside the React Component.So use curly braces to inject React element.
const title = (
  <h1 className="titleheading"> {elem} (This is React Element...😀)</h1>
);

root.render(<HeadingComponent />);
