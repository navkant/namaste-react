import React from "react";
import ReactDOM from "react-dom/client";

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  return (
    <div className="rest-card" style={styleCard}>
      <img
        className="rest-logo"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ulfsz78zsp4owhrf0wfy"
        alt="rest-logo"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.rating}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        <RestaurantCard
          resName="Meghana Foods"
          rating="4 Star"
          cuisine="Indian"
          deliveryTime="33 Mins"
        />
        <RestaurantCard
          resName="KFC"
          rating="4 Star"
          cuisine="Fastfood"
          deliveryTime="33 Mins"
        />
        <RestaurantCard
          resName="Wow Momos"
          rating="4 Star"
          cuisine="Chinese"
          deliveryTime="33 Mins"
        />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
