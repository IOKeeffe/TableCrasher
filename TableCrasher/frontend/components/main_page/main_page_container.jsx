import { connect } from 'react-redux';
import { changeReservedStatus} from '../../actions/reservation_actions';
import MainPage from './main_page';


const mapStateToProps = () => {

};

const mapDispatchToProps = dispatch => ({
  changeReservedStatus: (status) => dispatch(changeReservedStatus(status)),
});

export default connect(null, mapDispatchToProps)(MainPage);
