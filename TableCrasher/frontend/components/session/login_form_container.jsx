import { logIn, receiveErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginForm from './login_form';

const mapStateToProps = ({ session }) => {
  return {
    errors: session.errors,
    loggedIn: Boolean(session.currentUser),
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (user) => (dispatch(logIn(user))),
    receiveErrors: (error) => (dispatch(receiveErrors(error))),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
