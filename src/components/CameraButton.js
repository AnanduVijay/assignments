import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CameraIcon} from 'react-native-heroicons/solid';
const CameraButton = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cameraButton}
        activeOpacity={0.7}
        onPress={onPress}>
        <CameraIcon size={60} color={'blue'} />
      </TouchableOpacity>
    </View>
  );
};

export default CameraButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  cameraButton: {
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
});
