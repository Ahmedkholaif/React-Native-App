import React, { Component } from 'react'
import { Text, View ,Platform} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import EStyleSheet from 'react-native-extended-stylesheet';
import FaceId from '../components/face_id';
import TouchId from '../components/touch_id';
import Fingerprint from '../components/fingerprint_id';
export default class HomeScreen extends Component {
  render() {
    return (
      <>
      <FaceId />
      <TouchId />
      <Fingerprint />
      </>
    )
  }
}