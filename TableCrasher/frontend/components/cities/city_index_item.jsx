import React from 'react';

export default ({city, fetchCityRestaurants}) => {
  const cityClick = (e) => {
    fetchCityRestaurants(e);
  };

  return (
  <li className="city-item" onClick={() => {cityClick(city.id);}}>
      <div className="img-div" >
        <img src={city.imageUrl} alt={city.name} />
      </div>
      <div className="text-div">
        <h2>{city.name}</h2>
        <h3>{city.restaurantCount} Restaurants</h3>
      </div>
  </li>

  );
};