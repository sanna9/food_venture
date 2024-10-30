import React from "react";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategories = ({ nestedCategories, itemCards }) => (
  <div>
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
        <MenuItem itemInfo={itemCard?.card?.info} />
      ))}
    </ul>
  </div>
);

export default MenuCategories;
