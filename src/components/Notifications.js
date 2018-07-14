import React, { PureComponent } from 'react';

export default class Notifications extends PureComponent {

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
      <div>
        <button onClick={this.handleGrantPermission}>Grant Permission</button>
        <button onClick={this.handleGetToken}>Get Token</button>
      </div>
    );
  }
}