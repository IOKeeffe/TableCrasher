import React from 'react';

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
    this.props.searchRestaurants(this.state.search_term);
  }

  restaurantHours() {
    let times = [];
    let currentTime = new Date(this.props.restaurant.opening_time);
    while(currentTime != this.props.restaurant.closing_time) {
      debugger
    }
  }

  render() {
    let options = [];
    for (var i = 1; i < 11; i++) {
      options.push(<option key={i} value={i}>{`${i} ${i === 1 ? 'person' : 'people'}`}</option>);
    }
    this.restaurantHours()
    return (
      <div className="search-form-cont">
      <h1>Make restaurant reservations the easy way</h1>
        <form onSubmit={this.handleSubmit} className="search-form" >
          <select name="reservation[party_size]" onChange={(e) => {this.update("party_size");}}>
          {options}
          </select>
          <select name="reservation[time]" onChange={(e) => {this.update("time");}}>
          {options}
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
