import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ProfileIcons = ({items, top, left}) => {
  return (
    <TouchableOpacity
      style={{flex: 1, justifyContent: 'centerS', alignItems: 'center'}}>
      <View
        style={[
          styles.cirecleItem,
          {position: 'absolute', top: top, left: left},
        ]}>
        <Image source={items.image} style={styles.image} />
        <Text style={styles.nameText}>{items.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileIcons;

const styles = StyleSheet.create({
  cirecleItem: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
    color: '#333',
  },
});
