import { RECEIVE_ERRORS, RECEIVE_RESTAURANT} from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const RestaurantDetailReducer = (oldState = {restaurant: null, errors: []}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch(action.type) {
  case RECEIVE_RESTAURANT:
    newState.errors = [];
    newState.restaurant = action.restaurant;
    return newState;
  case RECEIVE_ERRORS:
    newState.errors = action.errors;
    return newState;

  default: return newState;
  }
};
export default RestaurantDetailReducer;
