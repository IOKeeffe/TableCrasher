import React from 'react';
import { Link, hashHistory } from 'react-router';
import { Modal } from 'react-bootstrap';

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
      this.setState({[field]: e.target.value});
    };
  }

  hideModal() {
    hashHistory.push('/')
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
      <Modal
        show={true}
        onHide={this.hideModal}
        dialogClassName="custom-modal">

        <Modal.Header>
          <Modal.Title>Please sign in</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            { this.renderErrors(this.props.errors) }
              <br />
              <input type="text"
              value={this.state.username}
              onChange={this.handleChange('username')}
              placeholder="Username"/>
              <br />

              <input type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
              placeholder="Password"/>
              <br />

            <input className="auth-button" type="submit" value="Sign In" />

            <p className="auth-footer">New to Table Crasher? <Link to='/signUp'>Create an account</Link></p>
            </form>
          </Modal.Body>
        </Modal>
    );
  }
}
