import React, { PureComponent } from 'react';

export default class PDFViewer extends PureComponent{

  handleClick = ()=>{
    window.open('https://english.duke.edu/sites/english.duke.edu/files/file-attachments/Ulysses%20by%20Alfred,%20Lord%20Tennyson%20-%20The%20Poetry%20Foundation.pdf', '_blank', 'enableViewportScale=yes');
  };
  
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>Blank</button>
      </div>
    );
  }
}