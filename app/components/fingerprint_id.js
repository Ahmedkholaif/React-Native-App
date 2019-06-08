import React, { Component } from 'react';
import { Text, TouchableOpacity, Dimensions ,StyleSheet, View, Image } from 'react-native';
import Modal from 'react-native-modal';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class Example extends Component {
  constructor (props){
    super(props);
    this.state = {
      visibleModal: props.visibleModal,
    };
  }


  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.visibleModal !== prevState.visibleModal){
      return { visibleModal: nextProps.visibleModal};
   }
   else return null;
 }

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (

    <View style={styles.modalContent}>
        <View style={styles.img_container}>
            <Image style={styles.image} source={require('../../assets/images/face_id_fg.png')} />
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.title}>Fingerprint</Text>
        <Text style={styles.description}>
          Would you want to allow NASNAV to use Fingerprint for your next login?
        </Text>
        </View>
        <TouchableOpacity style={[styles.button,styles.continue_button]} >
            <Text style={styles.continue_button_Text}>Yes, Sure</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.setModal(null)}
          style={[styles.button,styles.skip_button]} >
        <Text style={styles.skip_button_Text}>
            No thanks,
        </Text>
        <Text style={styles.skip_button_Text}>
           I wanna login manually
        </Text>
    </TouchableOpacity>
        </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Modal
          isVisible={this.state.visibleModal}
          animationInTiming={2000}
          animationOutTiming={2000}
          backdropTransitionInTiming={2000}
          backdropTransitionOutTiming={2000}
          backdropOpacity={.2}
          coverScreen={true}
        >
          {this._renderModalContent()}
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F6F5FA',
      },
      header:{
        height:20
      },
      img_container:{
        display: 'flex',
        height:'160rem',
        width:'160rem',
        backgroundColor: '#EDE9F8',
        borderRadius: '80rem',
        marginVertical: '25rem',
        justifyContent:'center',
        alignItems:'center',
      },
      image:{
        width:'60%',
        height:'60%',
      },
      textContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        marginBottom:'2rem',
        marginTop:'2%'
      },
      title: {
        fontSize: '18rem',
        textAlign: 'center',
        color:'#353B46',
        margin: '10rem',
      },
      description: {
        fontSize:'15rem',
        textAlign: 'center',
        color: '#7E828C',
        marginBottom: '30rem',
        width: '70%',
      },
      phone_container:{
        width:'80%',
        height:'120rem',
        backgroundColor:'white',
        flexDirection: 'column',
        alignItems:'center',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
      },
      continue_button:{
        borderColor:'#FFFFFF',
        backgroundColor:'#9600FF',
        width:'80%',
        borderWidth: 1,
        borderRadius: 50,
        padding:10,
        margin:10
      },
      continue_button_Text:{
        color:'#FFFFFF',
        textAlign:'center',
        fontSize:'14rem'
      },
      skip_button:{
        borderColor:'#9600FF',
        backgroundColor:'#FFFFFF',
        width:'80%',
        borderWidth: 1,
        borderRadius: 50,
        padding:10,
        margin:10
      },
      skip_button_Text:{
        color:'#9600FF',
        textAlign:'center',
        fontSize:'14rem',
      },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height:'90%',
    marginBottom:'10%'
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});