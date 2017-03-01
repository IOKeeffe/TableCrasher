import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, SIGNING_IN, SIGNING_UP } from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionReducer = (oldState = {currentUser: null, signingIn: false, signingUp: false, errors: []}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch(action.type) {
  case RECEIVE_CURRENT_USER:
    newState.errors = [];
    newState.currentUser = action.user;

    return newState;

  case SIGNING_IN:
    newState.errors = [];
    newState.signingIn = action.signingIn;
    newState.signingUp = false;
    return newState;

  case SIGNING_UP:
    newState.errors = [];
    newState.signingIn=false;
    newState.signingUp = action.signingUp;
    return newState;

  case RECEIVE_ERRORS:
    newState.currentUser = null;
    newState.errors = action.errors;
    return newState;

  default: return newState;
  }
};
export default SessionReducer;
