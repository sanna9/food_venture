import Shimmer from "./Shimmer";
import MenuCategories from "./MenuCategories/MenuCategories";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import { useEffect, useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [activeIndex, setActiveIndex] = useState(2);

  const resInfo = useRestrauntMenu(resId);
  if (resInfo === null) return <Shimmer />;
  const resCards = resInfo?.cards;

  const resName = resInfo?.cards[0]?.card?.card?.text;
  const menuCategories = resCards
    ?.map((cardGroup) => cardGroup?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    .filter((card) => card !== undefined)
    .flat();

  const handleToggle = (catIndex) => {
    setActiveIndex(activeIndex === catIndex ? null : catIndex);
  };

  return (
    <div>
      <h1>Menu</h1>
      <h2>{resName}</h2>
      {resCards?.length === 0 ? (
        <p>No menu items available.</p>
      ) : (
        <div>
          {menuCategories?.map((category, catIndex) => {
            return (
              <div key={catIndex}>
                <RestaurantCategory
                  key={catIndex}
                  card={category?.card?.card}
                  isActive={activeIndex === catIndex ? true : false}
                  onToggle={() => handleToggle(catIndex)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
