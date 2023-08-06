import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  // State variable - Super powerfull variable for dom manipulation
  let [listOfRestaurant1, setListOfRestaurant] = useState([
    {
      type: "restaurant",
      data: {
        id: 53656,
        name: "KFC",
        cuisine: ["Burger", "Fast Food", "Snacks"],
        rating: 4.3,
      },
    },
    {
      type: "restaurant",
      data: {
        id: 53657,
        name: "Dominos",
        cuisine: ["Pizza", "Fast Food", "Snacks"],
        rating: 3.8,
      },
    },
    {
      type: "restaurant",
      data: {
        id: 53658,
        name: "Wow Momos",
        cuisine: ["Chinese", "Fast Food", "Snacks"],
        rating: 3.2,
      },
    },
    {
      type: "restaurant",
      data: {
        id: 53659,
        name: "MacD",
        cuisine: ["Burger", "Fast Food", "Snacks"],
        rating: 4.2,
      },
    },
  ]);

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

  return (
    <div className="body">
      <div className="search">
        Search
        <button
          className="rest-btn"
          onClick={() => {
            top_rated_restaurant_list = listOfRestaurant1.filter(
              (res) => res.data.rating > 4
            );
            setListOfRestaurant(top_rated_restaurant_list);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="rest-container">
        {listOfRestaurant1.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
