import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const logIn = (user) => dispatch => {
  return SessionApiUtil.signIn(user)
  .then(user => dispatch(receiveCurrentUser(user)),
        errors => {dispatch(receiveErrors(errors))});
};

export const logOut = () => dispatch => {
  return SessionApiUtil.signOut().then(() => dispatch(receiveCurrentUser(null)));
};

export const signUp = (user) => dispatch => {
  return SessionApiUtil.signUp(user)
    .then(user => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveErrors(error)));
};

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});
