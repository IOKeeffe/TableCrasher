import { signUp, receiveErrors, renderSignUpForm } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SignupForm from './signup_form';

const mapStateToProps = ({session}) => {
  return {
    errors: session.errors,
    loggedIn: Boolean(session.currentUser),
    signingUp: session.signingUp,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => (dispatch(signUp(user))),
  receiveErrors: (error) => (dispatch(receiveErrors(error))),
  toggleSigningUp: () => (dispatch(renderSignUpForm(false))),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
