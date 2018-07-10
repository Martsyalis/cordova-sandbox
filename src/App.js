import React, { PureComponent, Fragment } from 'react';
import giantJpeg from './assets/giant.jpg';
import giantPng from './assets/giant.png';
import giantSvg from './assets/giant.svg';
import largeJpeg from './assets/large.jpg';
import largePng from './assets/large.png';
import smallJpg from './assets/small.jpg';
import smallPng from './assets/small.png';
import icon from './assets/icon.ico';
import Gallery from './Gallery';
import './App.css';

const imageArray = [giantJpeg, giantPng, giantSvg, largeJpeg, largePng, smallJpg, smallPng, icon];

export default class App extends PureComponent {

  render() {
    return (
      <Fragment>
        <div className="greeting">Hello world!</div>
        <Gallery imageArray={imageArray} />
      </Fragment>
    );
  }
}