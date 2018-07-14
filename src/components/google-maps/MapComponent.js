import React, { PureComponent } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

class MapComponent extends PureComponent {
  state = {
    location: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(location => {
      console.log('location is',  location);
      
      this.setState({ location: { lat: location.coords.latitude, lng: location.coords.longitude } });
    },
    (err)=>{
      console.log('error in navigation is', err);
    }
    );
  }

  render() {
    const { location } = this.state;
    if(!location) return null;

    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={location}>
        <Marker position={location} />
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