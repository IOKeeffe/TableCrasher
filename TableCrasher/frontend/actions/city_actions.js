import * as CityApiUtil from '../util/city_api_util';

export const RECEIVE_CITY = 'RECEIVE_CITY';
export const RECEIVE_CITY_RESTAURANTS = 'RECEIVE_CITY_RESTAURANTS';

export const fetchCityRestaurants = id => dispatch => {
  return CityApiUtil.fetchCityRestaurants(id).then(city => dispatch(receiveCity(city)));
};

export const fetchCities = () => dispatch => {
  return CityApiUtil.fetchCities().then(cities => dispatch(receiveCities(cities)));
};

export const receiveCity = (city) => ({
  type: RECEIVE_CITY,
  city,
});

export const receiveCities = (cities) => ({
  type: RECEIVE_CITY_RESTAURANTS,
  cities,
});
