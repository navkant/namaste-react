import StyleCard from "./StyleCard";
import { CLOUDINARY_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  return (
    <div className=" rounded-lg m-2 p-2 w-[250px] h-[400px] shadow-lg bg-gray-100 hover:bg-gray-200 ">
      <img
        className="rounded-lg  "
        src={CLOUDINARY_URL + props.resData.info.cloudinaryImageId}
        alt="rest-logo"
      />
      <h4 className=" font-bold py-1 text-lg ">{props.resData.info.name}</h4>
      <h5 className="flex flex-wrapp ">
        {props.resData.info.cuisines.join(", ")}
      </h5>
      <h6>{props.resData.info.avgRating} stars</h6>
      <h6>{props.resData.info.areaName}</h6>
    </div>
  );
};

// higher order component
// input RestaurantCard ==> RestairantCardPromoted ;

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-black text-white m-2 p-2 rounded-lg ">
          {" "}
          Promoted{" "}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
