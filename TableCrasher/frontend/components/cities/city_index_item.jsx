import React from 'react';

export default ({city, fetchCityRestaurants}) => {
  const cityClick = (e) => {
    fetchCityRestaurants(e);
  };

  return (
  <li className="gallery-item" onClick={() => {cityClick(city.id);}}>
        <img src={city.imageUrl} alt={city.name} />
      <div className="text-div">
        <h2>{city.name}</h2>
        <h3>{city.restaurantCount} Restaurants</h3>
      </div>
  </li>

  );
};
