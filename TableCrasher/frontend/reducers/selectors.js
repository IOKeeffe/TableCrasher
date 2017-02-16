import { values } from 'lodash';

export const selectAllRestaurants = (state) => {
  return values(state.restaurants.restaurants);
};
