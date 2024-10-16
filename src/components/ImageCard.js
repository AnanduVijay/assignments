import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ImageCard = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Image style={styles.img} source={require('../assets/images/eve.jpg')} />
      <Text style={{color: '#000'}}>img path</Text>
    </TouchableOpacity>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: 100,
    padding: 5,
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
  img: {
    width: 80,
    height: 100,
  },
});
