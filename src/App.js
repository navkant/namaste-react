import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Groceries";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy } from "react";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
import Cart from "./components/Cart";
import Playground from "./components/Playground";
import { StrictMode } from "react";

const Grocery = lazy(() => import("./components/Groceries"));

const AppLayout = () => {
    const [userName, setUserName] = useState("Anonymous");

    return (
        <Provider store={appStore}>
            <UserContext.Provider
                value={{ loggedInUser: userName, setUserName }}
            >
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:restId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery />{" "}
                    </Suspense>
                ),
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/playground",
                element: <Playground />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
