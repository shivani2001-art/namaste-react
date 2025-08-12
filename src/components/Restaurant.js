import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, use} from "react";

const Restaurant = () => {

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // Simulate fetching data
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9520781&lng=80.2404265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        // Update state with fetched data
        setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    };

    return (
        <div className='restaurant'>
            <div className='search'>
                <button onClick={() => {
                    let topRated = filteredRestaurants.filter(restaurant => restaurant.info.avgRating > 4);
                    setFilteredRestaurants(topRated);
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