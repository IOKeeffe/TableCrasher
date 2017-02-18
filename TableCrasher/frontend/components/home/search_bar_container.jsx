import { connect } from 'react-redux';
import SearchComponent from './search_bar_component';
import { searchRestaurants } from '../../actions/restaurant_actions';


const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  searchRestaurants: (search_term) => dispatch(searchRestaurants(search_term)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
