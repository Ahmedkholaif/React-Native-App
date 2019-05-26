import React from 'react';
import { 
    View,
    TouchableOpacity,
    Text,
    Dimensions,
 } from 'react-native';
 import EStyleSheet from 'react-native-extended-stylesheet';

const MainButton = ({
    action,text,style,textStyle,...rest
}) => (
    <TouchableOpacity 
        style={[styles.button,
            style]}
        onPress={action} >
        <Text 
        style={[styles.text,
            textStyle]}
        >{text}</Text>
    </TouchableOpacity>
);

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const styles = EStyleSheet.create({
    button:{
        width:'80%',
        borderWidth: 1,
        borderRadius: 50,
        padding:'12rem',
        margin:'5rem',
        borderColor:'#FFFFFF',
        backgroundColor:'#9600FF',
    },
    text:{
        color:'#FFFFFF',
        textAlign:'center',
        fontSize:'14rem',
        fontWeight:'500',
    },
});

export default MainButton;