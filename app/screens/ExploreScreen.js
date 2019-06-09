import React, { Component } from "react";
import {
  View,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MapboxGL from "@mapbox/react-native-mapbox-gl";
import Geolocation from 'react-native-geolocation-service';

import keys from "../config/keys";
MapboxGL.setAccessToken(keys.mapboxToken);

import requestLocationPermission from "../helper/requestLocation";

//images
import phoneIcon from "../../assets/images/phone-icon.png";
import bgIcons from "../../assets/images/bg-map-icons.png";
import nasnavIcon from "../../assets/images/nasnav-icon.png";

const carioLocation = [31.211413, 30.05558];

const coordinates = [
  [31.213294, 30.05708],
  [31.211354, 30.057716],
  [31.209149, 30.052409]
];

export default class ExploreScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    coordinates: coordinates,
    latitude: null,
    longitude: null,
    error: null
  };
  async componentDidMount() {
    await requestLocationPermission();
    this.watchId = Geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
        // console.log(this.state);
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, distanceFilter: 0, interval: 5000, fastestInterval: 2000 }
    );
  }

  componentWillUnmount() {
    if(this.watchId!=null){
      Geolocation.clearWatch(this.watchId);

    }
  }

  renderAnnotation(counter) {
    const id = `pointAnnotation${counter}`;
    const coordinate = this.state.coordinates[counter];
    const title = `Longitude: ${this.state.coordinates[counter][0]} Latitude: ${
      this.state.coordinates[counter][1]
    }`;

    return (
      <MapboxGL.PointAnnotation
        key={id}
        id={id}
        title="Test"
        coordinate={coordinate}
      >
        <ImageBackground
          source={bgIcons}
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            width: 60,
            height: 68
          }}
        >
          <Image
            source={phoneIcon}
            style={{
              flex: 1,
              resizeMode: "contain",
              width: 23,
              height: 38
            }}
          />
        </ImageBackground>
      </MapboxGL.PointAnnotation>
    );
  }

  renderAnnotations() {
    const items = [];

    for (let i = 0; i < this.state.coordinates.length; i++) {
      items.push(this.renderAnnotation(i));
    }

    return items;
  }

  toCurrentLocation = () => {
    const { latitude, longitude } = this.state;
    const currentLocation = latitude ? [latitude, longitude] : carioLocation;
    this._map.moveTo(currentLocation);
  };

  render() {
    const { latitude, longitude } = this.state;
    const currentLocation = latitude ? [latitude, longitude] : carioLocation;
    return (
      <View style={{ flex: 1 }}>
        <MapboxGL.MapView
          ref={c => (this._map = c)}
          styleURL={MapboxGL.StyleURL.Light}
          style={{ flex: 1 }}
          zoomLevel={15}
          centerCoordinate={currentLocation}
          logoEnabled={false}
          attributionEnabled={false}
          compassEnabled={false}
        >
          {this.renderAnnotations()}
        </MapboxGL.MapView>
        <View style={styles.inside_map_container}>
          <Image style={styles.icon} source={nasnavIcon} />
          <View style={styles.input_btn_container}>
            <View style={styles.input_container}>
              <MaterialIcons name="search" size={20} />
              <TextInput
                style={styles.search_text_input}
                placeholder="I am looking for…"
                underlineColorAndroid="transparent"
                // value={this.state.username}
                // onChangeText={(username) => this.onChangeUsername(username)}
              />
            </View>
            <TouchableOpacity
              style={styles.current_location_btn}
              onPress={this.toCurrentLocation}
            >
              <MaterialIcons name="my-location" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
const styles = EStyleSheet.create({
  inside_map_container: {
    position: "absolute",
    width: "90%",
    alignSelf: "center",
    marginVertical: "25rem"
  },
  icon: {
    width: "91rem",
    height: "16rem",
    marginBottom: "15rem"
  },
  input_btn_container: {
    flexDirection: "row",
    // width:'90%',
    alignSelf: "center"
  },
  input_container: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    height: "42rem",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    borderRadius: 10,
    paddingHorizontal: "5rem"
  },
  search_text_input: {
    marginHorizontal: "3rem"
  },
  current_location_btn: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "42rem",
    height: "40rem",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    borderRadius: 10,
    marginHorizontal: "10rem"
  }
});
