// Functional component
import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function RegistrationHeader({navigation,stepStart,stepEnd}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.goBack(null)} style={styles.backButton}>
            <FontAwesome style={styles.backArrow} name="angle-left"></FontAwesome>
        </TouchableOpacity>
            <View style={styles.title_container}>
              <Text style={styles.title}>Step 
                <Text style={styles.step}> {stepStart}</Text>
              /{stepEnd}
              </Text>
            </View>
            <View style={{width:'10%'}}></View>
    </View>      
  )
}

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const styles = EStyleSheet.create({
  container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
    backgroundColor: '#F6F5FA',
    height:'50rem',
    paddingTop:'10rem'
  },
  backButton:{
    width:'10%',
    padding: '10rem',
    marginLeft:'10rem'
  },
  backArrow:{
    fontSize:'45rem',
    
  },
  title_container:{
        textAlign:'center',color:'red',
  },
  title:{
    color:'#9600FF',
    fontSize:'16rem'
  },
  step:{
    fontSize:'22rem',
    fontWeight: 'bold',
  }
})