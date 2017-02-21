import { connect } from 'react-redux';
import SearchResults from './search_results';
import {fetchPotentialReservations, createReservation, receiveReservations, changeReservedStatus } from '../../actions/reservation_actions';
import {fetchRestaurant} from '../../actions/restaurant_actions';
import { selectAllRestaurants } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: state.reservations.fetching,
    reservations: state.reservations.reservations,
    restaurants: selectAllRestaurants(state),
    currentUser: state.session.currentUser,
  };};

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id)),
  createReservation: reservation => dispatch(createReservation(reservation)),
  changeReservedStatus: (status) => dispatch(changeReservedStatus(status)),
  unmountReservations: () => dispatch(receiveReservations(null)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
