import { connect } from 'react-redux';
import SearchResults from './search_results';
import {fetchPotentialReservations, createReservation, receiveReservations} from '../../actions/reservation_actions';
import {fetchRestaurant} from '../../actions/restaurant_actions';
import { selectAllRestaurants } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: state.reservations.fetching,
    reservations: state.reservations.reservations,
    restaurants: selectAllRestaurants(state),
  };};

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id)),
  unmountReservations: () => dispatch(receiveReservations(null)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
