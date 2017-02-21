import React from 'react';
import RestaurantItemContainer from '../restaurant/restaurant_item_container';
import ReservationFormContainer from './reservation_form_container';
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

  reservationClick(time_slot, rest_id) {
    const reservation = {
      time_slot: time_slot,
      restaurant_id: rest_id,
      user_id: this.props.currentUser.id,
      party_size: this.props.reservations[0][0].party_size,
    };
    return(e) => {
      let changeReservedStatus = this.props.changeReservedStatus;
      this.props.createReservation(reservation).then((success) => {
        changeReservedStatus(true);
        hashHistory.push("/");
      });
    };
  }

  renderRestaurantList() {
    return (
      <div className="search-results-page">
        <ReservationFormContainer isSearchForm={true} />
        <ul className="search-results">
          {this.props.restaurants.map((restaurant, i) => (
            <li className="restaurant-item" key={restaurant.id}>
            <Link to={`restaurants/${restaurant.id}`} >
              <img src={restaurant.image_url} alt={restaurant.name}/>
            </Link>
              <div className="restaurant-info">
                <div className="info-header">
                <Link to={`restaurants/${restaurant.id}`} >
                  <h2 className="restaurant-name">{restaurant.name}</h2>
                </Link>
                  <div className={`price-${restaurant.price}`}>
                      <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
                      <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
                      <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
                      <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
                    </div>
                  </div>

                <h2 className="category">{restaurant.category}</h2>
                <ul className="reservation-list">
                  {this.props.reservations[i].map((reservation,j) => {
                    return(
                      <li key={j} className="reservations-time" onClick={this.reservationClick(reservation.time_slot, restaurant.id)}>
                        {parseTime(reservation.time_slot)}
                      </li>
                    );
                  })}
                </ul>
                </div>

            </li>
          )
          )
        }
        </ul>
      </div>
    );
  }

  render() {
    if(!this.props.fetching){
      if(this.props.restaurants.length > 0 && this.props.reservations.length > 1) {
        return (
          <div>
            {this.renderRestaurantList()}
          </div>
        );
      }
      else {
        return (
          <div className="errorContainer">
            <h2>Sorry, we couldn't find any restaurants matching your search.</h2>
          </div>
        );
      }
    }
    else {
      return (<div><i className="fa fa-spinner fa-spin fa-4x" aria-hidden="true"></i></div>);
    }
  }
}
