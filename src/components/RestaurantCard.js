import StyleCard from "./StyleCard";
import { REST_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  return (
    <div className="rest-card" style={StyleCard}>
      <img className="rest-logo" src={REST_IMG_URL} alt="rest-logo" />
      <h3>{props.resData.data.name}</h3>
      <h4>{props.resData.data.cuisine.join(", ")}</h4>
      <h4>{props.resData.data.rating}</h4>
    </div>
  );
};

export default RestaurantCard;
