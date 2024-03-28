import RestaurantCard from "./Restaurant";
import { useState, useEffect } from "react";

const Body = () => {
  // local state variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  useEffect(() => {
    console.log("use effect called !!");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://127.0.0.1:8000/restaurants/");
    const json = await data.json();
    setListOfRestaurant(json.restaurant_list);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            setListOfRestaurant(
              listOfRestaurants.filter((res) => res.info.avgRating >= 4.2)
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
