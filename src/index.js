import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'


function startApp() {
  console.log('startApp is running.')
  reactDOM.render(
    <App/>,
    document.getElementById('root')
  );
}

if(window.cordova) {
  document.addEventListener('deviceready', startApp, false)
} else {
  startApp();
}