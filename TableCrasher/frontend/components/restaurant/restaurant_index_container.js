import { connect } from 'react-redux';
import { selectAllRestaurants  } from '../../reducers/selectors';
import { fetchAllRestaurants } from '../../actions/restaurant_actions';
import RestaurantIndex from './restaurant_index';


const mapStateToProps = state => {
  let restaurants = selectAllRestaurants(state);
  return {
    restaurants: restaurants,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllRestaurants: () => dispatch(fetchAllRestaurants()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);
