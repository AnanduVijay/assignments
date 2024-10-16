import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const CameraScreen = () => {
  const [hasPresmission, setHasPermission] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text>CameraScreen</Text>
    </SafeAreaView>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
