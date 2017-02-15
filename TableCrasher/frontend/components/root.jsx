import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import LogInFormContainer from './session/login_form_container';
import SignUpFormContainer from './user/signup_form_container';

const Root = ({store}) => (
    <Provider store={store}>
      <Router history = { hashHistory }>
        <Route path="/" component={ App } />
        <Route path="/signup" component={ SignUpFormContainer } onEnter= {userCheck}/>
        <Route path="/login" component={ LogInFormContainer } onEnter= {userCheck}/>
      </Router>
    </Provider>
)

const userCheck = (nextState, replace) => {
  if(store.getState().session.currentUser) {
    replace("/");
  }
}

export default Root
