import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Restaurant = () => {

    const [allRestaurants, setallRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // Simulate fetching data
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9520781&lng=80.2404265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // Update state with fetched data
        setallRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    };

    // conditional rendering
    // if (allRestaurants.length === 0) {
    //     return <Shimmer/>;
    // }

    const isOnline = useOnlineStatus();
    if (!isOnline) {
        return <h1>Looks like you are offline. Please check your internet connection.</h1>;
    }

    console.log("Restaurant component loaded");
    
    return allRestaurants.length === 0 ? <Shimmer/> : (
        <div className='restaurant'>
            <div className='search'>
                <input 
                   type="text" 
                   value={searchText} 
                   onChange={(e) => setSearchText(e.target.value)} 
                />

                <button className="search-btn" 
                  onClick={() => { 
                    let search = filteredRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setallRestaurants(search);
                }}>Search</button>


                <button className="top-rated-btn" 
                  onClick={() => {
                    let topRated = allRestaurants.filter(restaurant => restaurant.info.avgRating > 4.2);
                    setallRestaurants(topRated);
                }}>Top Rated Restaurants</button>
            </div>

            
            <div className='restaurant-card'>
                {allRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
                ))}
            </div>
        </div>
    );
}

export default  Restaurant;