import { connect } from 'react-redux';
import Reviews from './reviews';
import {selectAllReviews} from '../../reducers/selectors';
import { fetchRestaurantReviews, fetchUserReviews, deleteReview, createReview, updateReview, fetchReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let rest = null;
  if(ownProps.currentPage === 'restaurant') {
    rest = state.restaurantDetail.restaurant;
  }
  return {
    currentPage: ownProps.currentPage,
    reviews: selectAllReviews(state),
    restaurant: rest,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReview: (review) => dispatch(createReview(review)),
    fetchRestaurantReviews: (id) => dispatch(fetchRestaurantReviews(id)),
    fetchReview: (id) => dispatch(fetchReview()),
    fetchUserReviews: () => dispatch(fetchUserReviews()),
    deleteReview: (id) => dispatch(deleteReview(id)),
    updateReview: (review) => dispatch(updateReview(review)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
