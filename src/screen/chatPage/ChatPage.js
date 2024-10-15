import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatHeader from '../../components/ChatHeader';
import ChatContainer from '../../components/ChatContainer';
import ChatInput from '../../components/ChatInput';
import {useNavigation} from '@react-navigation/native';
const ChatPage = ({route}) => {
  const navigation = useNavigation();
  const {chat} = route.params;
  // console.log(chat);
  const handleOnPress = profile => {
    navigation.navigate('EditProfile', {profile});
  };
  return (
    <View style={styles.container}>
      <ChatHeader
        img={chat.image}
        name={chat.name}
        onPress={() => handleOnPress(chat)}
      />
      <View>
        <ChatContainer text={chat.lastMessage} />
        <ChatInput />
      </View>
    </View>
  );
};

export default ChatPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
});
