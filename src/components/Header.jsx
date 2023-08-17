import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  // console.log("HEADER RENDERED!");
  // if no dependency array => useEffect is called on every render
  // if dependency array is empty => useEffect is called on initial render
  // if dependency array is like [setBtnName] => everytime setBtnName changes useEffect is called
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("Header useEffect called!");
  });

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="log-btn"
            onClick={() => {
              if (btnName === "Login") {
                setBtnName("Logout");
              } else {
                setBtnName("Login");
              }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
