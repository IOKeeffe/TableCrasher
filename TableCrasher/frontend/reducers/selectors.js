import { values } from 'lodash';

export const selectAllRestaurants = (state) => {
  return values(state.restaurants.restaurants);
};

export const selectAllCities = (state) => {
  return values(state.cities.cities);
};

export const selectAllReviews = (state) => {
  let v = values(state.reviews);
  return v;
};

export const selectUserReservations = (state) => {
  return values(state.reservations)
}
