import { connect } from 'react-redux';
import { updateUserDetails } from '../../actions/session_actions';
import ProfileDetails from './profile_details';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  updateUserDetails: (user) => dispatch(updateUserDetails(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
