import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RestaurantReducer from './restaurants_reducer';
import RestaurantDetailReducer from './restaurant_detail_reducer';
import CitiesReducer from './cities_reducer';

export default combineReducers({
  session: SessionReducer,
  restaurants: RestaurantReducer,
  cities: CitiesReducer,
  restaurantDetail: RestaurantDetailReducer,
});
