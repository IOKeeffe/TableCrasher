import * as RestaurantApiUtil from '../util/restaurant_api_util';
import { FETCHING_RESERVATIONS, fetching } from './reservation_actions';

export const RECEIVE_RESTAURANTS = "RECEIVE_ALL_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_RESTAURANT = "REMOVE_RESTAURANT";

export const fetchAllRestaurants = () => dispatch => {
  return RestaurantApiUtil.fetchRestaurants()
  .then(restaurants => dispatch(receiveRestaurants(restaurants)),
        errors => {dispatch(receiveErrors(errors));});
};

export const fetchRestaurant = id => dispatch => {
  return RestaurantApiUtil.fetchRestaurant(id)
  .then(restaurant => dispatch(receiveRestaurant(restaurant)),
        errors => {dispatch(receiveErrors(errors));});
};

export const createRestaurant = restaurant => dispatch => {
  return RestaurantApiUtil.createRestaurant(restaurant)
  .then(restaurant => dispatch(receiveRestaurant(restaurant)),
        errors => {dispatch(receiveErrors(errors));});
};

export const updateRestaurant = restaurant => dispatch => {
  return RestaurantApiUtil.updateRestaurant(restaurant)
  .then(restaurant => dispatch(receiveRestaurant(restaurant)),
        errors => {dispatch(receiveErrors(errors));});
};

export const deleteRestaurant = id => dispatch => {
  return RestaurantApiUtil.deleteRestaurant(id)
  .then(restaurant => dispatch(removeRestaurant(restaurant)),
        errors => {dispatch(receiveErrors(errors));});
};

export const fetchRestaurantsByIds = (ids) => dispatch => {
  dispatch(fetching(true));
  return RestaurantApiUtil.fetchRestaurantsByIds(ids)
  .then(restaurants => {
    dispatch(fetching(false));
    dispatch(receiveRestaurants(restaurants));},
        errors => {dispatch(receiveErrors(errors));});
};

export const searchRestaurants = search_term => dispatch => {
  return RestaurantApiUtil.searchRestaurants(search_term)
  .then(restaurants => {return dispatch(receiveRestaurants(restaurants));},
        errors => dispatch(receiveErrors(errors)));
};

export const receiveRestaurants = (restaurants) => {
  return ({
    type: RECEIVE_RESTAURANTS,
    restaurants,
  });};

export const receiveRestaurant = (restaurant) => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const removeRestaurant = (restaurant) => ({
  type: REMOVE_RESTAURANT,
  restaurant
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});
