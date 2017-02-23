import { connect } from 'react-redux';

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
