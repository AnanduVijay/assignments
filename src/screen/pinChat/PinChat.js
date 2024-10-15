import {Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {dummyChatData} from '../../assets/assets';
import ChatCard from '../../components/ChatCard';
import PinOption from '../../components/PinOption';
import {useNavigation} from '@react-navigation/native';

const PinChat = () => {
  const navigation = useNavigation();
  const data = dummyChatData;
  const [pinnedChat, setPinnedChat] = useState([]);
  const [slectedChat, setSelectedChat] = useState(null);
  const [modalVissible, setModalVissible] = useState(false);
  const handleLongPress = item => {
    setSelectedChat(item);
    setModalVissible(true);
  };
  const trimMessage = message => {
    const words = message.split(' ');
    if (words.length <= 4) {
      return message;
    }
    return words.slice(0, 4).join(' ') + '...';
  };
  const handlePinButton = () => {
    if (pinnedChat.includes(slectedChat)) {
      setPinnedChat(
        pinnedChat.filter(pinnedChatId => pinnedChatId.id !== slectedChat.id),
      );
    } else {
      setPinnedChat([...pinnedChat, slectedChat]);
    }
    setModalVissible(false);
  };
  const handlePress = chat => {
    // console.log(chat);
    navigation.navigate('ChatPage', {chat});
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.pinnedChatContainer}>
        <Text style={styles.titleText}>PINNED MESSAGES</Text>
        {pinnedChat.map(item => (
          <ChatCard
            key={item.id}
            name={item.name}
            text={trimMessage(item.lastMessage)}
            date={item.lastMessageTime}
            img={item.image}
            onLongPress={() => handleLongPress(item)}
            onPress={() => handlePress(item)}
          />
        ))}
      </View>
      <View style={styles.messageContainer}>
        <Modal animationType="fade" transparent={true} visible={modalVissible}>
          <PinOption
            onPress={handlePinButton}
            isPinned={pinnedChat.includes(slectedChat)}
          />
        </Modal>
        <Text style={styles.titleText}>OTHER MESSAGES</Text>
        {data
          .filter(
            item => !pinnedChat.some(pinnedItem => pinnedItem.id === item.id),
          )
          .map(item => (
            <ChatCard
              key={item.id}
              name={item.name}
              text={trimMessage(item.lastMessage)}
              date={item.lastMessageTime}
              img={item.image}
              onPress={() => handlePress(item)}
              onLongPress={() => handleLongPress(item)}
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
