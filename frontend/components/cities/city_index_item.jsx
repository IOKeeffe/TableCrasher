import React from 'react';

export default ({city, fetchCityRestaurants}) => {
  const cityClick = (cityId) => {
    window.scrollTo(0,0); 
    fetchCityRestaurants(cityId);
  };


  return (
  <li className="gallery-item" onClick={() => {cityClick(city.id);}}>
        <img src={city.image} alt={city.name} />
      <div className="text-div">
        <h2>{city.name}</h2>
        <h3>{city.restaurantCount} Restaurants</h3>
      </div>
  </li>

  );
};
