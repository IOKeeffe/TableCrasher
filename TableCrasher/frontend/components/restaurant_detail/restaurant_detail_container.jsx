import { connect } from 'react-redux';
import RestaurantDetail from './restaurant_detail';
import { fetchRestaurant, receiveRestaurant } from '../../actions/restaurant_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: state.restaurantDetail.restaurant,
    id: ownProps.params.restaurantId,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
  unmountRestaurant: () => dispatch(receiveRestaurant(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail);
