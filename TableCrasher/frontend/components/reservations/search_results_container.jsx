import { connect } from 'react-redux';
import SearchResults from './search_results';
import {fetchPotentialReservations, createReservation} from '../../actions/reservation_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    reservations: state.reservations,
};};

const mapDispatchToProps = dispatch => ({
  // fetchPotentialReservations: (search_params) => dispatch(fetchPotentialReservations(search_params)),
  //
  // createReservation: reservation => dispatch(createReservation(reservation)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
