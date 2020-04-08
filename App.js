import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import ResolveScreen from './src/Screens/ResolveScreen';
import ShowScreen from './src/Screens/ShowScreen';
import HomeScreen from './src/Screens/HomeScreen';
import {Provider} from './src/Context/BlogContext';
import CreateScreen from './src/Screens/CreateScreen';
import EditScreen from './src/Screens/EditScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/Screens/AccountScreen';
import {AntDesign} from '@expo/vector-icons';
import ContentScreen from './src/Screens/ContentScreen';

const BlogFlow = createStackNavigator({
  Show : ShowScreen,
  Create : CreateScreen,
  Content : ContentScreen,
  Edit : EditScreen,
})

BlogFlow.navigationOptions={
    title:'Home',
    tabBarIcon:<AntDesign name='home' size={30} />
}

const navigator  = createSwitchNavigator(
  {
    Home: HomeScreen,
    Resolve : ResolveScreen,
    loginflow: createBottomTabNavigator({
      Blogs: BlogFlow,
      Account : AccountScreen
    })
  },
  {
    initialRouteName:'Resolve',
    defaultNavigationOptions:{
      title:false
    }
  }
)

const App = createAppContainer(navigator);

export default () =>{
  return(
    <Provider>
      <App/>
    </Provider>
  )
}