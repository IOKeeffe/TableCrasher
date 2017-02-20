import React from 'react';
import {hashHistory} from 'react-router';

export default class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {errorMessages: [], searchTerm: "", selected: "", date: new Date(), time: new Date(169200000), partySize: 1};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFocus = this.changeFocus.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  changeFocus(input) {
    if(this.state.selected === "") {
      this.setState({selected: input});
    }
    else {
      this.setState({selected: ""});
    }
  }

  combineDateAndTime(date, time) {
    const timeString = time.getHours() + ':' + time.getMinutes() + ':00';

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Jan is 0, dec is 11
    const day = date.getDate();
    const dateString = '' + year + '-' + month + '-' + day;
    const combined = new Date(dateString + ' ' + timeString);

    return combined;
  }

  renderErrors() {
    if( this.state.errorMessages ) {
      return (<ul className="error-messages">
          {this.state.errorMessages.map((error, i) => {
            return (<li key={i}>{error}</li>);
          })}
        </ul>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let errorMessages = [];
    if(!this.props.currentUser) {
      errorMessages.push("Please log in to search.");
    }
    if(!this.state.searchTerm) {
      errorMessages.push("Please include a search term.");
    }
    if(errorMessages.length > 0) {
      this.setState({errorMessages: errorMessages});
      return;
    }
    this.props.fetchPotentialReservations({
      party_size: this.state.partySize,
      time_slot: this.combineDateAndTime(this.state.date, this.state.time),
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
          <form onSubmit={this.handleSubmit} className="search-form" >

            <select name="reservation[partySize]"
            className={this.state.selected==="partySize" ? "selected" : ""}
            onChange={this.update("partySize")}
            onFocus={(e) => this.changeFocus('partySize')}
            onBlur={this.changeFocus}>
            {partySizeOptions}
            </select>

            <select name="reservation[time]" className={this.state.selected==="time" ? "selected" : ""}
            onChange={this.update("time")}
            onFocus={(e) => this.changeFocus('time')}
            onBlur={this.changeFocus}>
            {reservationTimeOptions}
            </select>

            <input type="date"
              className={this.state.selected==="date" ? "selected" : ""}
              onChange={this.update('date')}
              onFocus={(e) => this.changeFocus('date')}
              onBlur={this.changeFocus}/>

            <div className={`text-area ${this.state.selected==="text" ? "selected" : ""}`}>
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
      </div>
    );
  }
}
