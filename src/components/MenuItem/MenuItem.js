import React from "react";

const formatPrice = (price) => `₹${(price / 100).toFixed(2)}`;

function MenuItem({ itemInfo }) {
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${itemInfo?.imageId}`;
  return (
    <li key={itemInfo?.id} className="flex p-4 ">
      <div className="w-9/12">
        <p>{itemInfo?.isVeg ? "🌱 " : "🍖 "}</p>
        <h2 className="font-bold">{itemInfo?.name}</h2>
        <p className="font-medium"> {formatPrice(itemInfo?.price)}</p>
        <p>{itemInfo?.description}</p>
      </div>
      <div className="w-3/12 relative">
        <img src={imageUrl} alt={itemInfo?.name} className="w-full" />
        <div className="absolute left-0 right-0 -bottom-6">
          <button className="p-3 bg-white rounded flex mx-auto border">
            {" "}
            + Add
          </button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
