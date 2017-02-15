import { logIn, receiveErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginForm from './login_form';

const mapStateToProps = (state, ownProps) => ({

});


const mapDispatchToProps = (dispatch, ownProps) => {
    const action = ownProps.location.pathname === "/login" ? logIn : signUp;
    return {
      logIn: (user) => (dispatch(logIn(user))),
      receiveErrors: (error) => (dispatch(receiveErrors(error)))
  };
};
let form;

export default connect(null, mapDispatchToProps)(LoginForm);
