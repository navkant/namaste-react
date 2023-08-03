import React from "react";
import ReactDOM from "react-dom/client";

// creating react element using JSX bcz using React.createElement is cumbersome and unclean
// this gives us React element
const Heading = <h1 className="head">Namaste React using JSX (variable).</h1>;

// React Component
// Class based component - Old
// Function based component - NEW

// React Functional components
// title component
const Title = () => (
  <h1 className="head" tabIndex="5 ">
    Namaste React using JSX.
  </h1>
);
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      {Title()}
      {Heading}
      <h1>Namaste React functional component.</h1>
    </div>
  );
};

// Heading Compnent can also be written as
// const HeadingComponent = () => (
//   <div>
//     <h1>Namaste React function component</h1>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
