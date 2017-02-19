import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import SignInFormContainer from './session/login_form_container';
import SignUpFormContainer from './user/signup_form_container';
import CityIndexContainer from './cities/city_index_container';
import SearchBarContainer from './home/search_bar_container';
import React from 'react';


export default () => (
  <div className="main-page">
  <SearchBarContainer />
    <div className="content-holder">
      <SignInFormContainer />
      <SignUpFormContainer />
      <RestaurantIndexContainer />
      <CityIndexContainer />
    </div>
  </div>
);
