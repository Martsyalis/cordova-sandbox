import React, { PureComponent } from 'react';
import { HashRouter /* BrowserRouter */ as Router, Link } from 'react-router-dom';
import Routes from './Routes';

export default class App extends PureComponent {

  render() {
    return (
      <Router>
        <div>
          <div className="greeting">Hello world!</div>
          <Link to='/auth'><button>Auth</button></Link>
          <Link to='/notifications'><button>Notifications</button></Link>
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