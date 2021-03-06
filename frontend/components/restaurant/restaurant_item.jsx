import React from 'react';
import { Link, hashHistory } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

export default (props) => {
  return (
    <li className="restaurant-item" onClick={props.onClick}>
      <img src={props.restaurant.image.thumb} alt={props.restaurant.name}/>
      <div className="title">
        <h2 className="restaurant-name">{props.restaurant.name}</h2>
        <i className={`fa fa-heart ${props.favorites && props.favorites[props.restaurant.id]?'favorite-restaurant':''}`} aria-hidden="true"></i>
      </div>
      <StarRatingComponent
        name={`rating-${props.restaurant.average_rating}`}
        starCount={5}
        value={props.restaurant.average_rating}
        editing={false}
      />
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
