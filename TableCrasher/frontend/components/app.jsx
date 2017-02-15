import React from 'react';
import HeaderContainer from './header/header_container';

const App = (props) => { return (
  <div>
    <h1>Table Crasher</h1>
    <HeaderContainer />
    { props.children }
  </div>
);};
export default App;
