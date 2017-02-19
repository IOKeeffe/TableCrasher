import { connect } from 'react-redux';
import ReservationForm from './reservation_form';
import { searchRestaurants } from '../../actions/restaurant_actions';
import {fetchPotentialReservations, createReservation} from '../../actions/reservation_actions';


const mapStateToProps = (state, ownProps) => {
  let restaurantId = ownProps.params ? ownProps.params.restaurantId : null;
  return {
  reservations: state.reservations,
  restaurant: ownProps.restaurant,
};};

const mapDispatchToProps = dispatch => ({
  searchRestaurants: (search_term) => dispatch(searchRestaurants(search_term)),

  fetchPotentialReservations: reservation => dispatch(fetchPotentialReservations(reservation)),

  createReservation: reservation => dispatch(createReservation(reservation)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);
