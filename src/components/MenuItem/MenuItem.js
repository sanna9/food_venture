import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";

const formatPrice = (price) => `₹${(price / 100).toFixed(2)}`;

function MenuItem({ itemInfo }) {
  const dispatch = useDispatch();
  const handleAddItem = (itemInfo) => {
    //dispatch an action
    dispatch(addItem(itemInfo));
  };
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${itemInfo?.imageId}`;

  const priceDisplay = itemInfo?.price ? formatPrice(itemInfo?.price) : null;
  const defaultPriceDisplay = itemInfo?.defaultPrice
    ? formatPrice(itemInfo?.defaultPrice)
    : null;

  return (
    <li key={itemInfo?.id} className="flex p-4 my-2 ">
      <div className="w-9/12 text-left p-2">
        <p>{itemInfo?.isVeg ? "🌱 " : "🍖 "}</p>
        <h2 className="font-bold">{itemInfo?.name}</h2>
        <p className="font-medium">
          {priceDisplay || defaultPriceDisplay ? (
            <>
              {priceDisplay && (
                <span className="text-green-500"> {priceDisplay}</span>
              )}

              {defaultPriceDisplay && (
                <span className="text-gray-500">{defaultPriceDisplay}</span>
              )}
            </>
          ) : (
            "Price not available"
          )}
        </p>
        <p>{itemInfo?.description}</p>
      </div>
      <div className="w-3/12 relative">
        <img src={imageUrl} alt={itemInfo?.name} className="w-full" />
        <div className="absolute left-0 right-0 -bottom-6">
          <button
            className="p-3 bg-white rounded flex mx-auto border"
            onClick={() => handleAddItem(itemInfo)}
          >
            + Add
          </button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
