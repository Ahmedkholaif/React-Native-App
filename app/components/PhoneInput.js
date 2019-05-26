import React, { Component } from 'react';
import { 
  View,
  Text,
  Picker,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';



import EStyleSheet from 'react-native-extended-stylesheet';
import Modal from 'react-native-modal'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class componentName extends Component {
    constructor(props) {
       super(props);
       this.flags = {
        'eg': require('../../assets/images/eg.png'),
        'ng': require('../../assets/images/ng.png'),
        'gb': require('../../assets/images/gb.png'),
       }
      }
      state = {
        pickerDisplayed: false,
      }
      setPickerValue=(newValue)=> {
        this.props.onChangeCountry(newValue);
        this.togglePicker();
      }
      togglePicker=()=> {
        this.setState({
          pickerDisplayed: !this.state.pickerDisplayed
        })
        console.log("togglePicker")
      }
    
  render() {
    const pickerValues = [
        {
          "name": "Egypt (‫مصر‬‎)",
          "iso2": "eg",
          "dialCode": "20",
          "locale":'ar-EG',
          "maxLength":10
        }, 
        {
          "name": "United Kingdom",
          "iso2": "gb",
          "dialCode": "44",
          "locale":'en-GB',
          "maxLength":10
        },
        {
          "name": "Nigeria",
          "iso2": "ng",
          "dialCode": "234",
          "locale":'en-NG',
          "maxLength":10
        }, 
      ];
    return (
      <View style={styles.container}>
      <View style={styles.phone_container}>
        <TouchableOpacity style={styles.flag_button} onPress={() => this.togglePicker()} >
          <Image style={styles.flag_img}
                source={this.flags[this.props.selectedCountry.iso2]}
                />
        </TouchableOpacity>
        <Text style={styles.phone_text}>(+{this.props.selectedCountry.dialCode})</Text>
        <TextInput
          style={styles.phone_text_input}
          keyboardType='numeric'
          value={this.props.phoneNumber}
          onChangeText={(number) => this.props.onChangePhoneNumber(number)}
         ></TextInput>
         <FontAwesome 
              style={[styles.valid_icon,
                !this.props.validPhone && {display: 'none'}]} name="check-circle"></FontAwesome>
       </View>
      <Modal isVisible={this.state.pickerDisplayed} 
      onBackdropPress={() => this.togglePicker()}>
          <View style={{ margin: 20, padding: 20,
            backgroundColor: '#efefef',
            bottom: 20,
            left: 20,
            right: 20,
            alignItems: 'center',
            position: 'absolute' }}>
            <Text>Please pick a value</Text>
            { pickerValues.map((value, index) => {
              return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                  <Text>{ value.name }</Text>
                </TouchableHighlight>
            })}
            <TouchableHighlight onPress={() => this.togglePicker()} style={{ paddingTop: 4, paddingBottom: 4 }}>
              <Text style={{ color: '#999' }}>Cancel</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
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
    width:'100%'
  },
  phone_container:{
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    width:'80%',
    height:'45rem',
    borderColor: '#C9C9C9',
    borderWidth:1,
    borderRadius:2,
    paddingLeft:'10rem',
    // marginTop:'10rem'
  },
  flag_button:{
    width:'25rem',
    height:'20rem',
    marginHorizontal:'5rem'
  },
  flag_img:{
    width:'25rem',
    height:'20rem',
  },
  phone_text:{
    fontSize:'14rem',
    fontWeight: '500',
    color:'#575757'
  },
  phone_text_input:{
    fontSize:'14rem',
    fontWeight: '500',
    color:'#575757',
    // height:'40rem',
    width:'60%'
  },
  valid_icon:{
    color:'#00E65C',
    width:'25rem',
    height:'20rem',
    fontSize:'15rem',

  }
})