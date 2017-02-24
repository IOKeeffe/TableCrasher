import { connect } from 'react-redux';
import { fetchFavorites, removeFavorite } from '../../actions/favorite_actions';
import { fetchRestaurantsByIds } from '../../actions/restaurant_actions';
import { selectAllFavorites, selectAllRestaurants } from '../../reducers/selectors';
import ProfileFavorites from './profile_favorites';

const mapStateToProps = (state, ownProps) => {
  return {
    favorites: selectAllFavorites(state),
    restaurants: selectAllRestaurants(state),
    fetching: state.reservations.fetching,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRestaurantsByIds: (ids) => dispatch(fetchRestaurantsByIds(ids)),
  fetchFavorites: () => dispatch(fetchFavorites()),
  removeFavorite: (id) => dispatch(removeFavorite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFavorites);
