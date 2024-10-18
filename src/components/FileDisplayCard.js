import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const FileDisplayCard = ({file, onPress}) => {
  console.log('CARDFILE:', file);
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.fileNameText}>{file.name}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={onPress}>
        <Text style={{color: '#fff'}}>Open</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FileDisplayCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    borderWidth: 1,
    // width: '60%',
    borderColor: 'grey',
    elevation: 2,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  nameContainer: {
    padding: 10,
    alignItems: 'center',
  },
  fileNameText: {
    color: '#000',
    fontSize: 13,
  },
  button: {
    backgroundColor: '#000',
    height: '100%',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 15,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
