import { combineReducers } from 'redux';

import CitiesReducer from './cities_reducer';
import FavoritesReducer from './favorites_reducer';
import RestaurantDetailReducer from './restaurant_detail_reducer';
import RestaurantReducer from './restaurants_reducer';
import ReservationsReducer from './reservations_reducer';
import ReviewsReducer from './reviews_reducer';
import SessionReducer from './session_reducer';
import StatusReducer from './status_reducer';

export default combineReducers({
  session: SessionReducer,
  cities: CitiesReducer,
  favorites: FavoritesReducer,
  restaurantDetail: RestaurantDetailReducer,
  reservations: ReservationsReducer,
  restaurants: RestaurantReducer,
  reviews: ReviewsReducer,
  status: StatusReducer,
});
