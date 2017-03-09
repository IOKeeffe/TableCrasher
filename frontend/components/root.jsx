import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { receiveErrors, RECEIVE_ERRORS } from '../actions/session_actions';
import App from './app';
import RestaurantDetailContainer from './restaurant_detail/restaurant_detail_container';
import MainPageContainer from './main_page/main_page_container';
import ProfileReservationsContainer from './profile/profile_reservations_container';
import ProfileDetailsContainer from './profile/profile_details_container';
import ProfileFavoritesContainer from './profile/profile_favorites_container';

import SearchResultsContainer from './reservations/search_results_container';

const Root = ({store}) => {

  const userCheck = (nextState, replace) => {
    if(!store.getState().session.currentUser) {
      store.dispatch(receiveErrors({responseJSON: ["Please Sign In to continue."]}));
      replace("/");
    }
  };

  return (
    <Provider store={store}>
      <Router history = { hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ MainPageContainer }/>
          <Route path="/restaurants/:restaurantId" component={RestaurantDetailContainer} onEnter={userCheck} />
          <Route path="/search-results" component={SearchResultsContainer} onEnter={userCheck} />
          <Route path="/profile/reservations" component={ProfileReservationsContainer} onEnter={userCheck} />
          <Route path="/profile/details" component={ProfileDetailsContainer} onEnter={userCheck} />
          <Route path="/profile/favorites" component={ProfileFavoritesContainer} onEnter={userCheck} />
        </Route>
      </Router>
    </Provider>
  );
};




export default Root;
