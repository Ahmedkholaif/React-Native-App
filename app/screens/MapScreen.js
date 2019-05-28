import React, {Component} from 'react';
import {View} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
const ACCESS_TOKEN = 'pk.eyJ1IjoibmFzbmF2IiwiYSI6ImNqdzZ3YzZwZDAzdmw0NGxkOWh3aTNyejkifQ.WjiLDxqtqtRSQbz5deMP2g';
MapboxGL.setAccessToken(ACCESS_TOKEN);

const columbusCircleCoordinates = [
  31.4645148,30.0690567 
];

export default class MapScreen extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
          <MapboxGL.MapView
          ref={(c) => this._map = c}
          style={{flex: 1}}
          zoomLevel={15}
          centerCoordinate={columbusCircleCoordinates}>
        </MapboxGL.MapView>
      </View>
      );
  }
}