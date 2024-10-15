import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ChatHeader = ({img, name, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.img} source={img} />
      <Text style={{color: '#000', fontSize: 24, fontWeight: 'bold'}}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
    marginVertical: 15,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'green',
  },
});
