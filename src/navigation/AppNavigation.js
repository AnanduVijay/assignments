import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screen/home/Home';
import AddToFavorite from '../screen/addToFavorite/AddToFavorite';
import PinChat from '../screen/pinChat/PinChat';
import RandomColor from '../screen/randomColor/RandomColor';
import DataFiltering from '../screen/dataFiltering/DataFiltering';
import ArrayListing from '../screen/arrayListing/ArrayListing';
import ChatPage from '../screen/chatPage/ChatPage';
import EditProfile from '../screen/editProfile/EditProfile';
import CapturePhotos from '../screen/capturePhotos/CapturePhotos';
import CameraScreen from '../screen/camera/CameraScreen';
import FileSelectionScreen from '../screen/fileselection/FileSelectionScreen';
import BootSplash from 'react-native-bootsplash';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddToFavorite" component={AddToFavorite} />
        <Stack.Screen name="PinChat" component={PinChat} />
        <Stack.Screen name="RandomColor" component={RandomColor} />
        <Stack.Screen name="DataFilter" component={DataFiltering} />
        <Stack.Screen name="ArrayListing" component={ArrayListing} />
        <Stack.Screen name="ChatPage" component={ChatPage} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="CapturePhotos" component={CapturePhotos} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen
          name="FileSelectionScreen"
          component={FileSelectionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
