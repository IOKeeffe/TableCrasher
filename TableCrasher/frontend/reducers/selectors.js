import { values } from 'lodash';

export const selectAllRestaurants = (state) => {
  return values(state.restaurants.restaurants);
};

export const selectAllCities = (state) => {
  return values(state.cities.cities);
};
