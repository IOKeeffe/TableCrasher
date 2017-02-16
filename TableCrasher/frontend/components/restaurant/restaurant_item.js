import React from 'react';
import { Link, hashHistory } from 'react-router';

export default ({restaurant}) => {
  const redirect = (id) => {
    // REINSTATE
    // hashHistory.push(`/restaurants/${id}`);
  };

  return (
  <li className="restaurant-item" onClick={(e) => redirect(e.currentTarget.id)}>
    <img src={restaurant.image_url} alt={restaurant.name}/>
    <h3>{restaurant.name}</h3>
    <h3>{restaurant.category}</h3>
  </li>
  );
};
