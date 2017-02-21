import { RECEIVE_REVIEW, RECEIVE_REVIEWS} from '../actions/review_actions';
import merge from 'lodash/merge';

const ReviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
  case RECEIVE_REVIEW:
    newState.errors = [];
    newState = action.review;
    return newState;
  case RECEIVE_REVIEWS:
    newState.errors = [];
    newState = action.reviews;
    return newState;

  default: return newState;
  }
};

export default ReviewsReducer;
