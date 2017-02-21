import React from 'react';
import RestaurantItemContainer from '../restaurant/restaurant_item_container';
import { hashHistory, Link } from 'react-router';
import { parseTime } from '../../util/utils';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  buildRestaurantItem(restaurant_reservation) {
    return (
      <div>
        <RestaurantItemContainer restaurant={this.props.fetchRestaurant(restaurant_reservation[0].id)}/>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.unmountReservations();
  }

  handleClick() {
    // this.
  }

  renderReservationLinks(i) {
    // return
  }

  render() {
    if(!this.props.fetching){
      return (
        <div>
        <ul>
          {this.props.restaurants.map((restaurant, i) => (
            <li className="restaurant-item" key={restaurant.id}>
              <Link to={`restaurants/${restaurant.id}`} >
              <img src={restaurant.image_url} alt={restaurant.name}/>
              <h2 className="restaurant-name">{restaurant.name}</h2>
              <div className={`price-${restaurant.price}`}>
                  <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
                  <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
                  <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
                  <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
                </div>

              <h2 className="category">{restaurant.category}</h2>
              </Link>
              <ul>
                {this.props.reservations[i].map((reservation,j) => {
                  return(
                    <li key={j}>
                      {parseTime(reservation.time_slot)}
                    </li>
                  );
                })}
              </ul>
            </li>
          )
          )
        }
        </ul>
        </div>
      );
    }
    else {
      return (<div><i className="fa fa-spinner fa-spin fa-4x" aria-hidden="true"></i></div>);
    }
  }
}
