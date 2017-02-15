import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  window.signIn = SessionApiUtil.signIn;
  window.signUp = SessionApiUtil.signUp;
  window.signOut = SessionApiUtil.signOut;
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render( <Root store={store} />, root);
});
