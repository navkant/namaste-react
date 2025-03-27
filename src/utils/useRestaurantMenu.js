import { useEffect, useState } from "react";

const useRestaurantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //     "http://127.0.0.1:8080/restaurant/" + restId + "/"
    // );
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.57590&lng=77.33450&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`,
      {
        "Access-Control-Allow-Origin": "*",
      }
    );
    const restData = await data.json();
    setRestInfo(restData);
  };

  return restInfo;
};

export default useRestaurantMenu;
