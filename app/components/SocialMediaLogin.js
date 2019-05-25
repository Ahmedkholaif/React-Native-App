import React from 'react';
import { 
    View,
    TouchableOpacity,
    Text,
    Dimensions,
    Image
 } from 'react-native';
 import EStyleSheet from 'react-native-extended-stylesheet';

//Images
import Facebook_IMG from '../../assets/images/facebook.png';
import Google_IMG from '../../assets/images/google.png';


const SocialMediaLogin = ({
    action,text,style,textStyle,...rest
}) => (
    <View style={styles.container}>
    <Text style={{color:'#506677'}}> Or continue with</Text>
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.buttons}>
          <Image style={styles.icons}
          source={Facebook_IMG}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
          <Image style={styles.icons}
          source={Google_IMG}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const styles = EStyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'80%',
        padding:'5rem',
    },
    buttons:{
        width:'30rem',
        height:'30rem',
        marginVertical:'8rem',
        marginHorizontal:'5rem',
    },
    icons:{
        width:'30rem',
        height:'30rem',
    },
});

export default SocialMediaLogin;