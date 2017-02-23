import React from 'react';
import { parseTime, parseDate } from '../../util/utils';

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
        <div className="options"> <a className="Cancel Reservation" onClick={(e) => {this.props.deleteReservation(id);}}>Delete</a>
        <a className="Nevermind" onClick={(e) => {this.setState({checkingDelete: null});}}>Cancel</a></div>
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
    if(reservations){
      return (
        <div className="profile-page">
          <h2 className="">Upcoming Reservations</h2>
          <ul className="reservations">
            {reservations.map ((reservation) => {
              return (
              <li className="reservation-item" key={reservation.reservation.id}>
                <section className="img-section">
                  <img src={reservation.restaurant.image_url} />
                </section>
                <section className="info">
                  <h4>{reservation.restaurant.name}</h4>
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
      return(<div>loading</div>);
    }
  }
}
