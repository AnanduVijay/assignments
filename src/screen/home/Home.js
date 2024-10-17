import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import TaskList from '../../components/TaskList';
import {taskList} from '../../assets/assets';
import {useNavigation} from '@react-navigation/native';

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
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TaskList
            title={item.task}
            description={item.description}
            onPress={() => handleOnPress(item.id)}
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
    backgroundColor: '#fff',
    padding: 15,
  },
});
