import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  });

  const fetchMenu = async () => {
    const data = await fetch("http://127.0.0.1:8000/restaurant/254130/");
    const json = await data.json();
  };

  return (
    <div className="menu">
      <h1>Name Of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Drinks</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
