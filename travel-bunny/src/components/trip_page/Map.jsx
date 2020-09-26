import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapStyle from '../../components/trip_page/MapStyle'
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 1
  };
  handleGoogleMapApi = (google) => {
    const lineSymbol = {
        path: "M 0,-1 0,1",
        strokeOpacity: 1,
        scale: 3,
      };
    var flightPath = new google.maps.Polyline({
        path: [
            { lat: 52.291, lng: 153.027 },
            { lat: 18.291, lng: 103.027 },
          ],
          strokeOpacity: 0,
          strokeColor: "#e83f53",
          geodesic: true,
          icons: [
            {
              icon: lineSymbol,
              offset: "0",
              repeat: "20px",
            },
          ],
    });

    flightPath.setMap(google.map);
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCWMisJET7O8MpbrFVxlJCo5HawqA_hPQM' }}
          onGoogleApiLoaded={this.handleGoogleMapApi}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={mapOptions}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

const mapOptions = {
    styles: MapStyle // straight out of something like snazzymaps
};


 
export default Map;



