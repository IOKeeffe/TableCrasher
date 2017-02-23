import { connect } from 'react-redux';
import RestaurantDetail from './restaurant_detail';
import { fetchRestaurant, receiveRestaurant } from '../../actions/restaurant_actions';
import { fetchFavorites, createFavorite, deleteFavorite } from '../../actions/favorite_actions';
import { receiveReservations } from '../../actions/reservation_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: state.restaurantDetail.restaurant,
    id: ownProps.params.restaurantId,
    favorites: state.favorites.favorites,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
  unmountRestaurant: () => dispatch(receiveRestaurant(null)),
  fetchFavorites: () => dispatch(fetchFavorites()),
  createFavorite: (favorite) => dispatch(createFavorite(favorite)),
  deleteFavorite: (id) => dispatch(deleteFavorite(id)),
  receiveReservations: (reservations) => dispatch(receiveReservations(reservations)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail);
