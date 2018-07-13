import React, { PureComponent } from 'react';

export default class PDFViewer extends PureComponent{

  openInAppBrowser = ()=>{
    // enableViewPort is ios only
    window.openInAppBrowser('https://www.antennahouse.com/XSLsample/pdf/sample-link_1.pdf', '_blank', 'location=no,enableViewportScale=yes');
  };
  openSystemBrowser = ()=>{
    // enableViewPort is ios only
    window.open('https://www.antennahouse.com/XSLsample/pdf/sample-link_1.pdf');
  };
  
  render(){
    return (
      <div>
        <button onClick={this.openInAppBrowser}>In App Browser</button>
        <button onClick={this.openSystemBrowser}>Native </button>
      </div>
    );
  }
}