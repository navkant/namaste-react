import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State variable - Super powerfull variable for dom manipulation
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  // normal JS variable
  // let listOfRestaurant = [
  //   {
  //     type: "restaurant",
  //     data: {
  //       id: 53656,
  //       name: "KFC",
  //       cuisine: ["Burger", "Fast Food", "Snacks"],
  //       rating: 4.3,
  //     },
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       id: 53657,
  //       name: "Dominos",
  //       cuisine: ["Pizza", "Fast Food", "Snacks"],
  //       rating: 3.8,
  //     },
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       id: 53658,
  //       name: "Wow Momos",
  //       cuisine: ["Chinese", "Fast Food", "Snacks"],
  //       rating: 3.2,
  //     },
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       id: 53659,
  //       name: "MacD",
  //       cuisine: ["Burger", "Fast Food", "Snacks"],
  //       rating: 4.2,
  //     },
  //   },
  // ];

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
              (res) => res.info.avgRating > 4.3
            );
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
