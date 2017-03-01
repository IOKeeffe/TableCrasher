import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW} from '../actions/review_actions';
import merge from 'lodash/merge';

const ReviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch(action.type) {
  case RECEIVE_REVIEW:
    newState[action.review.review.id] = action.review.review;
    return newState;
  case RECEIVE_REVIEWS:
    newState = action.reviews;
    return newState;
  case REMOVE_REVIEW:
    delete newState[action.review.review.id];
    return newState;
  default: return newState;
  }
};

export default ReviewsReducer;
