import React from 'react';
import {hashHistory} from 'react-router';

export default class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search_term: "", selected: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFocus = this.changeFocus.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  changeFocus() {
    if(this.state.selected === "") {
      this.setState({selected: "selected"});
    }
    else {
      this.setState({selected: ""});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchPotentialReservations(this.state);
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
        <form onSubmit={this.handleSubmit} className="search-form" >

          <select name="reservation[party_size]" onChange={this.update("party_size")}>
          {partySizeOptions}
          </select>

          <select name="reservation[time]" onChange={this.update("time")}>
          {reservationTimeOptions}
          </select>

          <input type="date" onChange={this.update('date')}/>

          <div className={`text-area ${this.state.selected}`}>
            <i className="fa fa-search fa-2x" aria-hidden="true"></i>
              <input
              type="text"
              value={this.state.search_term}
              onChange={this.update('search_term')}
              onFocus={this.changeFocus}
              onBlur={this.changeFocus}
              placeholder="Location or Restaurant" />
            </div>

          <input type="submit" value="Find a Table" className="submit" />

        </form>
      </div>
    );
  }
}
