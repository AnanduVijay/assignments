import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {EyeDropperIcon} from 'react-native-heroicons/micro';

const PinOption = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Pin</Text>
      <EyeDropperIcon color={'#fff'} size={14} />
    </TouchableOpacity>
  );
};

export default PinOption;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flexDirection: 'row',
    width: 50,
    alignItems: 'center',
    gap: 5,
    padding: 5,
    borderRadius: 8,
  },
});
