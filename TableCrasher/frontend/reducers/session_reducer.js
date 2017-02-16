import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionReducer = (oldState = {currentUser: null, errors: []}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch(action.type) {
  case RECEIVE_CURRENT_USER:
    newState.errors = [];
    newState.currentUser = action.user;
    return newState;

  case RECEIVE_ERRORS:
    newState.currentUser = null;
    newState.errors = action.errors;
    return newState;

  default: return newState;
  }
};
export default SessionReducer;
