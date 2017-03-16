import React from 'react';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.renderSignInForm = this.renderSignInForm.bind(this);
    this.renderSignUpForm = this.renderSignUpForm.bind(this);
    this.guestLogIn = this.guestLogIn.bind(this);
    this.logOut = this.logOut.bind(this);

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

  logOut() {
    this.props.logOut();
    hashHistory.push("/");
  }

  render() {
    return (
      <div className="header">
        <section className="img-cont">
          <img src="//s3.amazonaws.com/table-crasher-pro/assets/Table_Crasher_logo_final.png"
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
        <a onClick={this.logOut} className="log">Log Out</a>
        <Link className="log" to={'profile/details'}>My Profile</Link>
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
