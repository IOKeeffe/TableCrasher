import { logOut } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
    logout: () => (dispatch(logOut()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
