import { connect } from 'react-redux';
import ReservationForm from './reservation_form';
import {fetchOnlyReservations, fetchRestaurantsAndReservations,
  createReservation, receiveReservations}
  from '../../actions/reservation_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    reservations: state.reservations,
    currentUser: state.session.currentUser,
    restaurant: ownProps.restaurant,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRestaurantsAndReservations: (reservation) => dispatch(fetchRestaurantsAndReservations(reservation)),
  fetchOnlyReservations: (reservation) => dispatch(fetchOnlyReservations(reservation)),
  unmountReservations: () => dispatch(receiveReservations(null)),
  createReservation: reservation => dispatch(createReservation(reservation)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);
