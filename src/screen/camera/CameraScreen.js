import {
  Alert,
  Linking,
  PermissionsAndroid,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null); // Fixed typo
  console.log('status', hasPermission);

  const devices = Camera.getAvailableCameraDevices();
  //   const device = useCameraDevices('back');
  const device = devices.back;
  console.log('device', devices);

  useEffect(() => {
    console.log('useEffect Called');
    const checkPermissions = async () => {
      const status = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      setHasPermission(status);
    };
    checkPermissions();
  }, []);

  const requestPermission = async () => {
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    console.log('Status:', status);

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      setHasPermission(true);
    } else if (status === PermissionsAndroid.RESULTS.DENIED) {
      setHasPermission(false);
      Alert.alert(
        'Permission Required',
        'Permission is required to use this feature.',
        [
          {text: 'Open settings', onPress: openSettings},
          {text: 'Cancel', style: 'cancel'},
        ],
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      setHasPermission(false);
      Alert.alert(
        'Permission Required',
        'Camera access has been permanently denied. Please enable it in the app settings.',
        [
          {text: 'Open Settings', onPress: openSettings},
          {text: 'Cancel', style: 'cancel'},
        ],
      );
    }
  };

  const openSettings = () => {
    Linking.openSettings(); // Opens the app settings for the user
  };

  if (hasPermission === null) {
    return (
      <SafeAreaView style={styles.containerMessage}>
        <Text style={{color: '#000'}}>Checking Permissions...</Text>
      </SafeAreaView>
    );
  }

  if (hasPermission === false) {
    return (
      <SafeAreaView style={styles.containerMessage}>
        <TouchableOpacity onPress={requestPermission}>
          <Text style={{color: '#000'}}>Grant Permission</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  if (hasPermission === true) {
    if (!device) {
      return (
        <SafeAreaView style={styles.containerMessage}>
          <Text style={{color: '#000'}}>Loading Camera...</Text>
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          photo={true}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.containerMessage}>
      <Text style={styles.text}>No camera device found.</Text>
    </SafeAreaView>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});
