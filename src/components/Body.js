import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Body() {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const topRes = () => {
    const filteredResList = listOfRes.filter((res) => res.info.avgRating > 4);
    setListOfRes(filteredResList);
  };
  const onlineStatus = useOnlineStatus();

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const dataRes =
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRes(dataRes);
    setFilteredRestaurant(dataRes);
  };

  //whenever state variables update, react triggers a reconcilitaion cycle re-renders the component
  useEffect(() => {
    fetchData();
  }, []);

  const searchRes = () => {
    const filteredRes = listOfRes.filter((e) =>
      e.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredRestaurant(filteredRes);
  };
  console.log("filteredRestaurant", filteredRestaurant);

  return listOfRes?.length === 0 || filteredRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {onlineStatus ? <p>Online</p> : <p>Offline</p>}
      <div className="flex justify-space-between p-10">
        <div className="search">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button onClick={searchRes}>search</button>
        </div>
        <button className="filter-btn" onClick={topRes}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
