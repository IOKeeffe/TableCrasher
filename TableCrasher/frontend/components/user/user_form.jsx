export const userForm = (props) => {
  return(
    <form className="sign-up-form" onSubmit={this.handleSubmit}>
      <br />
        <input type="text"
          value={this.props.username}
          placeholder="Enter Username *"
          onChange={this.handleChange('username')}/>
      <br />
        <input
        type="password"
        value={this.props.password}
          placeholder="Enter Password *"
        onChange={this.handleChange('password')}/>
      <br />
        <input type="password"
        value={this.props.passwordVer}
        placeholder="Re-Enter Password *"
        onChange={this.handleChange('passwordVer')}/>
       <br />
        <input type="text"
        value={this.props.email_address}
        placeholder="Enter Email Address *"
        onChange={this.handleChange('email_address')}/>
      <br />
        <input type="text"
        value={this.props.f_name}
        placeholder="Enter First Name *"
        onChange={this.handleChange('f_name')}/>
      <br />
        <input
        type="text"
        value={this.props.l_name}
        placeholder="Enter Last Name *"
        onChange={this.handleChange('l_name')}/>
      <br />
      <input className="auth-button" type="submit" value="Create Account" />
    </form>
  )
}
