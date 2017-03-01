import React from 'react';
import HeaderContainer from './header/header_container';

const App = (props) => { return (
  <div id="home-div" className="modal-container">
    <HeaderContainer />
    { props.children }
  </div>
);};
export default App;
