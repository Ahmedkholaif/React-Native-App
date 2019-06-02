import React, { Component } from 'react';
import {
  StyleSheet
  ,Image
  ,View
  ,Text
  ,TextInput
  ,Dimensions
  ,TouchableOpacity
  ,KeyboardAvoidingView
  ,ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import RegistrationHeader from '../components/RegistrationHeader';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import validator from 'validator';

//Custom Component
import MainButton from '../components/MainButton';
import TitleAndDescription from '../components/TitleAndDescription'
import SocialMediaLogin from '../components/SocialMediaLogin';

//Images
import Registration_S3_IMG from '../../assets/images/registration-s3.png';

export default class RegistrationStepThreeScreen extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  static navigationOptions = ({navigation})=>({
    header:<RegistrationHeader navigation={navigation} stepStart="3" stepEnd="3"/>,
  });

  state={
    showPassword:false,
    validEmail:false,
    validUsername:false,
    submitted:false,
    username:'',
    email:'',
    password:''
  }

  togglePassword=()=>{
    this.setState({
      showPassword: !this.state.showPassword
      }
    )
  }

  onChangeUsername=(username)=>{
    let validUsername=true;
    if(validator.isEmpty(username)){
      validUsername=false;
    }
    this.setState({
      username,
      validUsername
    })
    console.log("Valid username",validUsername)

  }

  onChangeEmail=(email)=>{
    let validEmail=true;
    if(!validator.isEmail(email)){
      validEmail=false;
    }
    this.setState({
      email,
      validEmail
    })
    console.log("Valid Email",validEmail)
  }
  _submit=()=>{
    const { validEmail ,validUsername} = this.state
    if(!validEmail||!validUsername){
      this.setState({
        submitted:true
      })
    }
    else{
      this.props.navigation.navigate('MainNav');
    }
  }
  render() {
    const { validEmail ,validUsername,submitted} = this.state
    return (
      <ScrollView>
          <KeyboardAvoidingView 
          style={styles.container}
          behavior="padding"
          enabled
          keyboardVerticalOffset = {styles.keyboard_avoid_padding.height}
          >
              <View style={styles.img_container}>
                <Image style={styles.registration_s3_img}
                  source={Registration_S3_IMG}
                />
              </View>
              <TitleAndDescription
                title="Let’s get to know"
                desc="We’d love to know more about you to enjoy a great experience just for you."
              />
              <View style={styles.registration_container}>
              <View style={styles.error_container}> 
                {(!validUsername&&submitted)?<Text style={styles.validation_error}>Please, make sure of your username!</Text>:null}
                {(!validEmail&&submitted)?<Text style={styles.validation_error}>Please, make sure of your email!</Text>:null}
              </View>
                <View style={styles.registration_text_input_container}>
                  <TextInput
                      style={styles.registartion_text_input}
                      placeholder="Your Name"
                      underlineColorAndroid="transparent"
                      value={this.state.username}
                      onChangeText={(username) => this.onChangeUsername(username)}
                  />
                  <FontAwesome style={[styles.registartion_icons,(submitted)?{color:(validUsername)?'#00E65C':'#F24D6C'}:{}]} name={(!submitted)?"user-circle":((validUsername)?"check":"close")}></FontAwesome>
                </View>
                <View style={styles.registration_text_input_container}>
                  <TextInput
                      style={styles.registartion_text_input}
                      placeholder="Your Email"
                      underlineColorAndroid="transparent"
                      value={this.state.email}
                      onChangeText={(email) => this.onChangeEmail(email)}
                  />
                  <FontAwesome style={[styles.registartion_icons,(submitted)?{color:(validEmail)?'#00E65C':'#F24D6C'}:{}]} name={(!submitted)?"envelope":((validEmail)?"check":"close")}></FontAwesome>
                </View>
                <View style={styles.registration_text_input_container}>
                  <TextInput
                      style={styles.registartion_text_input}
                      placeholder="Your Password"
                      secureTextEntry={!this.state.showPassword}
                      underlineColorAndroid="transparent"
                  />
                  <TouchableOpacity onPress={this.togglePassword}>
                      <Ionicons style={styles.registartion_icons} name={this.state.showPassword?"ios-eye-off":"ios-eye"}></Ionicons>
                  </TouchableOpacity>
                </View>
                <MainButton
                  text="Start"
                  action={this._submit}
                  />
                <SocialMediaLogin
                />
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
    // marginVertical:'40rem'
    height:Dimensions.get("window").height,
    // height:'550rem',
  },
  img_container:{
    height:'130rem',
    width:'130rem',
    backgroundColor: '#EDE9F8',
    borderRadius: '75rem',
    marginVertical: '20rem',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  registration_s3_img:{
    height:'80rem',
    width:'80rem',
  },
  registration_container:{
    width:'80%',
    backgroundColor:'white',
    flexDirection: 'column',
    alignItems:'center',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    // paddingTop:'20rem',
    marginVertical:'10rem',
  },
  registration_text_input_container:{
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    width:'80%',
    height:'40rem',
    borderColor: '#C9C9C9',
    borderWidth:1,
    borderRadius:2,
    paddingLeft:'10rem',
    marginVertical:'5rem'
  }, 
  registartion_text_input:{
    width:'85%',
    fontSize:'12rem'
  },  
  registartion_icons:{
    // width:'10%',
    fontSize:'18rem',
    height:'20rem',
    width:'20rem',
    color:'#C4C4C4',
  },
  error_container:{
    height:'25rem',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center'
  },
  validation_error:{
    color:'#D3374B',
    fontSize:'10rem',
  },
  keyboard_avoid_padding:{
    height:'100rem'
  }
});



