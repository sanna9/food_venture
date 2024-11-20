import React from "react";
import { CDN_URL } from "../utils/constants";
function RestaurantCard(props) {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;
  return (
    <div className="res-card" style={{ backgroundColor: "lightgrey" }}>
      <img src={CDN_URL + cloudinaryImageId} alt="logo" width={200} />
      <div className="res-card-data">
        <h3>{name}</h3>
        <p>{cuisines.join(" ,")}</p>
        <b>{avgRating} stars</b>
        <p>{costForTwo}</p>
        <p>{sla.deliveryTime} minutes</p>
      </div>
    </div>
  );
}

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label> Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
