import * as ReservationApiUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

export const fetchPotentialReservations = (reservation) => dispatch => {
  return ReservationApiUtil.receivePotentialReservations(reservation).then(reservations => {
    dispatch(receiveReservations(reservations));
  });
};

export const fetchUserReservations = () => dispatch => {
  return ReservationApiUtil.receiveUserReservations().then(reservations => dispatch(receiveReservations(reservations)));
};

export const createReservation = reservation => {
  return ReservationApiUtil.createReservation(reservation).then(reservation => dispatch(receiveReservation(reservation)));
};

export const updateReservation = reservation => {
  return ReservationApiUtil.updateReservation(reservation).then(reservation => dispatch(receiveReservation(reservation)));
};

export const deleteReservation = id => {
  return ReservationApiUtil.deleteReservation(id).then(reservation => dispatch(receiveReservation(reservation)));
};

export const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation,
});

export const receiveReservations = (reservations) => ({
  type: RECEIVE_RESERVATION,
  reservations,
});

export const removeReservation = (reservation) => ({
  type: REMOVE_RESERVATION,
  reservation,
});
