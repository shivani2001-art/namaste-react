import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines
  } = restaurantInfo?.cards[2]?.card?.card?.info || {};

  const cards = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const menuCategories = cards.slice(2);

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
        <h3>Menu Categories</h3>
        {menuCategories.map((card, index) => (
            <li key={index}>
                {card?.card?.card?.itemCards?.map((item, itemIndex) => {
                const price = (item.card.info.defaultPrice || item.card.info.price) / 100;
                return (
                    <div key={itemIndex}>
                    <p>{item.card.info.name} - Price: {price}</p>
                    </div>
                );
                })}
            </li>
        ))}
      {/* <ul>
        <li>{cards[2]?.card?.card?.itemCards[0]?.card?.info?.name}: {cards[2]?.card?.card?.itemCards[0]?.card?.info?.defaultPrice/100}</li>
        <li>{cards[2]?.card?.card?.itemCards[1]?.card?.info?.name}: {cards[2]?.card?.card?.itemCards[1]?.card?.info?.defaultPrice/100}</li>
        <li>{cards[2]?.card?.card?.itemCards[2]?.card?.info?.name}: {cards[2]?.card?.card?.itemCards[2]?.card?.info?.defaultPrice/100}</li>
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;