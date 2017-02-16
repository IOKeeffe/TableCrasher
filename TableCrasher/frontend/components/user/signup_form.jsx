import React from 'react';
import { Link, hashHistory } from 'react-router';
import { Modal } from 'react-bootstrap';

export default class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    // this.defaults = {
      // f_name: 'First Name *',
      // l_name: 'Last Name *',
      // username: 'Enter username *',
      // email_address: 'Enter email *',
      // password: 'Enter Password *',
      // passwordVer: 'Re-enter password *',
    // };
    // this.state = this.defaults;
    this.state = {
      f_name: '',
      l_name: '',
      username: '',
      email_address: '',
      password: '',
      passwordVer: '',

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

  hideModal() {
    hashHistory.push('/');
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
        show={true}
        onHide={this.hideModal}
        dialogClassName="custom-modal">
        <Modal.Header>
          <Modal.Title>Welcome to Table Crasher!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        { this.renderErrors(this.props.errors) }
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <br />
              <input type="text"
                value={this.state.username}
                placeholder="Enter Username *"
                onChange={this.handleChange('username')}/>
            <br />
              <input
              type="password"
              value={this.state.password}
                placeholder="Enter Password *"
              onChange={this.handleChange('password')}/>
            <br />
              <input type="password"
              value={this.state.passwordVer}
              placeholder="Re-Enter Password *"
              onChange={this.handleChange('passwordVer')}/>
             <br />
              <input type="text"
              value={this.state.email_address}
              placeholder="Enter Email Address *"
              onChange={this.handleChange('email_address')}/>
            <br />
              <input type="text"
              value={this.state.f_name}
              placeholder="Enter First Name *"
              onChange={this.handleChange('f_name')}/>
            <br />
              <input
              type="text"
              value={this.state.l_name}
              placeholder="Enter Last Name *"
              onChange={this.handleChange('l_name')}/>
            <br />
            <input className="auth-button" type="submit" value="Create Account" />
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}
