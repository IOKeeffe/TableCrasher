import merge from 'lodash/merge';
import {RECEIVE_FAVORITE, RECEIVE_FAVORITES, REMOVE_FAVORITE } from '../actions/favorite_actions';

export default (oldState = {favorites: {}}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch(action.type) {
  case RECEIVE_FAVORITE:
    newState.favorites[action.favorite.restaurant_id] = action.favorite;
    return newState;
  case RECEIVE_FAVORITES:
    newState.favorites = action.favorites;
    return newState;
  case REMOVE_FAVORITE:
    delete newState.favorites[action.favorite.restaurant_id];
    return newState;
  default:
    return oldState;
  }
};
