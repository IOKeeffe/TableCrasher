import React from 'react';
import RestaurantItemContainer from '../restaurant/restaurant_item_container';
import { hashHistory, Link } from 'react-router';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.parseTime = this.parseTime.bind(this);
  }

  componentDidMount() {
    // debugger
  }
  componentWillReceiveProps(newProps) {
  }

  buildRestaurantItem(restaurant_reservation) {
    return (
      <div>
        <RestaurantItemContainer restaurant={this.props.fetchRestaurant(restaurant_reservation[0].id)}/>
      </div>
    );
  }

  handleClick() {
    // this.
  }

  renderReservationLinks(i) {
    // return
  }

  parseTime(timeSlot) {
    let time = new Date(timeSlot);

    let minutes = time.getMinutes();
    if (minutes === 0) {
      minutes = "00";
    }
    let hours = time.getHours();
    let meridian = "AM";
    if (hours > 12 ) {
      hours -= 12;
      meridian = "PM";
    }
    return `${hours}:${minutes} ${meridian}`;

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
                <ul className="reservation-list">
                </ul>
              <h2 className="category">{restaurant.category}</h2>
              </Link>
              {this.props.reservations[i].map((reservation,j) => {
                return(
                  <li key={j}>
                  {this.parseTime(reservation.time_slot)}
                  </li>
                );
              })}
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
