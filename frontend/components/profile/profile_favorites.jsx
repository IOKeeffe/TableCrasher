import React from 'react';
import { loadingDiv } from '../../util/utils';
import { Link } from 'react-router';
import Sidebar from './sidebar';
import RestaurantItem from '../restaurant/restaurant_item';
import StarRatingComponent from 'react-star-rating-component';

export default class ProfileFavorites extends React.Component{
  constructor(props) {
    super(props);
    this.fetchRestaurants = this.fetchRestaurants.bind(this);
  }

  componentDidMount() {
    this.props.fetchFavorites().then((favorites) => this.fetchRestaurants());
  }

  fetchRestaurants() {
    let ids = this.props.favorites.map((favorite) => favorite.restaurant_id);
    this.props.fetchRestaurantsByIds(ids);
  }



  render() {
    if(this.props.restaurants.length > 0 && !this.props.fetching)
      return (
        <div className="profile-page">
          <Sidebar />
          <ul className="profile-content">
          <h2 className="">My Favorite Restaurants</h2>
            {this.props.restaurants.map ((restaurant) => {
              return (
                <Link to={`restaurants/${restaurant.id}`} key={restaurant.id}>
                <li className="restaurant-item">
                  <img src={restaurant.image.thumb} alt={restaurant.name}/>
                  <div className="info">
                    <div className="title">
                      <h2 className="restaurant-name">{restaurant.name}</h2>
                    </div>
                    <StarRatingComponent
                      name={`rating-${restaurant.average_rating}`}
                      starCount={5}
                      value={restaurant.average_rating}
                      editing={false}
                    />
                    <div className={`price-${restaurant.price}`}>
                        <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
                        <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
                        <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
                        <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
                      </div>
                    <h2 className="category">{restaurant.category}</h2>
                    </div>
                </li>
                </Link>
              );
            })}
          </ul>
        </div>
      );
    else {
      return (loadingDiv());
    }
  }
}
