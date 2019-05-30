import React, { Component } from "react";
import { Platform, StyleSheet, TouchableOpacity, Dimensions, StatusBar, Text, View, Image,} from "react-native";

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
      show_Main_App: true,
      isPortrait:Dimensions.get('window').height > 500
    };
    Dimensions.addEventListener('change',(dims)=>{
       this.setState({
         isPortrait: Dimensions.get('window').height > 500
       })
    })
  }

  _renderItem = props => (
    <View style={[styles.mainContent,(this.state.isPortrait)?styles.portraitMainContent:null]} >
      <Image style={[props.imageStyle,(!this.state.isPortrait)?styles.landscape_img:null]} source={props.image}/>
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

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.bottomButton}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    const {isPortrait} = this.state;
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
            doneLabel="Let's Start"
            activeDotStyle={[styles.activeDotStyle,(isPortrait)?styles.portraitDotStyle:null]}
            dotStyle={[styles.dotStyle,(isPortrait)?styles.portraitDotStyle:null]}
            buttonStyle={[styles.bottomButton,(isPortrait)?styles.portraitBottomButton:null]}
            buttonTextStyle={styles.buttonTextStyle}
            paginationStyle={styles.paginationStyle}
            contentContainerStyle={styles.contentContainer}
          />
      );
    }
  }
}

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
// console.log(Dimensions.get('window').height,isPortrait);
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#F5FCFF",
    height:Dimensions.get("window").height,

  },
  contentContainer:{
    backgroundColor: '#F6F5FA',
  },
   mainContent: {
    // display: 'flex',
    marginTop:'40rem',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  portraitMainContent:{
    height:'70%',
  },
  image_1: {
    width: '165rem',
    height:  '181rem',
    opacity:.8,
  },
  image_2: {
    width: '200rem',
    height:  '166rem',
    opacity:.8,
  },
  image_3: {
    width: '263rem',
    height:  '185rem',
    opacity:.8,
  }
  ,
  landscape_img:{
    width: '120rem',
    height:  '90rem',
    opacity:.8,
  },
  title: {
    // flex: 1,
    fontSize: '18rem',
    color: '#353B46',
    textAlign: 'center',
    marginBottom: '10rem',
    fontWeight: 'bold',
  },
  text: {
    // flex: 1,
    color: '#7E828C',
    textAlign: 'center',
    fontSize:'15rem',
    // lineHeight:1.2,
    // paddingHorizontal: 16,
    marginBottom:'45rem',
  },
  paginationStyle:{
    // marginBottom: '20%',
  },
  dotStyle:{
    backgroundColor:'#DED9FC',
    width:'8rem',
    height:'8rem',
  },
  activeDotStyle:{
    backgroundColor:'#9600FF',
    width:'11rem',
    height:'11rem',
  },
  portraitDotStyle:{
    marginBottom:'80rem',
  },
  bottomButton:{
    borderWidth: 1,
    borderRadius: 50,
    borderColor:'#FFFFFF',
    backgroundColor:'#9600FF',
    width:'90%',
    alignSelf: 'center',
    padding:'12rem',
  },
  portraitBottomButton:{
    marginBottom:'50rem'
  },
  buttonTextStyle:{
    color:'#FFFFFF',
    textAlign:'center',
    fontSize:'14rem',
    fontWeight:'500',
    padding: 0,

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