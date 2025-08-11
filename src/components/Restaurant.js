import RestaurantCard from "./RestaurantCard";
import ResList from "../utils/mockData";
import { useState } from "react";

const Restaurant = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState(ResList);

    return (
        <div className='restaurant'>
            <div className='search'>
                <button onClick={() => {
                    let filteredRestaurants = ResList.filter(restaurant => restaurant.info.avgRating > 4);
                    setFilteredRestaurants(filteredRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='restaurant-card'>
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
                ))}
            </div>
        </div>
    );
}

export default  Restaurant;