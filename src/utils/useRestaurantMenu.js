import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constant";


const useRestaurantMenu = (resId) => {

    const [restaurantInfo, setRestaurantInfo] = useState(null);
    
    useEffect(() => {
        fetchMenusData();
    }, []);

    const fetchMenusData = async () => {
        const response = await fetch(`${MENU_API_URL}${resId}`);
        const json = await response.json();
        setRestaurantInfo(json?.data);

    }

    return restaurantInfo;
}

export default useRestaurantMenu;