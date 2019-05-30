import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
// import Home from '../screens/HomeScreen';
import intro1 from "../screens/intro_1";
import intro2 from "../screens/intro_2";
import intro3 from "../screens/intro_3";
import GetStartedScreen from "../screens/GetStartedScreen";
import RegistrationStepOneScreen from "../screens/RegistrationStepOneScreen";
import RegistrationStepTwoScreen from "../screens/RegistrationStepTwoScreen";
import RegistrationStepThreeScreen from "../screens/RegistrationStepThreeScreen";
import LoginScreen from "../screens/LoginScreen";

//Main Screen Tabs
import ExploreScreen from "../screens/ExploreScreen";
import MoreScreen from "../screens/MoreScreen";
import ShopScreen from "../screens/ShopScreen";
import AccountScreen from "../screens/AccountScreen";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";

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

const MainNav = createBottomTabNavigator(
  {
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <MaterialCommunityIcons
              name="compass"
              color={tintColor}
              size={20}
            />
          );
        }
      }
    },
    Shop: {
      screen: ShopScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <MaterialCommunityIcons name="store" color={tintColor} size={20} />
          );
        }
      }
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <FontAwesome5 name="user-alt" color={tintColor} size={20} />;
        }
      }
    },
    More: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Feather name="more-horizontal" color={tintColor} size={20} />;
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#9600FF",
      inactiveTintColor: "#667783",
      style: {
        padding: 5
      }
    }
  }
);

const AppNavigator = createStackNavigator({
  GetStartedScreen,
  MainNav: {
    screen: MainNav,
    navigationOptions: {
      header: null
    }
  },
  RegistrationStepThreeScreen,
  LoginScreen,
  // ExploreScreen,
  RegistrationStepOneScreen,
  RegistrationStepTwoScreen,
  intro1,
  intro2,
  intro3
});

export default createAppContainer(AppNavigator);
