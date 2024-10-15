import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ChatContainer = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff', fontSize: 16}}>{text}</Text>
    </View>
  );
};

export default ChatContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    padding: 10,
    paddingLeft: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 20,
    marginBottom: 10,
  },
});
