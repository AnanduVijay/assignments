import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screen/home/Home';
import AddToFavorite from '../screen/addToFavorite/AddToFavorite';
import PinChat from '../screen/pinChat/PinChat';
import RandomColor from '../screen/randomColor/RandomColor';
import DataFiltering from '../screen/dataFiltering/DataFiltering';
import ArrayListing from '../screen/arrayListing/ArrayListing';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Task list'}}
        />
        <Stack.Screen name="AddToFavorite" component={AddToFavorite} />
        <Stack.Screen
          name="PinChat"
          component={PinChat}
          options={{title: 'Chats'}}
        />
        <Stack.Screen name="RandomColor" component={RandomColor} />
        <Stack.Screen name="DataFilter" component={DataFiltering} />
        <Stack.Screen name="ArrayListing" component={ArrayListing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
