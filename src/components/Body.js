import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State variable - Super powerfull variable for dom manipulation
  const [restaurantList, setRestaurantList] = useState([]);
  var [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const json = require("./rest_list.json");
    for (i = 0; i < json.data.cards.length; i++) {
      if (json.data.cards[i].card.card.id === "top_brands_for_you") {
        setRestaurantList(
          json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants
        );
        setFilteredRestaurantList(
          json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants
        );
      }
    }
  };

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
                console.log(filteredRestaurant);
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
            console.log(top_rated_restaurant_list);
            setFilteredRestaurantList(top_rated_restaurant_list);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="rest-container">
        {filteredRestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
