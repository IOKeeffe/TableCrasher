import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';


const mapStateToProps = ({restaurantDetail}) => ({
  restaurantDetail,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);
