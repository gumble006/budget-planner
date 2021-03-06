import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

// This component is not being used currently

export default class Mapper extends Component {
  constructor() {
    super();
    this.state = {
      lat: 47.6062,
      lng: -122.3321,
      zoom: 12,
    };
  }

  render() {
    const position = [
      this.props.mapData.features[0].center[1] || this.state.lat,
      this.props.mapData.features[0].center[0] || this.state.lng,
    ];
   
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRhbXNncmVnMTAwIiwiYSI6ImNpdWl3ZDUwMzAxNzMyeW55Z2xldTU0ZXcifQ.TthhgwWHDLaLt5yzcuzp8A"
        />
      </Map>
    );
  }
}

Mapper.propTypes = {
  mapData: React.PropTypes.object.isRequired,
};
