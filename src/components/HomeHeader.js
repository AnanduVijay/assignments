import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require('../assets/images/grace.jpg')}
      />
      <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>+</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
