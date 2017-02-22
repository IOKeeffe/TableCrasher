import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { deleteReview, createReview, updateReview } from '../../actions/review_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    review: ownProps.review,
    currentUser: ownProps.user,
    restaurant: ownProps.restaurant,
    editing: ownProps.editing,
  };
};

const mapDispatchToProps = dispatch => ({
  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
