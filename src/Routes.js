import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Gallery from './Gallery';
import Feedback from './Feedback';
import giantJpeg from './assets/giant.jpg';
import giantPng from './assets/giant.png';
import giantSvg from './assets/giant.svg';
import largeJpeg from './assets/large.jpg';
import largePng from './assets/large.png';
import smallJpg from './assets/small.jpg';
import smallPng from './assets/small.png';
import icon from './assets/icon.ico';

const imageArray = [giantJpeg, giantPng, giantSvg, largeJpeg, largePng, smallJpg, smallPng, icon];

export default class Routes extends PureComponent {
  componentDidMount() {
    if(!window.cordova) return;
    window.FirebasePlugin.onNotificationOpen(notification => {
      console.log('notification is', notification);
    })
  }

  render() {
    return (
      <Switch>
        <Route path="/gallery" render={() => <Gallery imageArray={imageArray} />} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
    );
  }
}
