import React from 'react';
import { Link, hashHistory, } from 'react-router';

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.logIn(user);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value,});
    };
  }

  renderErrors(errors) {
    return (
      <ul>
        {errors.map((error, i) => (
          <li className="error" key={i}>{error.responseText}</li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { this.renderErrors(this.props.errors) }
          <h1>Log In</h1>
          <label>Username:
            <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
          </label>
          <input type="submit" />
          <Link to='/signUp'>Sign Up</Link>
          </form>
        </div>
    );
  }
}
