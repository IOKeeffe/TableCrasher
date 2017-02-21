import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RestaurantReducer from './restaurants_reducer';
import RestaurantDetailReducer from './restaurant_detail_reducer';
import ReservationsReducer from './reservations_reducer';
import CitiesReducer from './cities_reducer';
import StatusReducer from './status_reducer';

export default combineReducers({
  session: SessionReducer,
  restaurants: RestaurantReducer,
  cities: CitiesReducer,
  restaurantDetail: RestaurantDetailReducer,
  reservations: ReservationsReducer,
  status: StatusReducer,
});
