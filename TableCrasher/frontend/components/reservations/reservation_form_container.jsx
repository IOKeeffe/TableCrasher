import { connect } from 'react-redux';
import ReservationForm from './reservation_form';
import {fetchOnlyReservations, fetchRestaurantsAndReservations,
  createReservation, receiveReservations, changeReservedStatus}
  from '../../actions/reservation_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    reservations: state.reservations,
    currentUser: state.session.currentUser,
    reservation_confirmed: state.status.reservationConfirmed,
    restaurant: ownProps.restaurant,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRestaurantsAndReservations: (reservation) => dispatch(fetchRestaurantsAndReservations(reservation)),
  fetchOnlyReservations: (reservation) => dispatch(fetchOnlyReservations(reservation)),
  changeReservedStatus: (status) => dispatch(changeReservedStatus(status)),
  unmountReservations: () => dispatch(receiveReservations(null)),
  createReservation: reservation => dispatch(createReservation(reservation)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);
