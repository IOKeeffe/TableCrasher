import { logIn, receiveErrors, renderSignInForm, renderSignUpForm } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginForm from './login_form';

const mapStateToProps = ({ session }) => {
  return {
    errors: session.errors,
    loggedIn: Boolean(session.currentUser),
    signingIn: session.signingIn,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (user) => (dispatch(logIn(user))),
    receiveErrors: (error) => (dispatch(receiveErrors(error))),
    toggleSigningIn: () => (dispatch(renderSignInForm(false))),
    toggleSigningUp: (bool) => (dispatch(renderSignUpForm(bool))),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
