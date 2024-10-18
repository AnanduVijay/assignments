import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DateCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.currentDayText}>FRIDAY 18</Text>
      <View style={styles.dateContainer}>
        <Text style={styles.mainText}>TODAY</Text>
        <Text style={{color: '#b3258c', fontSize: 40, fontWeight: '900'}}>
          .
        </Text>
        <Text style={styles.upcomingDayText}> 19 20 21 22 23</Text>
      </View>
    </View>
  );
};

export default DateCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 35,
    color: '#fff',
  },
  upcomingDayText: {
    fontSize: 30,
    color: 'grey',
  },
  currentDayText: {
    color: '#fff',
    fontSize: 16,
  },
});
