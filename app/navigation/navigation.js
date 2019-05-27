import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
// import Home from '../screens/HomeScreen';
import intro1 from '../screens/intro_1';
import intro2 from '../screens/intro_2';
import intro3 from '../screens/intro_3';
import GetStartedScreen from '../screens/GetStartedScreen';
import RegistrationStepOneScreen from '../screens/RegistrationStepOneScreen'
import RegistrationStepTwoScreen from '../screens/RegistrationStepTwoScreen'
import RegistrationStepThreeScreen from '../screens/RegistrationStepThreeScreen'
import LoginScreen from '../screens/LoginScreen'

// import Posts from '../components/Posts';
// import PostDetails from '../components/PostDetails';


// const Home = createStackNavigator({
//     Posts,
//     PostDetails,
// })

// const AppNavigator = createBottomTabNavigator({
//     Home ,
//     Profile,
// });

const AppNavigator = createStackNavigator({
  RegistrationStepOneScreen,
  RegistrationStepTwoScreen,
  GetStartedScreen,
        intro1 ,
        intro2,
        intro3,
        RegistrationStepThreeScreen,
        LoginScreen,
});

export default createAppContainer(AppNavigator);