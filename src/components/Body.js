import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State variable - Super powerfull variable for dom manipulation
  const [restaurantList, setRestaurantList] = useState([]);
  var [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const json = require("./rest_list.json");
    const data = await fetch("http://127.0.0.1:8000/restaurants/", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    const rest_list = await data.json();
    setRestaurantList(rest_list.restaurant_list);
    setFilteredRestaurantList(rest_list.restaurant_list);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline, check ur internet connection</h1>;
  }

  if (filteredRestaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              if (filteredRestaurant.length == 0) {
                setFilteredRestaurantList(restaurantList);
              } else {
                setFilteredRestaurantList(filteredRestaurant);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="rest-btn"
          onClick={() => {
            top_rated_restaurant_list = restaurantList.filter(
              (res) => res.info.avgRating > 4.1
            );
            setFilteredRestaurantList(top_rated_restaurant_list);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="rest-container">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
