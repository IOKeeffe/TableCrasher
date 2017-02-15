import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  if (props.currentUser) {
    return (
      <div>
        <h3>`Welcome, {props.currentUser.f_name}`</h3>
        <button onClick={props.logOut}>Get out.</button>
      </div>
    );
  }
  else {
    return (
      <div id="header">
        <Link to={`/login`}>
          Log In
        </Link>
        <button onClick={() => {
          props.logIn({
            username: "guest",
            password: "starwars"
          });
        }}>
        Guest Log In
        </button>
        <Link to={`/signup`}>
          Sign Up
        </Link>
      </div>
    );
  }
};

export default Header;
