import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  debugger
  if (props.currentUser) {
    return (
      <div>
        <h3>`Welcome, ${props.currentUser.username}`</h3>
        <button onClick={props.logOut}>Get out.</button>
      </div>
    );
  }
  else {
    console.log("UNCOOL");
    return (
      <div>
        <Link to={`/signup`}>
          Log In
        </Link>
        <Link to={`/login`}>
          Sign Up
        </Link>

      </div>
    );
  }
};

export default Header;
