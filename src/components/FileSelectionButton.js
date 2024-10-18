import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {PlusCircleIcon} from 'react-native-heroicons/solid';

const FileSelectionButton = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={onPress}>
        <PlusCircleIcon color={'grey'} size={28} />
        <Text style={styles.buttonText}>Upload file</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FileSelectionButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: 200,
    height: 150,
    borderRadius: 8,
    borderColor: 'grey',
    backgroundColor: '#f7f6f7',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  buttonText: {
    color: '#c5c3c5',
    fontSize: 14,
    marginTop: 10,
  },
});
