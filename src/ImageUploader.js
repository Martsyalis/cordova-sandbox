import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import './ImageUploader.css';

class ImageUpload extends PureComponent {

  render() {
    return (
      <div>
        <form className="file-uploader" onSubmit={event => console.log('submitted image event', event)}>
          <input name="choose-image" type="file" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ImageUpload);
