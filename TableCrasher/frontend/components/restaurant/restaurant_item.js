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
    <h2>{restaurant.name}</h2>
    <h2 className="category">{restaurant.category}</h2>
  </li>
  );
};
