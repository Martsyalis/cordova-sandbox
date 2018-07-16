import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { auth } from './firebase';

export default class Credentials extends PureComponent {
  static propTypes = {
    signup: PropTypes.bool.isRequired
  };

  state = {
    email: '',
    password: '',
    displayAuthMessage: false,
    authSucceeded: false,
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSignup = event => {
    event.preventDefault();
    const { email, password } = this.state;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({ authSucceeded: true, displayAuthMessage: true });
        console.log('response from firebase', response);
      })
      .catch(err =>{
        this.setState({ authSucceeded: false, displayAuthMessage: true });
        console.log(err);
      });  
  };

  handleSignin = event => {
    event.preventDefault();
    const { email, password } = this.state;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(response =>{
        this.setState({ authSucceeded: true, displayAuthMessage: true  });
        console.log('response from firebase', response);
      })
      .catch(err =>{
        this.setState({ authSucceeded: false, displayAuthMessage: true });
        console.log(err);
      });  
  };

  render() {
    const { email, password, displayAuthMessage, authSucceeded } = this.state;
    const { signup } = this.props;

    return (
      <div>
        { displayAuthMessage &&
          <AuthMessage 
            succeeded={authSucceeded}
          />
        }
        <form onSubmit={event => signup ? this.handleSignup(event) : this.handleSignin(event)} className="auth-form">
          <h3>{signup ? 'Sign Up' : 'Sign In'}</h3>
          <label>Email</label>
          <input type="text" name="email" value={email} onChange={this.handleChange}/>
           
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={this.handleChange}/>

          <button type="submit">SUBMIT</button>
        </form>
        
      </div>
    );
  }
}

class AuthMessage extends PureComponent {
  static propTypes = {
    succeeded: PropTypes.bool
  };

  render(){
    const { succeeded } = this.props;

    return (
      <div>
        { succeeded
          ? <div className="auth-message-success">
            Auth was a success
          </div>

          : <div className="auth-message-failure">
            Auth failed
          </div>
        }
      </div>
    );
  }
}