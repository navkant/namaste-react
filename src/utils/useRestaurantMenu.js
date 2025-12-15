import { useEffect, useState } from "react";
import { LAT, LNG } from "./constants";

const useRestaurantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //     "http://127.0.0.1:8080/restaurant/" + restId + "/"
    // );
    const restaurantMenuUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${LAT}&lng=${LNG}&restaurantId=${restId}`; //&catalog_qa=undefined&submitAction=ENTER`;
    const data = await fetch(restaurantMenuUrl);
    console.log(`Restaurant data: ${restaurantMenuUrl}`);
    const restData = await data.json();
    setRestInfo(restData);
  };

  return restInfo;
};

export default useRestaurantMenu;

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=150602&catalog_qa=undefined&submitAction=ENTER%20Request%20Method
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=150602&catalog_qa=undefined&submitAction=ENTER
