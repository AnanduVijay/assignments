import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import TaskList from '../../components/TaskList';
import {taskList} from '../../assets/assets';
import {useNavigation} from '@react-navigation/native';
import HomeHeader from '../../components/HomeHeader';
import DateCard from '../../components/DateCard';

const Home = () => {
  const navigation = useNavigation();
  const data = taskList;
  const handleOnPress = task => {
    if (task === '1') {
      navigation.navigate('AddToFavorite');
    } else if (task === '2') {
      navigation.navigate('PinChat');
    } else if (task === '3') {
      navigation.navigate('RandomColor');
    } else if (task === '4') {
      navigation.navigate('DataFilter');
    } else if (task === '5') {
      navigation.navigate('ArrayListing');
    } else if (task === '5') {
      navigation.navigate('ArrayListing');
    } else if (task === '6') {
      navigation.navigate('CameraScreen');
    } else if (task === '7') {
      navigation.navigate('FileSelectionScreen');
    }
  };
  const generateColor = () => {
    const colorRandom = Math.floor(Math.random() * 16777215).toString(16);
    return `#${colorRandom}`;
  };
  return (
    <View style={styles.container}>
      <HomeHeader />
      <DateCard />
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TaskList
            title={item.task}
            description={item.description}
            id={item.id}
            onPress={() => handleOnPress(item.id)}
            bg={generateColor()}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    padding: 6,
  },
});
