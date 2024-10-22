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
import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';
const CameraScreen = () => {
  const navigation = useNavigation();
  const [photoPath, setPhotoPath] = useState('');
  const [hasPermission, setHasPermission] = useState(null);
  const device = useCameraDevice('back');
  const camera = useRef(null);
  console.log('Initial photo path', photoPath);

  useEffect(() => {
    checkPermissions();
  }, []);
  const checkPermissions = async () => {
    const status = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    setHasPermission(status);
  };
  useEffect(() => {
    navigateToPictures();
  }, [photoPath]);
  const navigateToPictures = () => {
    if (photoPath != '') {
      console.log('Inside navigation', photoPath);
      navigation.navigate('CapturePhotos', {photoPath});
    } else {
      console.log('Photo path is empty !!');
    }
  };

  const requestPermission = async () => {
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    console.log('Permission Status: ', status);
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
    Linking.openSettings();
  };
  const capturePhoto = async () => {
    try {
      if (camera != null) {
        const photo = await camera.current.takePhoto({
          // flash: 'on',
        });
        setPhotoPath(photo.path);
      } else {
        console.warn('Camera is Null');
      }
    } catch (err) {
      console.error('Error Capturing photos:', err);
    }
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
          ref={camera}
        />
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={() => capturePhoto()}></TouchableOpacity>
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
  cameraButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
});
