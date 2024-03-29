import RestaurantCard from "./Restaurant";
import { useState, useEffect } from "react";

const Caraousel = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  useEffect(() => {
    console.log("Caraousel Rendered!");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://127.0.0.1:8000/restaurants/");
    const json = await data.json();
    const top_rated = json.restaurant_list.filter(
      (res) => res.info.avgRating >= 4.2
    );
    console.log(top_rated);
    setListOfRestaurant(top_rated);
  };

  return (
    <div className="caraousel">
      <div className="caraousel-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Caraousel;
