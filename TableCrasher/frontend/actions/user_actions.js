import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const fetchUserDetails = () => dispatch => {
  return UserApiUtil.fetchUser()
  .then(user => dispatch(receiveUser(user)));
};

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});
