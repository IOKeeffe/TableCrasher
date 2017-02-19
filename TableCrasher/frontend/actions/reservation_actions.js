import * as ReservationApiUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

export const fetchReservation = id => dispatch => {
  return ReservationApiUtil.receiveReservation(id).then(reservation => {
    dispatch(receiveReservation(reservation));
  });
};

export const fetchCities = () => dispatch => {
  return CityApiUtil.fetchCities().then(cities => dispatch(receiveCities(cities)));
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
