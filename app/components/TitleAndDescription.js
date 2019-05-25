import React from 'react';
import { 
    View,
    Text,
    Dimensions,
 } from 'react-native';
 import EStyleSheet from 'react-native-extended-stylesheet';

const TitleAndDescription = ({
    title,desc,containerStyle,titleStyle,descStyle,...rest
}) => (
    <View style={[styles.textContainer,containerStyle]}>
        <Text style={[styles.title,titleStyle]}>{title}</Text>
        <Text style={[styles.description,descStyle]}>{desc}
        </Text>
     </View>
);

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const styles = EStyleSheet.create({
    textContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        // marginBottom:'5rem',
        // marginTop:'5rem'
        },
    title: {
        fontSize: '18rem',
        textAlign: 'center',
        color:'#353B46',
        margin: '10rem',
        fontWeight:'500',
    },
    description: {
        fontSize:'15rem',
        textAlign: 'center',
        color: '#7E828C',
        marginBottom: '10rem',
        width: '70%',
    },
});

export default TitleAndDescription;