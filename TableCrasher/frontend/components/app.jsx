import React from 'react';
import HeaderContainer from './header/header_container';
import SearchBarContainer from './home/search_bar_container';

const App = (props) => { return (
  <div id="home-div" className="modal-container">
    <HeaderContainer />
    { props.children }
  </div>
);};
export default App;
