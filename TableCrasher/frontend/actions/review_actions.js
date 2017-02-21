import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const fetchRestaurantReviews = id => dispatch => {
  return ReviewApiUtil.fetchRestaurantReviews(id).then(reviews => {
    dispatch(receiveReviews(reviews));
  });
};

export const fetchUserReviews = () => dispatch => {
  return ReviewApiUtil.fetchUserReviews().then(reviews => {
    dispatch(receiveReviews(reviews));
  });
};

export const createReview = (review) => dispatch => {
  return ReviewApiUtil.createReview(review).then(review => {
    dispatch(receiveReview(review));
  });
};

export const fetchReview = (id) => dispatch => {
  return ReviewApiUtil.fetchReview().then(review => dispatch(receiveReview(review)));
};

export const updateReview = (review) => dispatch => {
  return ReviewApiUtil.updatereview(review).then(review => {
    dispatch(receiveReview(review));
  });
};

export const deleteReview = (id) => dispatch => {
  return ReviewApiUtil.deleteReview(id).then(review => {
    dispatch(removeReview(review));
  });
};


export const receiveReview = (review) => {
  return {type: RECEIVE_REVIEW,
    review};
};

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

export const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review,
});
