import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ChatCard = ({name, text, date}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/Alice.jpg')}
      />
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.chatText}>{text}</Text>
        </View>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '84%',
    paddingBottom: 10,
    borderBottomWidth: 0.2,
  },
  nameText: {
    color: '#000',
    fontSize: 18,
  },
  chatText: {
    color: '#000',
    fontSize: 13,
  },
  dateText: {
    color: 'grey',
    fontSize: 12,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: 'green',
  },
});
