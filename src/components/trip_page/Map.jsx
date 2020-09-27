import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapStyle from '../../components/trip_page/MapStyle'
import Marker from '../../components/trip_page/Marker'

class Map extends Component {
  constructor(props) {
    super(props);
    if (props.cords !== undefined) {
      this.cords = props.cords;
      this.cords.unshift({ lat: 55.386624, lng: 10.398257 })
    }
  }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 1
  };
  // Set flight path lines
  handleGoogleMapApi = (google) => {
    const lineSymbol = {
      path: "M 0,-1 0,1",
      strokeOpacity: 1,
      scale: 3,
    };
    var flightPath = new google.maps.Polyline({
      path: this.cords,
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

  renderMarkers() {
    return (
      <Marker
      lat={55.386624}
      lng={10.398257}
      />
    )
  }
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          onGoogleApiLoaded={this.handleGoogleMapApi}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={mapOptions}
        >
          {this.renderMarkers()}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapOptions = {
  styles: MapStyle // straight out of something like snazzymaps
};



export default Map;



