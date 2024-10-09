import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {dummyChatData} from '../../assets/assets';
import ChatCard from '../../components/ChatCard';

const PinChat = () => {
  const data = dummyChatData;
  const trimMessage = message => {
    const words = message.split(' ');
    if (words.length <= 4) {
      return message;
    }
    return words.slice(0, 4).join(' ') + '...';
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.pinnedChatContainer}>
        <Text style={styles.titleText}>PINNED MESSAGES</Text>
        <ChatCard />
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.titleText}>OTHER MESSAGES</Text>
        {data.map(item => (
          <ChatCard
            key={item.id}
            name={item.name}
            text={trimMessage(item.lastMessage)}
            date={item.lastMessageTime}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default PinChat;

const styles = StyleSheet.create({
  titleText: {
    color: 'grey',
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  pinnedChatContainer: {
    marginVertical: 10,
    gap: 10,
  },
  messageContainer: {
    gap: 10,
  },
});
