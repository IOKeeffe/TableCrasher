import React from 'react';
import { Link, hashHistory } from 'react-router';

export default (props) => {

  return (
    <li className="restaurant-item" onClick={props.onClick}>
      <img src={props.restaurant.image_url} alt={props.restaurant.name}/>
      <h2 className="restaurant-name">{props.restaurant.name}</h2>
      <div className={`price-${props.restaurant.price}`}>
          <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
          <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
          <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
          <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
        </div>
      <h2 className="category">{props.restaurant.category}</h2>
    </li>
  );
};
