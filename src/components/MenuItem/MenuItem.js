import React from "react";

const formatPrice = (price) => `₹${(price / 100).toFixed(2)}`;

function MenuItem({ itemInfo }) {
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${itemInfo?.imageId}`;
  return (
    <li key={itemInfo?.id}>
      <img className="w-20" src={imageUrl} alt={itemInfo?.name} />
      <h3>{itemInfo?.name}</h3>
      <p>{itemInfo?.description}</p>
      <p>Price: {formatPrice(itemInfo?.price)}</p>
      <p>{itemInfo?.isVeg ? "🌱 Vegetarian" : "🍖 Non-Vegetarian"}</p>
    </li>
  );
}

export default MenuItem;
