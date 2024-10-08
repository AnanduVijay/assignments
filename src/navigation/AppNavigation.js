import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screen/home/Home'
import Chatpin from '../screen/Chatpin';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen  name = "Home" component={Home}/>
        <Stack.Screen  name = "Chat" component={Chatpin}/>
    </Stack.Navigator>
    </NavigationContainer>

  )
    
}

export default AppNavigation;