import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { auth } from './firebase';
import './Credentials.css';

export default class Credentials extends PureComponent {
  static propTypes = {
    signup: PropTypes.bool.isRequired
  };

  state = {
    email: '',
    password: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSignup = event => {
    event.preventDefault();
    const { email, password } = this.state;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(response => console.log('response from firebase', response))
      .catch(err => console.log(err));
  };

  handleSignin = event => {
    event.preventDefault();
    const { email, password } = this.state;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(response => console.log('response from firebase', response))
      .catch(err => console.log(err));
  };

  render() {
    const { email, password } = this.state;
    const { signup } = this.props;

    return (
      <form onSubmit={event => signup ? this.handleSignup(event) : this.handleSignin(event)} className="auth-form">
        <h3>{signup ? 'Sign Up' : 'Sign In'}</h3>
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={this.handleChange}/>

        <label>Password</label>
        <input type="password" name="password" value={password} onChange={this.handleChange}/>

        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

