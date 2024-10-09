import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {foodItems} from '../../assets/assets';
import FoodItems from '../../components/FoodItems';

const AddToFavorite = () => {
  const data = foodItems;
  return (
    <View style={styles.container}>
      <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
        Favorite Foods
      </Text>

      <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
        All Foods
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => <FoodItems title={item.food} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default AddToFavorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    gap: 20,
  },
});
