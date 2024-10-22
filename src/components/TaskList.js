import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const TaskList = ({id, title, description, onPress, bg}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: bg}]}
      activeOpacity={0.7}
      onPress={onPress}>
      <View style={styles.taskContainer}>
        <Text style={styles.tskNoText}>TS</Text>
        <Text style={[styles.tskNoText, {fontSize: 12}]}>NO</Text>
        <Text style={styles.tskNoText}>|</Text>
        <Text style={styles.tskNoText}>{id}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title.toUpperCase()}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
    padding: 15,
    marginVertical: 5,
    borderRadius: 35,
    gap: 5,
    flexDirection: 'row',
  },
  taskContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
    gap: 5,
    alignItems: 'center',
  },
  tskNoText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  titleContainer: {
    marginRight: 35,
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  titleText: {
    color: '#000',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descriptionText: {
    color: '#1F1F1F',
    opacity: 0.3,
    fontSize: 14,
    fontFamily: 'Roboto',
  },
});
