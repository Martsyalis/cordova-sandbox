import React, { PureComponent } from 'react';
import { HashRouter /* BrowserRouter */ as Router, Link } from 'react-router-dom';
import Routes from './Routes';
import firebase from 'firebase';
import './App.css';

export default class App extends PureComponent {

  componentDidMount(){
    const config = {
      apiKey: 'AIzaSyBJSZCkeTqcw0bQwOeLBxTDlzkgxaYYZ2E',
      authDomain: 'sandbox-cordova.firebaseapp.com',
      databaseURL: 'https://sandbox-cordova.firebaseio.com',
      projectId: 'sandbox-cordova',
      storageBucket: 'sandbox-cordova.appspot.com',
      messagingSenderId: '493452813519'
    };
    firebase.initializeApp(config);
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
          <Link to='/map'><button>Map</button></Link>
          <Link to='/gallery'><button>Gallery</button></Link>
          <Link to='/image-uploader'><button>ImageUploader</button></Link>
          <Link to='/pdf-viewer'><button>PDF Viewer</button></Link>
          <Routes />
        </div>
      </Router>
    );
  }
}