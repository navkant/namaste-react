import StyleCard from "./StyleCard";
import { CLOUDINARY_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  return (
    <div className="rest-card" style={StyleCard}>
      <img
        className="rest-logo"
        src={CLOUDINARY_URL + props.resData.info.cloudinaryImageId}
        alt="rest-logo"
      />
      <h4>{props.resData.info.name}</h4>
      <h5>{props.resData.info.cuisines.join(", ")}</h5>
      <h6>{props.resData.info.avgRating} stars</h6>
      <h6>{props.resData.info.areaName}</h6>
    </div>
  );
};

export default RestaurantCard;
