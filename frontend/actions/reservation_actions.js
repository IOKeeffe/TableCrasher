import * as ReservationApiUtil from '../util/reservation_api_util';
import { receiveRestaurants } from './restaurant_actions';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const FETCHING_RESERVATIONS = 'FETCHING_RESERVATIONS';
export const CHANGE_RESERVED_STATUS = 'CHANGE_RESERVED_STATUS';

export const fetchOnlyReservations = (reservation) => dispatch => {
  dispatch(fetching(true));
  return ReservationApiUtil.fetchPotentialReservations(reservation).then(({reservations}) => {
    dispatch(receiveReservations(reservations));
    dispatch(fetching(false));
  });
};

export const fetchRestaurantsAndReservations = (reservation) => dispatch => {
  dispatch(fetching(true));
  return ReservationApiUtil.fetchPotentialReservations(reservation).then(({reservations, restaurants}) => {
    dispatch(receiveReservations(reservations));
    if(restaurants) {
      dispatch(receiveRestaurants(restaurants));
    }
    dispatch(fetching(false));
  });
};



export const fetchUserReservations = () => dispatch => {
  dispatch(fetching(true));
  return ReservationApiUtil.fetchUserReservations().then(reservations => {
    dispatch(receiveReservations(reservations));
    dispatch(fetching(false));}
    );
};

export const createReservation = reservation => dispatch => {
  return ReservationApiUtil.createReservation(reservation).then(reservation => {return dispatch(receiveReservation(reservation));});
};

export const updateReservation = reservation => dispatch => {
  return ReservationApiUtil.updateReservation(reservation).then(reservation => dispatch(receiveReservation(reservation)));
};

export const deleteReservation = id => dispatch => {
  return ReservationApiUtil.deleteReservation(id).then(reservation => dispatch(receiveReservation(reservation)));
};

export const receiveReservation = reservation => {
  return {
    type: RECEIVE_RESERVATION,
    reservation,
  };
};

export const receiveReservations = (reservations) => {
  return {type: RECEIVE_RESERVATIONS,
    reservations};
};

export const changeReservedStatus = (status) => {
  return {
    type: CHANGE_RESERVED_STATUS,
    status
  };
};

export const fetching = (fetchingVal) => {
  return {
    type: FETCHING_RESERVATIONS,
    fetchingVal,
  };
};

export const removeReservation = (reservation) => ({
  type: REMOVE_RESERVATION,
  reservation,
});
