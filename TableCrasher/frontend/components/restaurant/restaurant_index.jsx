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
    const restaurantItems = this.props.restaurants.map((restaurant) =>{
      return (
      <RestaurantItem restaurant={restaurant} key={restaurant.id} />);});
    return (
      <div>
        <section className="restaurant-index">
          <ul className="restaurant-list">
            {restaurantItems}
          </ul>
        </section>
      </div>
    );
  }
}
