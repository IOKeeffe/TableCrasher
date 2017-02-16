import { connect } from 'react-redux';
import { selectAllRestaurants  } from '../../reducers/selectors';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import RestaurantIndex from './restaurant_index';

const mapStateToProps = state => {
  return {
    restaurants: selectAllRestaurants(state),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: () => dispatch(fetchRestaurants()),
});
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);
