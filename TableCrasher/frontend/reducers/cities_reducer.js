import merge from 'lodash/merge';
import {RECEIVE_CITY, RECEIVE_CITIES } from '../actions/city_actions';

export default (oldState = {cities: [], currentCity: null}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch(action.type) {
  case RECEIVE_CITY:
    newState.currentCity = action.city;
    return newState;
  case RECEIVE_CITIES:
    newState.cities = action.cities;
    return newState;
  default:
    return oldState;
  }
};
