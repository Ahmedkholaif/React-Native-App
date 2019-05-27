import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
 } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import RegistrationHeader from '../components/RegistrationHeader';
import PhoneInput from '../components/PhoneInput'
import { AsYouType } from 'libphonenumber-js'
import validator from 'validator';

//Custom Component
import MainButton from '../components/MainButton';
import TitleAndDescription from '../components/TitleAndDescription'

// import FaceId from '../components/face_id';
// import TouchId from '../components/touch_id';
// import FingerprintId from '../components/fingerprint_id';

export default class RegistrationStepOneScreen extends Component {
  constructor() {
    super();
  }
  static navigationOptions = ({navigation})=>({
    header:<RegistrationHeader navigation={navigation} stepStart="1" stepEnd="3"/>,
  });

  componentDidMount() {
    const {navigation}= this.props;
    const { phoneNumber} =this.state;
    navigation.setParams({
      phoneNumber
    })
  }
  state={
    selectedCountry: {
      "name": "Egypt (‫مصر‬‎)",
      "iso2": "eg",
      "dialCode": "20",
      "locale":'ar-EG',
      "maxLength":10
    },
    phoneNumber:'',
    validPhone:false,
    submitted:false,
    // activeModal:'face',
  }

  // setModal = (currentModal)=>{
  //   this.setState({
  //     activeModal: currentModal,
  //   });
  // }

  onChangePhoneNumber=(phoneNumber)=>{
    const {maxLength,dialCode,locale}= this.state.selectedCountry;
    const trimmedNumber=phoneNumber.replace(/ /g,'');
    // console.log(trimmedNumber.length,maxLength)
    const number = new AsYouType().input("+"+dialCode+phoneNumber);
    console.log(number);
    const formatedNumber = number.substring(4);
    let isValid=false;
    // if(trimmedNumber.length == maxLength)
    if(validator.isMobilePhone(trimmedNumber,locale))
      isValid=true
    this.setState({
        phoneNumber:formatedNumber,
        validPhone:isValid
      });
  }
  onChangeCountry=(newValue)=>{
    this.setState({
      selectedCountry: newValue
    })
  }

  _submit=()=>{
    this.setState({
      submitted:true
    })
    const {validPhone,phoneNumber,selectedCountry} = this.state;
    const phoneNumberWithCode = `+${selectedCountry.dialCode} ${phoneNumber}`;
    if(validPhone)
      this.props.navigation.navigate('RegistrationStepTwoScreen',{phoneNumberWithCode})
    
  }
  render() {
    const {validPhone,submitted} = this.state;
    return (

      <>
      {/* <FaceId 
      visibleModal={this.state.activeModal === 'face'}
      setModal ={this.setModal}
    />

    <TouchId 
      visibleModal={this.state.activeModal === 'touch'}
      setModal ={this.setModal}
    />

    <FingerprintId 
      visibleModal={this.state.activeModal === 'fingerprint'}
      setModal ={this.setModal}
    /> */}

      <ScrollView>
        <KeyboardAvoidingView 
          style={styles.container}
          behavior="padding"
          enabled
          keyboardVerticalOffset = {styles.keyboard_avoid_padding.height}
          >
          <View style={styles.img_container}></View>
          <TitleAndDescription
            title="Registration"
            desc="Enter your mobile number, we will send you a code to for verification"
          />
          <View style={styles.phone_container}>
          <View style={styles.error_container}> 
                {(!validPhone&&submitted)?<Text style={styles.validation_error}>Please, make sure of your Phone!</Text>:null}
              </View>
            <PhoneInput 
                    {...this.state}
                    onChangePhoneNumber={this.onChangePhoneNumber}
                    onChangeCountry={this.onChangeCountry}
                      />
           <MainButton
              text="Continue"
              action={this._submit}
              style={styles.main_button}
              />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      </>
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
  header:{
    height:20
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
    justifyContent:'flex-start',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    margin:'15rem',
    // padding:'15rem',
  },
  main_button:{
    marginBottom:'15rem',
    // marginTop:'10rem',
  },
  keyboard_avoid_padding:{
    height:'80rem'
  },
  error_container:{
    height:'15rem',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center'
  },
  validation_error:{
    color:'#D3374B',
    fontSize:'10rem',
  },
});
