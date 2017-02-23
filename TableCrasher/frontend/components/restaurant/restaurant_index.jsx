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
    if(this.props.currentUser) {
      this.props.fetchFavorites();
    }
  }

  redirect(id) {
    hashHistory.push(`/restaurants/${id}`);
  }

  renderRestaurantItems() {
    return (
      _.shuffle(this.props.restaurants).map((restaurant) =>{
        return (
          <RestaurantItem favorites={this.props.favorites} restaurant={restaurant} key={restaurant.id} onClick={(e) => {e.preventDefault(); return this.redirect(restaurant.id);}}/>
        );})
    );
  }

  render() {
    let cityName = this.props.currentCity ? this.props.currentCity.city.name : '';

    if(!this.props.fetching) {
      return (
        <section className="restaurant-index">
          <section className="restaurant-index-header">
            <h2>{`${cityName} Restaurants`}</h2>
          </section>
          <ul className="restaurant-list">
            {this.renderRestaurantItems()}
          </ul>
        </section>);
    }
    else {
      return (<div><i className="fa fa-spinner fa-spin fa-4x" aria-hidden="true"></i></div>);
    }
  }
}
