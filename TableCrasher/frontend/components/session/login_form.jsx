import React from 'react';
import { Link, hashHistory } from 'react-router';

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(newProps) {
    if(newProps!== this.props) {
      this.setState(newProps);
    }
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.logIn(user)
      .then(() => { this.handleSuccess(); }).fail((error) => { this.handleFail(error);});
  }

  handleFail(error) {
    const newErrors = [];
    newErrors.push(error);
    this.setState(newErrors);
  }

  handleSuccess() {
    hashHistory.push("/");

  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  errors() {
    if (this.props.errors) {
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
        <form onSubmit={this.handleSubmit}>
          <ul>
            { this.errors() }
          </ul>
          <h1>Log In"</h1>
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
    )
  }
}
