import { RECEIVE_ERRORS, RECEIVE_RESTAURANTS} from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const RestaurantsReducer = (oldState = {restaurants: null, errors: []}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch(action.type) {
  case RECEIVE_RESTAURANTS:
    newState.errors = [];
    newState.restaurants = action.restaurants;
    return newState;
  case RECEIVE_ERRORS:
    newState.errors = action.errors;
    return newState;

  default: return newState;
  }
};
export default RestaurantsReducer;
