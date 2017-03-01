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
    this.hideModal = this.hideModal.bind(this);
    this.renderSignUp = this.renderSignUp.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  renderSignUp(e) {
    e.preventDefault();
    this.props.toggleSigningUp(true);
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.hideModal();
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
    if(this.props.signingIn) {
      this.props.toggleSigningIn();
    }
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
      <Modal
        show={this.props.signingIn}
        onHide={this.hideModal}
        dialogClassName="custom-modal">

        <Modal.Header>
          <Modal.Title>Please sign in</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          { this.renderErrors(this.props.errors) }
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
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

            <p className="auth-footer">New to Table Crasher? <a onClick={this.renderSignUp}>Create an account</a></p>
            </form>
          </Modal.Body>
        </Modal>
    );
  }
}
