import { connect } from 'react-redux';
import { changeReservedStatus, receiveReservation } from '../../actions/reservation_actions';
import MainPage from './main_page';


const mapStateToProps = () => {

};

const mapDispatchToProps = dispatch => ({
  changeReservedStatus: (status) => dispatch(changeReservedStatus(status)),
  receiveReservation: (reservation) => dispatch(receiveReservation(reservation)),
});

export default connect(null, mapDispatchToProps)(MainPage);
