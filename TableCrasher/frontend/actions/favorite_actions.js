import * as FavoriteApiUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const fetchFavorite = id => dispatch => {
  return FavoriteApiUtil.fetchFavoriteRestaurants(id).then(favorite => {
    dispatch(receiveFavorite(favorite));
  });
};

export const fetchFavorites = () => dispatch => {
  return FavoriteApiUtil.fetchFavorites().then(favorites => {return dispatch(receiveFavorites(favorites))});
};

export const deleteFavorite = id => dispatch => {
  return FavoriteApiUtil.deleteFavorite(id).then(favorites => dispatch(removeFavorite(favorites)));
};

export const createFavorite = favorite => dispatch => {
  return FavoriteApiUtil.createFavorite(favorite).then(favorite => dispatch(receiveFavorite(favorite)));
};

export const receiveFavorite = (favorite) => {
  return {type: RECEIVE_FAVORITE,
    favorite};
};

export const receiveFavorites = (favorites) => ({
  type: RECEIVE_FAVORITES,
  favorites,
});

export const removeFavorite = (favorite) => ({
  type: REMOVE_FAVORITE,
  favorite
});
