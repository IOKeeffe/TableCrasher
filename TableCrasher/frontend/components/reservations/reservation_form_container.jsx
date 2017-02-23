import { connect } from 'react-redux';
import ReservationForm from './reservation_form';
import {fetchOnlyReservations, fetchRestaurantsAndReservations,
  createReservation, receiveReservations, changeReservedStatus}
  from '../../actions/reservation_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    isSearchForm: ownProps.isSearchForm,
    reservations: state.reservations,
    currentUser: state.session.currentUser,
    reservation_confirmed: state.status.reservationConfirmed,
    restaurant: ownProps.restaurant,
    errorMessages: state.session.errors,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRestaurantsAndReservations: (reservation) => dispatch(fetchRestaurantsAndReservations(reservation)),
  fetchOnlyReservations: (reservation) => dispatch(fetchOnlyReservations(reservation)),
  changeReservedStatus: (status) => dispatch(changeReservedStatus(status)),
  unmountReservations: () => dispatch(receiveReservations(null)),
  createReservation: reservation => dispatch(createReservation(reservation)),
  receiveReservations: (reservations) => dispatch(receiveReservations(reservations)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);
