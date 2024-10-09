import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {foodItems} from '../../assets/assets';
import FoodItems from '../../components/FoodItems';
import FavoriteCard from '../../components/FavoriteCard';

const AddToFavorite = () => {
  const data = foodItems;
  const [favorite, setFavorite] = useState([]);

  const handleOnPress = item => {
    if (favorite.includes(item)) {
      setFavorite(favorite.filter(favitem => favitem.id !== item.id));
    } else {
      setFavorite([...favorite, item]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
          Favorite Foods
        </Text>
        <FlatList
          data={favorite}
          renderItem={({item}) => (
            <FavoriteCard
              title={item.food}
              onPress={() => handleOnPress(item)}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View style={{flex: 1.5}}>
        <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
          All Foods
        </Text>
        <FlatList
          data={data}
          renderItem={({item}) => {
            const isFavorite = favorite.some(favItem => favItem.id === item.id);
            return (
              <FoodItems
                title={item.food}
                onPress={() => handleOnPress(item)}
                isFavorite={isFavorite}
              />
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>
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
