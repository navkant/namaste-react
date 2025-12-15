import { CLOUDINARY_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Item = ({ items }) => {
    const dispatch = useDispatch();
    
    const addButtonClick = (item) => {
        console.log(item);
        dispatch(addItem(item));
    };
    return (
        <div>
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className="m-2 p-2 border-b-4 bg-gray-50 flex justify-between"
                >
                    <div className="w-9/12">
                        <div className="">
                            <span>{item.card.info.name}</span>
                            <span>
                                - ₹
                                {item.card.info.price
                                    ? item.card.info.price / 100
                                    : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <div>
                            <p className="text-xs">
                                {item.card.info.description}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="absolute p-1 mx-10 my-16 text-xs bg-black text-white rounded-lg">
                            <button onClick={() => addButtonClick(item)}>
                                {" "}
                                Add +
                            </button>
                        </div>
                        <img
                            className="rounded-lg object-cover w-28 h-20"
                            src={CLOUDINARY_URL + item.card.info.imageId}
                            alt="rest-logo"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Item;
