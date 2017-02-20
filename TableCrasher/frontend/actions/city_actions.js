import * as CityApiUtil from '../util/city_api_util';
import { receiveRestaurants } from './restaurant_actions';

export const RECEIVE_CITY = 'RECEIVE_CITY';
export const RECEIVE_CITIES = 'RECEIVE_CITIES';

export const fetchCityRestaurants = id => dispatch => {
  return CityApiUtil.receiveCityRestaurants(id).then(city => {
    dispatch(receiveCity(city));
    dispatch(receiveRestaurants(city.restaurants));
  });
};

export const fetchCities = () => dispatch => {
  return CityApiUtil.receiveCities().then(cities => dispatch(receiveCities(cities)));
};

export const receiveCity = (city) => {
  return {type: RECEIVE_CITY,
    city};
};

export const receiveCities = (cities) => ({
  type: RECEIVE_CITIES,
  cities,
});
