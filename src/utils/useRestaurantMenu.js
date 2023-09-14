import { useEffect, useState } from "react";

const useRestaurantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "http://127.0.0.1:8000/restaurant/" + restId + "/"
    );
    const json = await data.json();
    setRestInfo(json.restaurant_data);
  };

  return restInfo;
};

export default useRestaurantMenu;
