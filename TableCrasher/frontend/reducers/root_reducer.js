import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RestaurantReducer from './restaurants_reducer';

export default combineReducers({
  session: SessionReducer,
  restaurants: RestaurantReducer,
});
