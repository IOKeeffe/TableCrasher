import merge from 'lodash/merge';
import {CHANGE_RESERVED_STATUS} from '../actions/reservation_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch(action.type) {
  case CHANGE_RESERVED_STATUS:
    newState.reservationConfirmed = action.status ? "reservation_confirmed" : "";
    return newState;
  default:
    return oldState;
  }
};
