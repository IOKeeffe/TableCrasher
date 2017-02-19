import merge from 'lodash/merge';
import { RECEIVE_RESERVATION, RECEIVE_RESERVATIONS, REMOVE_RESERVATION } from '../actions/city_actions';

export default (oldState = {reservation: null}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch(action.type) {
  case RECEIVE_RESERVATION:
    newState.reservation = action.reservation;
    newState.reservations = null;
    return newState;
  case RECEIVE_RESERVATIONS:
    newState.reservations = action.reservations;
    newState.reservation = null;
    return newState;
  default:
    return oldState;
  }
};
