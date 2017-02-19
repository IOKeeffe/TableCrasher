import React from 'react';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.renderSignInForm = this.renderSignInForm.bind(this);
    this.renderSignUpForm = this.renderSignUpForm.bind(this);
    this.guestLogIn = this.guestLogIn.bind(this);
  }

  renderSignInForm(e) {
    e.preventDefault();
    this.props.signingIn();
  }

  guestLogIn() {
    this.props.logIn({
      username: "guest",
      password: "starwars"
    });
  }

  renderSignUpForm(e) {
    e.preventDefault();
    this.props.signingUp();
  }

  render() {
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
        { this.authSection() }
      </div>
    );
  }

  authSection() {
    if (this.props.currentUser) {
      return (
        <div className="auth-section">
        <h3>Hi, {this.props.currentUser.f_name}</h3>
        <a onClick={this.props.logOut} className="log">Log Out</a>
        </div>
      );
    }
    else {
      return (
        <div className="auth-section">
        <a onClick={this.renderSignUpForm} className="sign-up" >
        Sign Up
        </a>
        <a onClick={this.renderSignInForm} className="log" >
        Sign In
        </a>
        <a className="log" onClick={this.guestLogIn}>
        Guest Sign In
        </a>
        </div>
      );
    }
  }
}

export default Header;
