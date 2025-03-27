import { CLOUDINARY_URL } from "../utils/constants";

const Item = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-b-4 bg-gray-50 flex justify-between"
        >
          <div className="w-10/12">
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
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
          <div>
            <img
              className="rounded-lg object-contain w-28"
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
