import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCategory from "./ItemsCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { restId } = useParams();
    const restInfo = useRestaurantMenu(restId);
    const [visibleCategoryIndex, setvisibleCategoryIndex] = useState(0);

    if (restInfo === null) return <Shimmer />;

    categories = restInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    const itemCategories = categories.filter(
        (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center m-4">
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
                {itemCategories.map((category, index) => (
                    <ItemCategory
                        key={category.categoryId}
                        category={category?.card?.card}
                        showItems={
                            index === visibleCategoryIndex ? true : false
                        }
                        setvisibleCategoryIndex={() =>
                            setvisibleCategoryIndex(index)
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
