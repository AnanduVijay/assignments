import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ImageCard = ({img}) => {
  console.log('Image in card', 'file://' + img);
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Image style={styles.img} source={{uri: 'file://' + img}} />
      <Text style={{color: '#000'}}>{img}</Text>
    </TouchableOpacity>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: 200,
    paddingBottom: 5,
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
  img: {
    width: 200,
    height: 200,
  },
});
