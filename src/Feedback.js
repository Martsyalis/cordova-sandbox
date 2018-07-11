import React, { PureComponent } from 'react';
import { Switch, Link, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Feedback extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  render() {
    const { match } = this.props;

    return (
      <div>
        <h2>Welcome to Feedback</h2>
        <div>
          <Link to={`${match.url}/post`}>Post Feedback</Link>
          <Link to={`${match.url}/get`}>Get Feedback</Link>
        </div>
        <Switch>
          <Route path="/post" render={() => <div>Thanks, but no thanks.</div>} />
          <Route path="/get" render={() => <div>Best website ever created in the world.</div>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Feedback);