import React from 'react';
import { Link, hashHistory } from 'react-router';

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email_address: '',
      f_name: '',
      l_name: '',
      errors: `${this.props.errors}`
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if(this.state.password === this.state.password_ver){
      this.props.signUp(user);
    }
    else {
      this.setState(Object.assign(this.state, {
        errors: ["Passwords Do Not Match"]}));
    }
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  errors() {
    if (this.props.errors) {
      debugger
      return (
        this.props.errors.map((error, i) => {
          return (<li className="error" key={i}>{error}</li>);
        })
      );
    }
  }

  render() {
    return (
      <div>
      <ul>
      { this.errors() }
      </ul>
        <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <label>Username:
          <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
        </label>
        <label>Password:
          <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
        </label>
        <label>Re-enter Password:
          <input type="password" value={this.state.password_ver} onChange={this.handleChange('password_ver')} />
        </label>
        <label>Email Address:
          <input type="email" value={this.state.email_address} onChange={this.handleChange('email_address')} />
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
    )
  }
}
