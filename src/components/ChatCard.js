import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ChatCard = ({name, text, date, img, onLongPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.1}
      onLongPress={onLongPress}>
      <Image style={styles.image} source={img} />
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.chatText}>{text}</Text>
        </View>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </TouchableOpacity>
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
    fontSize: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: 'green',
  },
});
