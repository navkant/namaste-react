import { useState } from "react";
import Item from "./Items";

const ItemCategory = ({ category, showItems, setvisibleCategoryIndex }) => {
    const onHeaderClick = () => {
        setvisibleCategoryIndex();
    };

    return (
        <div className="w-6/12  mx-auto my-4 p-4 shadow-lg bg-gray-100 ">
            <div
                className="flex justify-between cursor-pointer"
                onClick={onHeaderClick}
            >
                <span>
                    {category.title} ({category.itemCards.length})
                </span>
                <span>🔽</span>
            </div>
            {showItems && <Item items={category.itemCards} />}
        </div>
    );
};

export default ItemCategory;
