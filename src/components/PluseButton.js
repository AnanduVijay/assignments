import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {PlusCircleIcon} from 'react-native-heroicons/solid';

const PluseButton = ({onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}>
      <PlusCircleIcon color={'white'} size={40} />
      <Text>Upload More</Text>
    </TouchableOpacity>
  );
};

export default PluseButton;

const styles = StyleSheet.create({
  button: {
    margin: 20,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
  },
});
