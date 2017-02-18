import { fetchCityRestaurants, fetchCities } from '../../actions/city_actions';
import { connect } from 'react-redux';
import CityIndex from './city_index';
import { selectAllCities } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    currentCity: state.cities.currentCity,
    cities: selectAllCities(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCityRestaurants: (id) => (dispatch(fetchCityRestaurants(id))),
    fetchCities: () => (dispatch(fetchCities())),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityIndex);
