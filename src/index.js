import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './main.css';

function startApp() {
  if(window.cordova){
    window.openInAppBrowser = cordova.InAppBrowser.open;
  }
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
}

if(window.cordova) {

  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}

