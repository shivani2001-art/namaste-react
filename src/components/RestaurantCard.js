import { IMAGE_CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } = props.restaurant.info;
    const imageUrl = `${IMAGE_CDN_URL}${cloudinaryImageId}`;
    return (
        <div className='restaurant-card-body'>
            <div className='restaurant-card'>
                <img className='restaurant-logo' src={imageUrl} alt={name} />
                <div className='rest-body-values'>
                    <h3>{name}</h3>
                    <p>Rating: {avgRating}</p>
                    <p>Cuisine: {cuisines.join(", ")}</p>
                    <p>Delivery Time: {sla.deliveryTime} mins</p>
                    <p>Cost for Two: {costForTwo}</p>
                </div>
            </div>
        </div>
    );
}

export default RestaurantCard;