import React from 'react';
import { parseTime, parseDate, loadingDiv } from '../../util/utils';
import { Link } from 'react-router';
import Sidebar from './sidebar';

export default class ProfileReservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checkingDelete: null};
  }

  componentDidMount() {
    this.props.fetchUserReservations();
  }

  componentWillReceiveProps(newProps) {
    if(newProps !== this.props) {
      this.setState({checkingDelete: false});
    }
  }

  renderCancelButton(id) {
    if(this.state.checkingDelete === id) {
      return (<div className="delete-check"><p>Really Cancel Reservation?</p>
        <div className="options"> <a onClick={(e) => {this.props.deleteReservation(id);}}>Yes</a>
        <a onClick={(e) => {this.setState({checkingDelete: null});}}>Nevermind</a></div>
      </div>);
    }
    else {
      return (<button className="red-button" onClick={(e) => {return this.setState({checkingDelete: id});}}>Cancel Reservation</button>);
    }
  }

  cancelReservation(id) {
    return(e) => {
      this.props.deleteReservation(id);
    };
  }

  render() {
    let reservations = this.props.reservations;
    if(this.props.fetching) {
      return (loadingDiv());
    }
    if(reservations){
      if(reservations.length > 0) {
        return (
          <div className="profile-page">
            <Sidebar />
            <ul className="profile-content">
            <h2 className="">Upcoming Reservations</h2>
              {reservations.map ((reservation) => {
                return (
                <li className="reservation-item" key={reservation.reservation.id}>
                  <Link to={`restaurants/${reservation.restaurant.id}`}>
                    <section className="img-section">
                      <img src={reservation.restaurant.image.thumb} />
                    </section>
                  </Link>
                  <section className="info">
                    <Link to={`restaurants/${reservation.restaurant.id}`}>
                      <h4>{reservation.restaurant.name}</h4>
                    </Link>
                    <p>{parseTime(reservation.reservation.time_slot)}</p>
                    <p>{parseDate(reservation.reservation.time_slot)}</p>
                  </section>
                  <section className="delete-area">
                    {this.renderCancelButton(reservation.reservation.id)}
                  </section>
                </li>
                );
              })}
            </ul>
          </div>
        );
      }
      else {
        return (<div className="profile-page">
                  <Sidebar />
                    <div className="profile-content">
                      <h2 className="">Upcoming Reservations</h2>
                      <h4>No Reservations</h4>
                    </div>
                  </div>
        );
      }
    }
    else {
      return (loadingDiv());
    }
  }
}
