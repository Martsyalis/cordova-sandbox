import React, { PureComponent } from 'react';
import { HashRouter /* BrowserRouter */ as Router } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

export default class App extends PureComponent {

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((location)=>{
      console.log('location is',  location);
    },
    (err)=>{
      console.log('error in navigation is', err);
    }
    );
  }

  handleGrantPermission = () => {
    window.FirebasePlugin.grantPermission();
  };

  handleGetToken = () => {
    // send token to the db
    window.FirebasePlugin.getToken(token => {
      console.log('token is', token);
    });
  };


  render() {
    return (
      <Router>
        <div>
          <div className="greeting">Hello world!</div>
          <button onClick={this.handleGrantPermission}>Grant Permission</button>
          <button onClick={this.handleGetToken}>Get Token</button>
          <Routes />
        </div>
      </Router>
    );
  }
}