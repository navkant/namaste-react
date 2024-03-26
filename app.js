import React from "react";
import ReactDOM from "react-dom/client";

// React Element using JSX
const jsxheading = (
  <div id="parent">
    <div id="child">
      <h1>Namaste React using JSX 🚀</h1>
    </div>
  </div>
);

// React components
// class based components - Old
// function based components - New

const HeadingComponent = () => {
  return <h1> Namaste React Function Component 🚀</h1>;
};

const Title = () => {
  return (
    <h1 className="head" tabIndex="5">
      Namaste React using JSX
    </h1>
  );
};

const number = 1000;

const HeadingComponent1 = () => (
  <div>
    {/* below three lines mean same thing */}
    <Title />
    <Title></Title>
    {Title()}
    <h2> {number*3} </h2>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1 />);
