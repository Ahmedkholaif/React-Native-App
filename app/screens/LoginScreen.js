import React, { Component } from 'react';
import {
  Platform,
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
import Ionicons from 'react-native-vector-icons/Ionicons'
import validator from 'validator';
import FingerprintScanner from 'react-native-fingerprint-scanner';

//Custom Components
import MainButton from '../components/MainButton';
import TitleAndDescription from '../components/TitleAndDescription'
import TextButton from '../components/TextButton';
import SocialMediaLogin from '../components/SocialMediaLogin';

import FaceId from '../components/face_id';
import TouchId from '../components/touch_id';
import FingerprintId from '../components/fingerprint_id';
 
//Images
import Login_IMG from '../../assets/images/login.png';

export default class LoginScreen extends Component {
  constructor() {
    super();
  }

  state={
    showPassword:false,
    validUsername:false,
    submitted:false,
    username:'',
    email:'',
    password:'',
    activeModal:'face',
  }
  componentDidMount() {
    if(Platform.Os === 'android'){
      FingerprintScanner
        .isSensorAvailable()
        .then(biometryType => this.setModal())
        .catch(error => this.setState({ errorMessage: error.message }));
    }else{

    }
  }

  setModal = (currentModal)=>{
    this.setState({
      activeModal: currentModal,
    });
  }

  static navigationOptions = ({navigation})=>({
    header:<RegistrationHeader navigation={navigation} stepStart="1" stepEnd="1"/>,
  });


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
  _submit=()=>{
    const { validEmail ,validUsername} = this.state
    if(!validEmail&&!validUsername){
      this.setState({
        submitted:true
      })
    }
    else{
      this.props.navigation.navigate('MainNav');
    }
  }
  render() {
    const { validUsername,submitted} = this.state
    return (
      <ScrollView>
        <FaceId 
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
        />

        <KeyboardAvoidingView 
          style={styles.container}
          behavior="padding"
          enabled
          keyboardVerticalOffset = {styles.keyboard_avoid_padding.height}
        >
          <View style={styles.img_container}>
            <Image style={styles.registration_s3_img}
              source={Login_IMG}
            />
          </View>
          <TitleAndDescription
            title="Welcome Back"
            desc="It’s always great to see you back, We missed you!"
          />
          <View style={styles.registration_container}>
            {(!validUsername&&submitted)?<Text style={styles.validation_error}>Please, make sure of your email/phone!</Text>:null}
            <View style={styles.registration_text_input_container}>
              <TextInput
                  style={styles.registartion_text_input}
                  placeholder="Email / Phone number"
                  underlineColorAndroid="transparent"
                  value={this.state.username}
                  onChangeText={(username) => this.onChangeUsername(username)}
              />
              <FontAwesome style={[styles.registartion_icons,(submitted)?{color:(validUsername)?'#00E65C':'#F24D6C'}:{}]} name={(!submitted)?"user-circle":((validUsername)?"check":"close")}></FontAwesome>
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
            <TextButton
              text="Forgot Password?"
              style={styles.text_button}
            />
            <SocialMediaLogin/>
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
    height:'92rem',
    width:'72rem',
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
    paddingTop:'20rem',
    marginVertical:'10rem'
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
  validation_error:{
    color:'#D3374B',
    fontSize:'10rem',
  },
  forgot_button_Text:{
    color:'#9600FF',
    textAlign:'center',
    fontSize:'14rem'
  },
  text_button:{
    fontWeight:'500',
    marginVertical:'10rem',
  },
  keyboard_avoid_padding:{
    height:'100rem'
  }
});