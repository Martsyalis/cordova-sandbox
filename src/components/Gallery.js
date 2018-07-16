import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Gallery extends PureComponent {
  static propTypes = {
    imageArray: PropTypes.array
  };

  render() {
    const { imageArray } = this.props;
    return (
      <div className="gallery">
        {imageArray && imageArray.map((image, i) => {
          return (
            <div key={i} >
              <h2>index: {i}</h2>
              <img src={image} alt="test" className="gallery-image" />
            </div>
          );
        })}
      </div>
    );
  }
}

