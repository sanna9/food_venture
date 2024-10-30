import Shimmer from "./Shimmer";
import MenuCategories from "./MenuCategories/MenuCategories";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);
  if (resInfo === null) return <Shimmer />;
  const resCards = resInfo?.cards;
  console.log("resCards", resInfo);

  const resName = resInfo?.cards[0]?.card?.card?.text;

  return (
    <div>
      <h1>Menu</h1>
      <h2>{resName}</h2>
      {resCards?.length === 0 ? (
        <p>No menu items available.</p>
      ) : (
        resCards.map((cardGroup, index) => {
          const categories =
            cardGroup?.groupedCard?.cardGroupMap?.REGULAR?.cards;

          return (
            <div key={index}>
              {categories?.map((category, catIndex) => {
                return (
                  <div key={catIndex}>
                    <h2>
                      {category?.card?.card?.title}-{" "}
                      {category?.card?.card?.itemCards?.length}
                    </h2>

                    <MenuCategories
                      nestedCategories={category?.card?.card?.categories}
                      itemCards={category?.card?.card?.itemCards}
                    />
                  </div>
                );
              })}
            </div>
          );
        })
      )}
    </div>
  );
};

export default RestaurantMenu;
