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
  static navigationOptions = ({navigation})=>({
    header:<RegistrationHeader navigation={navigation} stepStart="2" stepEnd="3"/>,
  });

  constructor() {
    super();
  }

  componentDidMount() {
  }

  _onFulfill=()=>{
    Keyboard.dismiss()
  }
  state = {
    timer: null,
    counter: 30
  };

  componentDidMount() {
    let timer = setInterval(this.countDown, 1000);
    this.setState({timer});
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  countDown =() => {
    if(this.state.counter===0){
       clearInterval(this.state.timer);
    }
    else{
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }

  render() {
    const {navigation} =this.props;
    const number = navigation.getParam('phoneNumberWithCode')?navigation.getParam('phoneNumberWithCode'):"";
    const desc="Enter the 4 digits number that sent to "+number;
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
                desc={desc}
              />
            <Text>{this.props.navigation.getParam('phoneNumber')}</Text>
          <View style={styles.phone_container}>
          <View style={styles.verfication_input_container}>
              <KeycodeInput
                ref="codeInputRef1"
                keyboardType="numeric"
                className={'border-b'}
                codeLength={4}
                space={14}
                size={42}
                inputPosition='left'
                activeColor='#9600FF'
                inactiveColor='#B5B5B5'
                codeInputStyle={styles.verfication_input}
                autoFocus={false}
                onFulfill={(code) => this._onFulfill(code)}
                containerStyle={{marginTop:0}}
                />
              </View>
              <MainButton
                  text="Continue"
                  action={()=>this.props.navigation.navigate('RegistrationStepThreeScreen')}
                  style={{width:'100%'}}
                  />
          </View>
          <View style={{flexDirection:'row'}}>
              <Text style={styles.resend_button_Text}>Didn’t get the code? 
              </Text>
              <TextButton
                text=" Re-send in 0:"
                subText={this.state.counter}
                textStyle={styles.resend_button_Text}/>
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
    justifyContent:'flex-start',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    margin:'15rem',
    padding:'15rem',
  },
  verfication_input_container:{
    height:'50rem',
     marginBottom:'20rem'
  },
  verfication_input:{ 
    color:'gray',
    fontWeight: 'bold',
    fontSize:20,
    // marginBottom:'5rem',
    // paddingBottom:'20rem'
   },
   resend_button_Text:{
      color:'#9600FF',
      fontSize:'14rem'
   },
  keyboard_avoid_padding:{
    height:'150rem'
  }
});