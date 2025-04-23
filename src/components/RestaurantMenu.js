import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCategory from "./ItemsCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const [visibleCategoryIndex, setvisibleCategoryIndex] = useState(0);
    const { restId } = useParams();
    const restInfo = useRestaurantMenu(restId);

    if (restInfo === null) return <Shimmer />;

    categories = restInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    var itemCategories = categories.filter(
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
                <div className="w-6/12 mx-auto mt-4 flex justify-center">
                    <div className="w-96 flex  justify-between">
                        <div className="bg-black text-white p-2 rounded-lg">
                            <button>Veg filter</button>
                        </div>
                        <div className="bg-black text-white p-2 rounded-lg">
                            <button>Non-Veg Filter</button>
                        </div>
                    </div>
                </div>
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
