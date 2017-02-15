import React from 'react';
import { Link, hashHistory } from 'react-router';

export default class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordVer: '',
      email_address: '',
      f_name: '',
      l_name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if(this.state.password === this.state.passwordVer){
      this.props.signUp(user);
    }
    else {
      this.props.receiveErrors({'responseText': 'Passwords Do Not Match'});
    }
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors(errors) {
    if(errors.responseJSON){
      return (
        <ul>
          {errors.responseJSON.map((error, i) => (
            <li className="error" key={i}>{error}</li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div>
      { this.renderErrors(this.props.errors) }
        <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <label>Username:
          <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
        </label>
        <label>Password:
          <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
        </label>
        <label>Re-enter Password:
          <input type="password" value={this.state.passwordVer} onChange={this.handleChange('passwordVer')} />
        </label>
        <label>Email Address:
          <input type="text" value={this.state.email_address} onChange={this.handleChange('email_address')} />
        </label>
        <label>First Name:
          <input type="text" value={this.state.f_name} onChange={this.handleChange('f_name')} />
        </label>
        <label>Last Name:
          <input type="text" value={this.state.l_name} onChange={this.handleChange('l_name')} />
        </label>
        <input type="submit" />
        <Link to='/logIn'>Log In</Link>
        </form>
      </div>
    );
  }
}
