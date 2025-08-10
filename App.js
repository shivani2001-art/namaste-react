import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div className='app'>
        <Heading />
        <Restaurant />
    </div>
  );
}

const Heading = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All" alt="Food App" />
      </div>
        <div className='nav-items'>
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Cart</a></li>
            </ul>
        </div>
    </div>
  );
}

const ResList = [
  {
    info: {
      id: "385824",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
      locality: "Sinchai Colony",
      areaName: "Mohan Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.6",
      totalRatingsString: "322",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 13.4,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "13.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-08-10 22:45:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg"
          }
        ]
      },
      isOpen: true,
      type: "F"
    }
  },
  {
    info: {
      id: "151518",
      name: "Bakery World",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Parasia Road",
      areaName: "Parasia Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
      avgRating: 4.3,
      veg: true,
      parentId: "40363",
      avgRatingString: "4.3",
      totalRatingsString: "286",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 14.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "14.1 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-08-10 22:30:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg"
          }
        ]
      },
      isOpen: true,
      type: "F"
    }
  },
  {
    info: {
      id: "951058",
      name: "Cake Point",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/31/fa2b070a-7908-4ac7-b66f-f63633284c0d_951058.jpg",
      locality: "Chhindwara City",
      areaName: "Chhindwara City",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Cakes", "Desserts"],
      avgRating: 3.7,
      veg: true,
      parentId: "16588",
      avgRatingString: "3.7",
      totalRatingsString: "3",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 13.2,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "13.2 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-08-10 22:00:00",
        opened: true
      },
      badges: {
        imageBadges: []
      },
      isOpen: true,
      type: "F"
    }
  },
  {
    info: {
      id: "912754",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG",
      locality: "SOUTH CIVIL LINE",
      areaName: "Chhindwara City",
      costForTwo: "₹300 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 3.8,
      veg: true,
      parentId: "1330",
      avgRatingString: "3.8",
      totalRatingsString: "16",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 12.6,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "12.6 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-08-10 22:00:00",
        opened: true
      },
      badges: {
        imageBadges: []
      },
      isOpen: true,
      type: "F"
    }
  },
  {
    info: {
      id: "1046503",
      name: "The Cake House",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/17/6a4369e1-0c9c-49f9-8132-5be682a7831f_1046503.jpg",
      locality: "Chhindwara City",
      areaName: "Chhindwara City",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Cakes", "Desserts"],
      avgRating: 3.8,
      veg: true,
      parentId: "608777",
      avgRatingString: "3.8",
      totalRatingsString: "111",
      sla: {
        deliveryTime: 53,
        lastMileTravel: 13.4,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "13.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-08-10 22:00:00",
        opened: true
      },
      badges: {
        imageBadges: []
      },
      isOpen: true,
      type: "F"
    }
  },
  {
    info: {
      id: "164782",
      name: "Bakers Lounge",
      cloudinaryImageId: "eohdm5sdnq6e2u46xeux",
      locality: "Teacher's Colony",
      areaName: "VIP Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Cakes", "Desserts"],
      avgRating: 4.4,
      veg: true,
      parentId: "164782",
      avgRatingString: "4.4",
      totalRatingsString: "4.6K+",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 14.4,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "14.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-08-10 22:00:00",
        opened: true
      },
      badges: {
        imageBadges: []
      },
      isOpen: true,
      type: "F"
    }
  },
  {
    info: {
      id: "101802",
      name: "Cake Plaza",
      cloudinaryImageId: "vkhcohhmqfczycw9vsar",
      locality: "railway station",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Cakes", "Desserts"],
      avgRating: 4.3,
      veg: true,
      parentId: "101802",
      avgRatingString: "4.3",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 11.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "11.3 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2025-08-10 22:00:00",
        opened: true
      },
      badges: {
        imageBadges: []
      },
      isOpen: true,
      type: "F"
    }
  }
];

const Restaurant = () => {
    return (
        <div className='restaurant'>
            <div className='search'>
                <h2>Search</h2>
            </div>
            <div className='restaurant-card'>
                {ResList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
                ))}
            </div>
        </div>
    );
}

const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } = props.restaurant.info;
    const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;
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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);