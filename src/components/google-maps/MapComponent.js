import React, { PureComponent } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

class MapComponent extends PureComponent {
  render() {
    const portland = { lat: -34.397, lng: 150.644 };

    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={portland}>
        <Marker position={portland} />
      </GoogleMap>
    );
  }
}

function mapWrapper(MapComponent) {
  return class ChildComponent extends PureComponent {
    render() {
      return (
        <MapComponent
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&v=3.exp&libraries=geometry,places`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      );
    }
  };
}

export default mapWrapper(withScriptjs(withGoogleMap(MapComponent)));