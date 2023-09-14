import Shimmer from "./Shimmer";
import { CLOUDINARY_URL } from "../utils/constants";
import StyleCard from "./StyleCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const restInfo = useRestaurantMenu(restId);

  if (restInfo === null) return <Shimmer />;

  return (
    <div className="restmenu-card" style={StyleCard}>
      <img
        className="rest-logo"
        src={CLOUDINARY_URL + restInfo.info.cloudinaryImageId}
        alt="rest-logo"
      />
      <h4>{restInfo.info.name}</h4>
      <h5>{restInfo.info.cuisines.join(", ")}</h5>
      <h6>{restInfo.info.avgRating} stars</h6>
      <h6>{restInfo.info.areaName}</h6>
      <h6>{restInfo.info.costForTwo}</h6>
    </div>
  );
};

export default RestaurantMenu;
