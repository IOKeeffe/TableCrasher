import { connect } from 'react-redux';
import { selectAllRestaurants  } from '../../reducers/selectors';
import { fetchAllRestaurants } from '../../actions/restaurant_actions';
import { receiveCity } from '../../actions/city_actions';
import { fetchFavorites } from '../../actions/favorite_actions';
import RestaurantIndex from './restaurant_index';


const mapStateToProps = state => {
  let restaurants = selectAllRestaurants(state);
  return {
    fetching: state.reservations.fetching,
    restaurants: restaurants,
    favorites: state.favorites.favorites,
    currentUser: state.session.currentUser,
    currentCity: state.cities.currentCity,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllRestaurants: () => dispatch(fetchAllRestaurants()),
  removeCity: () => dispatch(receiveCity(null)),
  fetchFavorites: () => dispatch(fetchFavorites()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);
