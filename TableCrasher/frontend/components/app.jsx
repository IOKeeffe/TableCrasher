import React from 'react';
import HeaderContainer from './header/header'

const App = ({ children }) => (
  <div>
    <h1>Table Crasher</h1>
    <HeaderContainer />
    { children }
  </div>
)
export default App;
