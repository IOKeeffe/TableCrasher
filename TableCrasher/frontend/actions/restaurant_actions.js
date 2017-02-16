import * as RestaurantApiUtil from '../util/restaurant_api_util';

export const RECEIVE_ALL_RESTAURANTS = "RECEIVE_ALL_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_RESTAURANT = "REMOVE_RESTAURANT";

export const fetchRestaurants = () => dispatch => {
  return RestaurantApiUtil.receiveRestaurants()
  .then(restaurants => dispatch(receiveRestaurants(restaurants)),
        errors => {dispatch(receiveErrors(errors));});
};

export const fetchRestaurant = id => dispatch => {
  return RestaurantApiUtil.receiveRestaurant(id)
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

export const receiveRestaurants = (restaurants) => ({
  type: RECEIVE_ALL_RESTAURANTS,
  restaurants,
});

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
