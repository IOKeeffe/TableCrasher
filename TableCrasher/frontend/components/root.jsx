import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import LogInFormContainer from './session/login_form_container';
import SignUpFormContainer from './user/signup_form_container';
import Main from './main';

const Root = ({store}) => (
    <Provider store={store}>
      <Router history = { hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Main }/>
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
