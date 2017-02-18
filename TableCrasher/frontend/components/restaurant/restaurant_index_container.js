import { connect } from 'react-redux';
import { selectAllRestaurants  } from '../../reducers/selectors';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import RestaurantIndex from './restaurant_index';


const mapStateToProps = state => {
  let restaurants;
  if( state.cities.currentCity ) {
    restaurants = state.cities.currentCity.restaurants;
  }
  else {
    restaurants = selectAllRestaurants(state);
  }
  return {
    restaurants: restaurants,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: () => dispatch(fetchRestaurants()),
});
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);
