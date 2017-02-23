import React from 'react';
import {hashHistory} from 'react-router';
import { parseTime, parseDate, combineDateAndTime } from '../../util/utils';
export default class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {errorMessages: [], searchTerm: "", selected: "", date: new Date(), time: new Date(169200000), partySize: 1, detail: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFocus = this.changeFocus.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  componentWillUnmount() {
  }

  changeFocus(input) {
    if(this.state.selected === "") {
      this.setState({selected: input});
    }
    else {
      this.setState({selected: ""});
    }
  }

  renderErrors() {
    if( this.state.errorMessages.length > 0 ) {
      return (<ul className="error-messages">
          {this.state.errorMessages.map((error, i) => {
            return (<li key={i}>{error}</li>);
          })}
        </ul>
      );
    }
    if( this.props.errorMessages.responseJSON ) {
      return (<ul className="error-messages">
          {this.props.errorMessages.responseJSON.map((error, i) => {
            return (<li key={i}>{error}</li>);
          })}
        </ul>
      );
    }
  }

  renderSuccess() {
    if( this.props.reservation_confirmed ) {
      let reservation = this.props.reservations.currentReservation;
      let confirmationString = `Reservation at ${reservation.restaurant_name} at ${parseTime(reservation.time_slot)} on ${parseDate(reservation.time_slot)} confirmed!`;
      return (<h2>{confirmationString}</h2>);
    }
  }

  reservationClick(reservation) {
    if(!reservation.available) {
      return;
    }
    const new_reservation = {
      time_slot: reservation.time_slot,
      restaurant_id: this.props.restaurant.id,
      user_id: this.props.currentUser.id,
      party_size: this.state.partySize,
    };
    return(e) => {
      let changeReservedStatus=this.props.changeReservedStatus;
      this.props.createReservation(new_reservation).then((success) => {
        changeReservedStatus(true);
        hashHistory.push("/");
      });
    };
  }

  renderReservations() {
    if( !this.props.isSearchForm && this.props.reservations.reservations instanceof Array ){
      return(<ul className="reservation-list">
        {this.props.reservations.reservations.map((reservation,i) => {
          return (
            <li key={i} className={`reservation-time
              ${reservation.available ? "" : "unavailable"}`}
            onClick={this.reservationClick(reservation)}>
              {parseTime(reservation.time_slot)}
            </li>
          );
        })}
      </ul>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.props.isSearchForm) {
      this.props.fetchOnlyReservations({
        party_size: this.state.partySize,
        time_slot: combineDateAndTime(new Date(this.state.date), new Date(this.state.time)),
        restaurant_id: this.props.restaurant.id,
        restaurantName: this.props.restaurant.name,
        id: 1,
      });
    }
    else {
      if(this.ableToRedirect()) {
        this.redirectToSearch();
      }
    }
  }

  ableToRedirect() {
    let errorMessages = [];

    if(!this.props.currentUser) {
      errorMessages.push("Please log in to search.");
    }
    if(!this.state.searchTerm) {
      errorMessages.push("Please include a search term.");
    }
    if(errorMessages.length > 0) {
      this.setState({errorMessages: errorMessages});
      return false;
    }
    return true;
  }

  redirectToSearch() {
    this.props.fetchRestaurantsAndReservations({
      party_size: this.state.partySize,
      time_slot: combineDateAndTime(new Date(this.state.date), new Date(this.state.time)),
      search_term: this.state.searchTerm,
      id: 1,
    });
    hashHistory.push("/search-results");
  }

  addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
  }

  restaurantHours() {
    let times = [];
    let currentTime = new Date("2000-01-01T23:00:00.000Z");
    let closingTime = new Date("2000-01-02T04:00:00.000Z");
    while(currentTime < closingTime) {
      times.push(currentTime);
      currentTime = this.addMinutes(currentTime, 30);
    }
    return times;
  }

  render() {
    let partySizeOptions = [];

    for (var i = 1; i < 11; i++) {
      partySizeOptions.push(<option key={i} value={i}>{`${i} ${i === 1 ? 'person' : 'people'}`}</option>);
    }

    let reservationTimeOptions = [];

    let hours = this.restaurantHours();
    for (var j = 0; j < hours.length; j++) {
      reservationTimeOptions.push(<option key={j} value={hours[j]}>{`${hours[j].getHours()-12}:${hours[j].getMinutes()===0 ? "00" : hours[j].getMinutes()} PM`}</option>);
    }

    return (
      <div className="search-form-cont">
        <h1>Make restaurant reservations the easy way</h1>
          { this.renderErrors() }
          { this.renderSuccess() }
          <form onSubmit={this.handleSubmit} className="search-form" >

            <select name="reservation[partySize]"
            className={this.state.selected==="partySize" ? "selected" : ""}
            onChange={this.update("partySize")}
            onFocus={(e) => this.changeFocus('partySize')}
            onBlur={this.changeFocus}>
            {partySizeOptions}
            </select>

            <input type="date"
            className={this.state.selected==="date" ? "selected" : ""}
            onChange={this.update('date')}
            onFocus={(e) => this.changeFocus('date')}
            onBlur={this.changeFocus}/>

            <select name="reservation[time]" className={this.state.selected==="time" ? "selected" : ""}
            onChange={this.update("time")}
            onFocus={(e) => this.changeFocus('time')}
            onBlur={this.changeFocus}>
            {reservationTimeOptions}
            </select>

            <div className={`text-area ${this.state.selected==="text" ? "selected" : ""} ${this.props.isSearchForm ? "search-form-text" : "no-text"} `}>
              <i className="fa fa-search fa-2x" aria-hidden="true"></i>
                <input
                type="text"
                value={this.state.searchTerm}
                onChange={this.update('searchTerm')}
                onFocus={(e) => this.changeFocus('text')}
                onBlur={this.changeFocus}
                placeholder="Location or Restaurant" />
              </div>
            <input type="submit" value="Find a Table" className="submit" />

          </form>
          {this.renderReservations()}
      </div>
    );
  }
}
