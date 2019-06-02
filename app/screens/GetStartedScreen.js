
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

//Custom Components
import MainButton from '../components/MainButton';
import TitleAndDescription from '../components/TitleAndDescription';
import TextButton from '../components/TextButton';

//Images
import Getting_Started_IMG from '../../assets/images/get-started.png';


export default class GetStartedScreen extends Component {
  static navigationOptions = {
    header:null
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.get_started_img}
              source={Getting_Started_IMG}
          />
          <TitleAndDescription
            title="Let's get started"
            desc="Never a better time than now to start Enjoying 
            how you can shop in 360 view with ease and fun."
            containerStyle={styles.title_description}
          />
          <MainButton
            text="Login"
            action={()=>this.props.navigation.navigate('LoginScreen')}
            textStyle={styles.loging_button_Text}
            style={styles.loging_button}
          />
          <MainButton
            text="Register"
            action={()=>this.props.navigation.navigate('RegistrationStepOneScreen')}
          />
          <TextButton
          action={()=>this.props.navigation.navigate('MainNav')}
          text="Continue as a guest"
          />
        </View>
      </ScrollView>
    );
  }
}
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F5FA',
    height:Dimensions.get("window").height,
  },
  get_started_img :{
    height:'170rem',
    width:'250rem',
    marginVertical: '20rem',
    // marginBottom:'40rem'
  },
  title_description:{
    marginVertical:'30rem',
  },  
  loging_button:{
    backgroundColor:'#FFFFFF',
    borderColor:'#9600FF',
  },
  loging_button_Text:{
    color:'#9600FF',
    textAlign:'center',
    fontSize:'14rem'
  },
});
