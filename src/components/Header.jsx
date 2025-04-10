import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
    // console.log("HEADER RENDERED!");
    // if no dependency array => useEffect is called on every render
    // if dependency array is empty => useEffect is called on initial render
    // if dependency array is like [setBtnName] => everytime setBtnName changes useEffect is called
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const userData = useContext(UserContext);
    // console.log("userData", userData);

    useEffect(() => {
        // console.log("Header useEffect called!");
    }, []);

    const cart = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-cyan-100 shadow-lg sm:bg-yellow-50 ">
            <div className="logo-container">
                <img className="w-20" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex m-4 p-4">
                    <li className="px-2">
                        Status: {onlineStatus ? "🟢" : "🔘"}
                    </li>
                    <li className="px-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/cart">🛒</Link>
                        {cart.length}
                    </li>
                    <button
                        className="log-btn"
                        onClick={() => {
                            if (btnName === "Login") {
                                setBtnName("Logout");
                            } else {
                                setBtnName("Login");
                            }
                        }}
                    >
                        {btnName}
                    </button>
                    <li className="px-2 font-bold">{userData.loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
