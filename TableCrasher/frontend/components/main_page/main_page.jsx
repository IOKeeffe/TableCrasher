import React from 'react';
import RestaurantIndexContainer from '../restaurant/restaurant_index_container';
import SignInFormContainer from '../session/login_form_container';
import SignUpFormContainer from '../user/signup_form_container';
import CityIndexContainer from '../cities/city_index_container';
import ReservationFormContainer from '../reservations/reservation_form_container';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.changeReservedStatus(false);
  }

  render() {
    return (
      <div className="main-page">
        <ReservationFormContainer />
        <div className="content-holder">
            <SignInFormContainer />
            <SignUpFormContainer />
            <RestaurantIndexContainer />
            <CityIndexContainer />
        </div>
      </div>
    );
  }

}
