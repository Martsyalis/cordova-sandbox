import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBJSZCkeTqcw0bQwOeLBxTDlzkgxaYYZ2E',
  authDomain: 'sandbox-cordova.firebaseapp.com',
  databaseURL: 'https://sandbox-cordova.firebaseio.com',
  projectId: 'sandbox-cordova',
  storageBucket: 'sandbox-cordova.appspot.com',
  messagingSenderId: '493452813519'
};

//the root app just in case we need it
export const firebaseApp = firebase.initializeApp(config);

export const auth = firebaseApp.auth(); //the firebase auth namespace

