import { logOut, logIn, renderSignInForm, renderSignUpForm } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signingIn: () => (dispatch(renderSignInForm(true))),
    signingUp: () => (dispatch(renderSignUpForm(true))),
    logOut: () => (dispatch(logOut())),
    logIn: (user) => (dispatch(logIn(user))),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
