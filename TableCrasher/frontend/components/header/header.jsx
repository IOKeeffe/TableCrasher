import React from 'react';
import { Link, hashHistory } from 'react-router';

const Header = (props) => {
  return (
    <div className="header">
      <section className="img-cont">
        <img src="http://res.cloudinary.com/dydv1ehma/image/upload/v1487193104/h47eu6r9tb2y8wbehuo2.png"
        alt="logo"
        onClick={
          () => hashHistory.push("/")
        }
        />
      </section>
      <AuthSection props={props} />
    </div>
  );
};

const AuthSection = ({props}) => {
  if (props.currentUser) {
    return (
      <div className="auth-section">
        <h3>Hi, {props.currentUser.f_name}</h3>
        <a onClick={props.logOut} className="log">Log Out</a>
      </div>
    );
  }
  else {
    return (
      <div className="auth-section">
      <Link to={`/signup`} className="sign-up">
      Sign Up
      </Link>
      <Link to={`/login`} className="log" >
      Sign In
      </Link>
      <a className="log" onClick={() => {
        props.logIn({
          username: "guest",
          password: "starwars"
        });
      }}>
      Guest Sign In
      </a>
      </div>
    );
  }
};

export default Header;
