import React, { useState } from "react";
import MenuCategories from "./MenuCategories/MenuCategories";

function RestaurantCategory({ card, isActive, onToggle }) {
  const title = card?.title;
  const itemCards = card?.itemCards;
  const itemCount = card?.itemCards?.length;

  return (
    <>
      {itemCount && (
        <div
          className="flex w-6/12 mx-auto my-4 bg-gray-50 shadow-sm p-4 justify-between cursor-pointer mb-4"
          onClick={onToggle}
        >
          <h2>
            {title} - {itemCount}
          </h2>
          <span>{isActive ? "↑" : "↓"} </span>
        </div>
      )}
      {isActive && (
        <div>
          <MenuCategories
            nestedCategories={card?.categories}
            itemCards={itemCards}
          />
        </div>
      )}
    </>
  );
}

export default RestaurantCategory;
