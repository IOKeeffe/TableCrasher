import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import RestaurantDetailContainer from './user/signup_form_container';
import Main from './main';

const Root = ({store}) => (
    <Provider store={store}>
      <Router history = { hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Main }/>
          <Route path="/restaurant/:restaurantId" component={RestaurantDetailContainer} />
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
