import React, { PureComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

export default class App extends PureComponent {

  handleGrantPermission = () => {
    window.FirebasePlugin.grantPermission();
  };

  handleGetToken = () => {
    // send token to the db
    // window.FirebasePlugin.getToken(token => {
    // });
  };

  render() {
    return (
      <Router>
        <div className="greeting">Hello world!</div>
        <button onClick={this.handleGrantPermission}>Grant Permission</button>
        <button onClick={this.handleGetToken}>Get Token</button>
        <Routes />
      </Router>
    );
  }
}