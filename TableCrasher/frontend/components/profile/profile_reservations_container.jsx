import { connect } from 'react-redux';
import { fetchUserReservations, updateReservation, deleteReservation } from '../../actions/reservation_actions';
import { selectUserReservations } from '../../reducers/selectors';
import ProfileReservations from './profile_reservations';

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: state.reservations.fetching,
    reservations: state.reservations.reservations,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserReservations: () => dispatch(fetchUserReservations()),
  updateReservation: (reservation) => dispatch(updateReservation(reservation)),
  deleteReservation: (id) => dispatch(deleteReservation(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileReservations);
