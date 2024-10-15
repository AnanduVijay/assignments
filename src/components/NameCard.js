import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const NameCard = ({name, img, bg}) => {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: bg}]}>
      <Image style={styles.img} source={img} />
      <Text style={styles.nameText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default NameCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    padding: 15,
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  img: {width: 80, height: 80, borderRadius: 50},
  nameText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
