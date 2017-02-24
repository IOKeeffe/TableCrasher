import React from 'react';
import { Link } from 'react-router';
import Sidebar from './sidebar';

export default class ProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.setState({updated: false});
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUserDetails(this.state).then((resp) => {this.setState({updated: true});});
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  renderMessages() {
    if(this.state.updated) {
      return (<h3>Update Successful!</h3>);
    }
  }

  renderErrors(errors) {
    return (
        <ul>
          {errors.responseJSON.map((error, i) => (
            <li className='error' key={i}>{error}</li>
          ))}
        </ul>
    );
  }

  render() {
    return (
        <div className="profile-page">
          <Sidebar />
          <div className='profile-content'>
          <div className='details'>
          <h2>My Details</h2>
          {this.renderMessages()}
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <br />
          <label>Username:
            <input type='text'
              value={this.state.username}
              placeholder='Enter Username *'
              onChange={this.handleChange('username')}/>
            </label>
            <br />
            <label>Email Address:
            <input type='text'
            value={this.state.email_address}
            placeholder='Enter Email Address *'
            onChange={this.handleChange('email_address')}/></label>
          <br /><label>First Name:
            <input type='text'
            value={this.state.f_name}
            placeholder='Enter First Name *'
            onChange={this.handleChange('f_name')}/></label>
          <br />
          <label> Last Name:
            <input
            type='text'
            value={this.state.l_name}
            placeholder='Enter Last Name *'
            onChange={this.handleChange('l_name')}/>
          <br />
            </label>
          <input className='auth-button' type='submit' value='Update Details' />
        </form>
        </div>
        </div>
      </div>
    );
  }
}
