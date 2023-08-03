import React from "react";
import ReactDOM from "react-dom/client";

// creating react element using JSX
// React element
const Heading = <h1 className="head">Namaste React using.</h1>;

// React Component
// Class based component - Old
// Function based component - NEW

// React Functional component
const HeadingComponent = () => {
  return (
    <div>
      <h1>Namaste React function component.</h1>
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
