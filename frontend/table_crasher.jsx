import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as SessionActions from './actions/session_actions';
import * as RestaurantActions from './actions/restaurant_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] }};
    store = configureStore(preloadedState);
  }
  else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render( <Root store={store} />, root);
});
