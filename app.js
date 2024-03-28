import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}


const RestaurantCard = (props) => {
  const { resData } = props;
  const {name, cuisines, avgRating, costForTwo} = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{resData.info.sla.deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

let resList = [
  {
    "id": 1,
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-gaur-central-mall-raj-nagar-noida-254130",
        "type": "WEBLINK"
    },
    "info": {
        "aggregatedDiscountInfoV3": {
            "discountCalloutInfo": {
                "logoCtx": {
                    "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                },
                "message": "Free Delivery"
            }
        },
        "areaName": "Raj Nagar",
        "availability": {
            "nextCloseTime": "2023-08-16 23:25:00",
            "opened": true
        },
        "avgRating": 4.3,
        "avgRatingString": "4.3",
        "badges": {},
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "cloudinaryImageId": "08eee882fda81b68e5c36e3a5d89d8c0",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "American"
        ],
        "differentiatedUi": {
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "video": {}
            },
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT"
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "feeDetails": {
            "fees": [
                {
                    "fee": 4400,
                    "name": "BASE_DISTANCE"
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "restaurantId": "254130",
            "totalFee": 4400
        },
        "id": "254130",
        "isOpen": true,
        "locality": "Gaur Central Mall",
        "name": "McDonald's",
        "orderabilityCommunication": {
            "customIcon": {},
            "message": {},
            "subTitle": {},
            "title": {}
        },
        "parentId": "630",
        "restaurantOfferPresentationInfo": {},
        "reviewsSummary": {},
        "sla": {
            "deliveryTime": 28,
            "iconType": "ICON_TYPE_EMPTY",
            "lastMileTravel": 4.3,
            "lastMileTravelString": "4.3 km",
            "serviceability": "SERVICEABLE",
            "slaString": "28 mins"
        },
        "totalRatingsString": "5K+",
        "type": "F"
    }
},
{
    "id": 2,
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-a-block-raj-nagar-noida-57276",
        "type": "WEBLINK"
    },
    "info": {
        "aggregatedDiscountInfoV3": {
            "discountCalloutInfo": {
                "logoCtx": {
                    "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                },
                "message": "Free Delivery"
            },
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "areaName": "Raj Nagar",
        "availability": {
            "nextCloseTime": "2023-08-17 03:00:00",
            "opened": true
        },
        "avgRating": 4.2,
        "avgRatingString": "4.2",
        "badges": {},
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Burgers",
            "American"
        ],
        "differentiatedUi": {
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "video": {}
            },
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT"
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "feeDetails": {
            "fees": [
                {
                    "fee": 4400,
                    "name": "BASE_DISTANCE"
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "restaurantId": "57276",
            "totalFee": 4400
        },
        "id": "57276",
        "isOpen": true,
        "locality": "A Block",
        "name": "Burger King",
        "orderabilityCommunication": {
            "customIcon": {},
            "message": {},
            "subTitle": {},
            "title": {}
        },
        "parentId": "166",
        "restaurantOfferPresentationInfo": {},
        "reviewsSummary": {},
        "sla": {
            "deliveryTime": 30,
            "iconType": "ICON_TYPE_EMPTY",
            "lastMileTravel": 3.8,
            "lastMileTravelString": "3.8 km",
            "serviceability": "SERVICEABLE",
            "slaString": "30 mins"
        },
        "totalRatingsString": "10K+",
        "type": "F"
    }
},
{
  "id": 3,
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/grameen-kulfi-navyug-market-naya-ganj-noida-355360",
        "type": "WEBLINK"
    },
    "info": {
        "aggregatedDiscountInfoV3": {
            "discountCalloutInfo": {
                "logoCtx": {
                    "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                },
                "message": "Free Delivery"
            }
        },
        "areaName": "Naya Ganj",
        "availability": {
            "nextCloseTime": "2023-08-17 00:00:00",
            "opened": true
        },
        "avgRating": 4.5,
        "avgRatingString": "4.5",
        "badges": {},
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "cloudinaryImageId": "hbcf1dgnbb8bxzyc4onk",
        "costForTwo": "₹120 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts"
        ],
        "differentiatedUi": {
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "video": {}
            },
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT"
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "feeDetails": {
            "fees": [
                {
                    "fee": 4400,
                    "name": "BASE_DISTANCE"
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "restaurantId": "355360",
            "totalFee": 4400
        },
        "id": "355360",
        "isOpen": true,
        "locality": "Navyug Market",
        "name": "Grameen Kulfi",
        "orderabilityCommunication": {
            "customIcon": {},
            "message": {},
            "subTitle": {},
            "title": {}
        },
        "parentId": "12175",
        "restaurantOfferPresentationInfo": {},
        "reviewsSummary": {},
        "sla": {
            "deliveryTime": 30,
            "iconType": "ICON_TYPE_EMPTY",
            "lastMileTravel": 4.5,
            "lastMileTravelString": "4.5 km",
            "serviceability": "SERVICEABLE",
            "slaString": "30 mins"
        },
        "totalRatingsString": "100+",
        "type": "F",
        "veg": true
    }
}
]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
      </div>
      <div className="res-container">
        {
          resList.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant} />)
        }
      </div>
    </div> 
  )
}

 
const AppLayout = () => {
  return (
    <div className="app"> 
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
