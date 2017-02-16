import React from 'react';
import RestaurantItem from './restaurant_item';

export default class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    const restaurantItems = this.props.restaurants.slice(0, 4).map((restaurant) =>{
      return (
      <RestaurantItem restaurant={restaurant} key={restaurant.id} />);});
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
