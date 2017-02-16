import React from 'react';
import { connect } from 'react-redux';
import RestaurantItem from './restaurant_item';

const mapStateToProps = state => {
  return {
    restaurant: state,
  };
};

const mapDispatchToProps = dispatch => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantItem);
