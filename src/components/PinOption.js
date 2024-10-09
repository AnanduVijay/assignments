import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {EyeDropperIcon} from 'react-native-heroicons/micro';

const PinOption = ({onPress, isPinned}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isPinned ? {backgroundColor: 'red'} : {backgroundColor: 'green'},
      ]}
      onPress={onPress}>
      <Text style={{color: '#fff', fontSize: 14}}>
        {isPinned ? 'Unpin' : 'Pin Chat'}
      </Text>
      <EyeDropperIcon color={'#fff'} size={14} />
    </TouchableOpacity>
  );
};

export default PinOption;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 90,
    alignItems: 'center',
    gap: 5,
    padding: 5,
    borderRadius: 8,
    alignSelf: 'flex-end',
    margin: 10,
  },
});
