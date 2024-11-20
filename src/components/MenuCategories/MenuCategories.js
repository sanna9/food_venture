import React from "react";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategories = ({ nestedCategories, itemCards }) => (
  <div className="w-6/12 mx-auto">
    {nestedCategories?.map((nestedCategory, index) => (
      <div key={index}>
        <h3>
          {nestedCategory?.title} {nestedCategory?.itemCards?.length}
        </h3>

        <ul>
          {nestedCategory?.itemCards?.map((nestedItemCard) => (
            <MenuItem itemInfo={nestedItemCard?.card?.info} />
          ))}
        </ul>
      </div>
    ))}

    <ul>
      {itemCards?.map((itemCard) => (
        <MenuItem
          key={itemCard?.card?.info?.name}
          itemInfo={itemCard?.card?.info}
        />
      ))}
    </ul>
  </div>
);

export default MenuCategories;
