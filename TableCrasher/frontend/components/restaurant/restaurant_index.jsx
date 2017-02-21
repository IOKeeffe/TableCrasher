import React from 'react';
import RestaurantItem from './restaurant_item';
import {shuffle} from 'lodash';
import {hashHistory} from 'react-router';

export default class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllRestaurants();
  }

  redirect(id) {
    hashHistory.push(`/restaurants/${id}`);
  }

  render() {
    const restaurantItems = _.shuffle(this.props.restaurants).slice(0, 4).map((restaurant) =>{
      return (
        <RestaurantItem restaurant={restaurant} key={restaurant.id} onClick={(e) => {e.preventDefault(); return this.redirect(restaurant.id);}}/>
      );});
    return (
        <section className="restaurant-index">
          <section className="restaurant-index-header">
            <h2>Restaurants</h2>
          </section>
          <ul className="restaurant-list">

            {restaurantItems}
          </ul>
        </section>
    );
  }
}
