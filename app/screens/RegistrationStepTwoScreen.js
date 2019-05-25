import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
 } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import RegistrationHeader from '../components/RegistrationHeader';
// import { KeycodeInput } from 'react-native-keycode'
import KeycodeInput from 'react-native-confirmation-code-input';

import MainButton from '../components/MainButton';
import TitleAndDescription from '../components/TitleAndDescription'
import TextButton from '../components/TextButton';

export default class RegistrationStepTwoScreen extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  _onFulfill=()=>{
    Keyboard.dismiss()
  }

  static navigationOptions = ({navigation})=>({
    header:<RegistrationHeader navigation={navigation} stepStart="2" stepEnd="3"/>,
  });

  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView 
            style={styles.container}
            behavior="padding"
            keyboardVerticalOffset = {styles.keyboard_avoid_padding.height}
            >
          <View style={styles.img_container}></View>
          <TitleAndDescription
                title="Verification"
                desc="Enter the 4 digits number that sent to +20 123 456 789 0"
              />
          <View style={styles.phone_container}>
          <View style={styles.verfication_input_container}>
            <KeycodeInput
              ref="codeInputRef1"
              keyboardType="numeric"
              className={'border-b'}
              codeLength={4}
              space={18}
              size={42}
              inputPosition='left'
              activeColor='#9600FF'
              inactiveColor='#B5B5B5'
              codeInputStyle={styles.verfication_input}
              autoFocus={false}
              onFulfill={(code) => this._onFulfill(code)}
              />
              </View>
            <MainButton
                text="Continue"
                action={()=>this.props.navigation.navigate('RegistrationStepThreeScreen')}
                />
          </View>
          <View style={{flexDirection:'row'}}>
              <Text style={styles.resend_button_Text}>Didn’t get the code? 
              </Text>
              <TextButton
                text=" Re-send in 0:30"/>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F6F5FA',
    height:Dimensions.get("window").height,
  },
  img_container:{
    height:'130rem',
    width:'130rem',
    backgroundColor: '#EDE9F8',
    borderRadius: '75rem',
    marginVertical: '20rem'
  },
  phone_container:{
    width:'80%',
    height:'150rem',
    backgroundColor:'white',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    margin:'15rem',
    padding:'10rem',
  },
  verfication_input_container:{
    height:'60rem',
    marginBottom:'15rem'
  },
  verfication_input:{ 
    color:'gray',
    fontWeight: 'bold',
    fontSize:20,
    marginBottom:'5rem',
   },
   resend_button_Text:{
      color:'#9600FF'
   },
  keyboard_avoid_padding:{
    height:'150rem'
  }
});