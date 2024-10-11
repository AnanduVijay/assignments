import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const RandomColor = () => {
  const [bgColor, setBgColor] = useState('#000');
  console.log(bgColor);
  const generateColor = () => {
    const colorRandom = Math.floor(Math.random() * 16777215).toString(16);
    return `#${colorRandom}`;
  };
  const handlePress = () => {
    const newColor = generateColor();
    setBgColor(newColor);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: bgColor}]}
        onPress={() => handlePress()}>
        <Text style={styles.buttonText}>Don't Touch Me!!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RandomColor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
