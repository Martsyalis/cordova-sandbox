import React, { PureComponent } from 'react';
import firebase from 'firebase';
import './SignUp.css';

export default class SignUp extends PureComponent {

  state = {
    email: '',
    password: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSignup = () => {
    const { email, password } = this.state;
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => console.log(err));
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSignup} className="signup-form">
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={this.handleChange}/>

        <label>Password</label>
        <input type="password" name="password" value={password} onChange={this.handleChange}/>

        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

