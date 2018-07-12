import React, { PureComponent } from 'react';
 // import { storage } from '../services/firebase';
import { Link, withRouter } from 'react-router-dom';

class ImageUpload extends PureComponent {
  state = {
    isUploading: false,
    progress: 0,
    date: '',
    time: '',
    email: '',
    timeChanged: false,
    submitted: false
  };

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.log('error is', error);
  };

  handleUploadSuccess = filename => {
    this.setState({ image: filename, progress: 100, isUploading: false });
    console.log('filename is', filename);
  };

  render() {
    console.log('something showing in image uploader');
    let storage = 'hello';
    return (
      <div>
        <form>
          {this.state.isUploading && (
            <p>Progress: {this.state.progress}% completed</p>
          )}
          <label style={}>
            Upload home photos?
            <ImageUploader
              hidden
              multiple
              name="image"
              storageRef={storage}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default withRouter(ImageUpload);
