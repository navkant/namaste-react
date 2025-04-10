import StyleCard from "./StyleCard";
import { CLOUDINARY_URL } from "../utils/constants";
import UserContext from "../utils/userContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
    const userData = useContext(UserContext);
    return (
        <div className="rounded-lg m-2 p-2 w-[350px] h-[350px] shadow-lg bg-gray-100 hover:bg-gray-200">
            <div className="h-1/2">
                <img
                    className="h-full w-full object-cover"
                    src={CLOUDINARY_URL + props.resData.info.cloudinaryImageId}
                    alt="rest-logo"
                />
            </div>
            <div className="">
                <h4 className=" font-bold py-1 text-lg ">
                    {props.resData.info.name}
                </h4>
                <h5 className="flex flex-wrapp ">
                    {props.resData.info.cuisines.splice(0, 3).join(", ")}
                </h5>
                <h6>{props.resData.info.avgRating} stars</h6>
                <h6>{props.resData.info.areaName}</h6>
                <h1>User: {userData.loggedInUser}</h1>
            </div>
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
