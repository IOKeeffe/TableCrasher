import { connect } from 'react-redux';
import ReservationForm from './reservation_form';
import {fetchPotentialReservations, createReservation} from '../../actions/reservation_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    reservations: state.reservations,
    possibleRestaurants: state.restaurants,
    restaurant: ownProps.restaurant,
};};

const mapDispatchToProps = dispatch => ({
  fetchPotentialReservations: (search_params) => dispatch(fetchPotentialReservations(search_params)),

  createReservation: reservation => dispatch(createReservation(reservation)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);
