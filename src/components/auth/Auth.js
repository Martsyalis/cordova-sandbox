import React, { PureComponent } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Credentials from './Credentials';

export default class Auth extends PureComponent {
  render() {
    return (
      <div>
        <Link to='/auth/signup'><button>Sign Up</button></Link>
        <Link to='/auth/signin'><button>Sign In</button></Link>
        <Switch>
          <Route path="/auth/signup" render={() => <Credentials signup={true} />} />
          <Route path="/auth/signin" render={() => <Credentials signup={false} />} />
        </Switch>     
      </div>
    );
  }
}