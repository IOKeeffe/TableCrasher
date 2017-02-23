import { connect } from 'react-redux';
import { fetchUserReservations, updateReservation, deleteReservation } from '../../actions/reservation_actions';
import { selectUserReservations } from '../../reducers/selectors'
import ProfileReservations from './profile_reservations';

const mapStateToProps = (state, ownProps) => {
  return {
    reservations: selectUserReservations(state),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserReservations: () => dispatch(fetchUserReservations()),
  updateReservation: (reservation) => dispatch(updateReservation()),
  deleteReservation: (id) => dispatch(deleteReservation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileReservations);
