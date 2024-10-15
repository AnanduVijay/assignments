import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {PaperAirplaneIcon} from 'react-native-heroicons/outline';

const ChatInput = () => {
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Type a message"
        placeholderTextColor={'green'}
      />
      <TouchableOpacity
        style={{
          padding: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <PaperAirplaneIcon size={36} color={'green'} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderColor: 'green',
    borderRadius: 10,
    color: '#000',
  },
});
