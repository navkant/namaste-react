import { useSelector } from "react-redux";
import { CLOUDINARY_URL } from "../utils/constants";
import { useState } from "react";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    var cartTotal = 0;
    const deliveryCharge = 45;
    cartItems.map((item) => {
        itemPrice = item.card.info.price
            ? item.card.info.price / 100
            : item.card.info.defaultPrice / 100;
        console.log(itemPrice);
        cartTotal += itemPrice;
    });
    const gstAndServiceCharge = (cartTotal * 5) / 100;
    console.log("gst and service charge", gstAndServiceCharge);
    console.log("cart total", cartTotal);
    console.log("delivery charge", deliveryCharge);

    return (
        <div className="flex justify-center">
            <div className=" w-6/12 flex flex-col">
                <div className="m-4 text-2xl text-center font-bold">CART</div>
                {cartItems.map((item) => {
                    return (
                        <div
                            key={item.card.info.id}
                            className="m-2 p-2 h-[100px] border-b-2  flex justify-between"
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
                                    <p className="text-xs">
                                        {item.card.info.description}
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <img
                                    className="rounded-lg w-28 h-full object-cover"
                                    src={
                                        CLOUDINARY_URL + item.card.info.imageId
                                    }
                                    alt="rest-logo"
                                />
                            </div>
                        </div>
                    );
                })}

                <div className="m-2 p-2 font-bold flex justify-end">
                    <div className="w-6/12">
                        <div className="flex justify-between">
                            <div>Delivery Charges:</div>
                            <div>{deliveryCharge}</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Gst, Service Charge: </div>
                            <div> {gstAndServiceCharge}</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Cart: </div>
                            <div>{cartTotal}</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Total:</div>
                            <div>
                                {cartTotal +
                                    deliveryCharge +
                                    gstAndServiceCharge}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
