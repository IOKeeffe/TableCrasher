import { signUp, receiveErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SignupForm from './signup_form';

const mapStateToProps = (state, ownProps) => {
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    signUp: (user) => (dispatch(signUp(user))),
    receiveErrors: (error) => (dispatch(receiveErrors(error)))
});

export default connect(null, mapDispatchToProps)(SignupForm);
