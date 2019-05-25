import React, { Component } from "react";
import { Platform, StyleSheet, Dimensions, StatusBar, Text, View, Image} from "react-native";

import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './app/navigation/navigation';
import AppIntroSlider from 'react-native-app-intro-slider';
import EStyleSheet from 'react-native-extended-stylesheet';

/*const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});*/

export default class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      show_Main_App: false
    };
  }

  _renderItem = props => (
    <View style={styles.mainContent} >
      <Image style={props.imageStyle} source={props.image}/>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );

  on_Done_all_slides = () => {
    this.setState({ show_Main_App: true });
  };

  on_Skip_slides = () => {
    this.setState({ show_Main_App: true });
  };
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    if (this.state.show_Main_App){
      return (
        <AppNavigation />
      );
    }else {
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={this.on_Done_all_slides}
          onSkip={this.on_Skip_slides}
          bottomButton
          nextLabel="Let's Start"
          activeDotStyle={styles.activeDotStyle}
          dotStyle={styles.dotStyle}
          buttonStyle={styles.bottomButton}
          buttonTextStyle={styles.buttonTextStyle}
          paginationStyle={styles.paginationStyle}
        />
      );
    }
  }
}

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
   mainContent: {
    // display: 'flex',
    height:'70%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image_1: {
    // flex: 1,
    width: 165,
    height:  181,
    // marginBottom:'3%',
    opacity:.8,
  },
  image_2: {
    // flex: 1,
    width: 200,
    height:  166,
    // marginBottom:'3%',
    opacity:.8,
  },
  image_3: {
    // flex: 1,
    width: 263,
    height:  185,
    // marginBottom:'3%',
    opacity:.8,
  }
  ,
  title: {
    // flex: 1,
    fontSize: 16,
    color: '#353B46',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  text: {
    // flex: 1,
    color: '#7E828C',
    textAlign: 'center',
    fontSize: 15,
    // lineHeight:1.2,
    // paddingHorizontal: 16,
    marginBottom:'10%',
  },
  paginationStyle:{
    // marginBottom: '20%',
  },
  dotStyle:{
    backgroundColor:'#DED9FC',
    width:8,
    height:8,
  },
  activeDotStyle:{
    backgroundColor:'#7966FE',
    width:11,
    height:11,
  },
  bottomButton:{
    borderRadius: 25,
    backgroundColor:'#9600ff',
    height:50,
    // marginBottom:'10%',
    marginTop:'15%',
  },
  buttonTextStyle:{
    marginBottom: '10%',
    // marginTop:'15%',
    color:'#FFFFFF',
  }
});

const slides = [
  {
    key: 'k1',
    title: 'Seeing is believing',
    text: 'You don’t have to leave your home,\n It’s just a few taps away,\n And voila here it is. ',
    image: require('./assets/images/intro_111.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image_1,
    backgroundColor: '#F6F5FA',
  },
  {
    key: 'k2',
    title: 'Know where to go',
    text: 'know exactly where your products are,\n By location, Store and the shelf,\n start your engine and go.',
    image: require('./assets/images/intro_2.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image_2,
    backgroundColor: '#D500F9',
  },
  {
    key: 'k3',
    title: 'A tour in your hand',
    text: 'Take a walk in your favorite store,\n Enjoy the variety, compare products\n And buy all in one place.',
    image: require('./assets/images/intro_3.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image_3,
    backgroundColor: '#2979FF',
  }
];