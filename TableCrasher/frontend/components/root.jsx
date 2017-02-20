import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import RestaurantDetailContainer from './restaurant_detail/restaurant_detail_container';
import Main from './main';

import SearchResults from './reservations/search_results'

const Root = ({store}) => (
    <Provider store={store}>
      <Router history = { hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Main }/>
          <Route path="/restaurants/:restaurantId" component={RestaurantDetailContainer} />
          <Route path="/search-results" component={SearchResults} />
        </Route>
      </Router>
    </Provider>
);

const userCheck = (store) => (nextState, replace) => {
  if(store.getState().session.currentUser) {
    replace("/");
  }
};


export default Root;
