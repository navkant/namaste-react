import Shimmer from "./Shimmer";
import { CLOUDINARY_URL } from "../utils/constants";
import StyleCard from "./StyleCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCategory from "./ItemsCategory";

const RestaurantMenu = () => {
    const { restId } = useParams();
    const restInfo = useRestaurantMenu(restId);

    if (restInfo === null) return <Shimmer />;

    categories = restInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    // console.log(restInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    const itemCategories = categories.filter(
        (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(itemCategories);

    return (
        <div className="text-center m-4">
            {/* <img
                className="rest-logo"
                src={CLOUDINARY_URL + restInfo.info.cloudinaryImageId}
                alt="rest-logo"
            /> */}
            <div>
                <h1 className="font-bold text-2xl my-6">
                    {restInfo.data.cards[0].card.card.text}
                </h1>
                <p>
                    {restInfo.data.cards[2].card.card.info.avgRating} (
                    {restInfo.data.cards[2].card.card.info.totalRatingsString})
                    · ({restInfo.data.cards[2].card.card.info.costForTwoMessage}
                    )
                </p>
                <p>
                    {restInfo.data.cards[2].card.card.info.cuisines.join(", ")}
                </p>
                <ItemCategory />
            </div>
        </div>
    );
};

export default RestaurantMenu;
