import merge from 'lodash/merge';
import { RECEIVE_RESERVATION, RECEIVE_RESERVATIONS, REMOVE_RESERVATION, FETCHING_RESERVATIONS } from '../actions/reservation_actions';

export default (oldState = {reservations: null, fetching: false}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch(action.type) {
  case RECEIVE_RESERVATION:
    newState.reservations = action.reservation;
    return newState;
  case RECEIVE_RESERVATIONS:
    newState.reservations = action.reservations;
    return newState;
  case FETCHING_RESERVATIONS:
    newState.fetching = action.fetchingVal;
    return newState;
  default:
    return oldState;
  }
};
