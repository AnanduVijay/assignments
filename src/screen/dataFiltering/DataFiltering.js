import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {foodItems} from '../../assets/assets';
const DataFiltering = () => {
  const [search, setSearch] = useState('');
  const data = foodItems;
  const filteredData = data.filter(item =>
    item.food.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={{color: '#000', fontSize: 26, fontFamily: 'Roboto'}}>
        DataFiltering
      </Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="search..."
        placeholderTextColor={'#000'}
        value={search}
        onChangeText={text => setSearch(text)}
      />
      <FlatList
        data={filteredData}
        renderItem={({item}) => (
          <View
            style={{
              borderWidth: 1,
              height: 50,
              margin: 10,
              justifyContent: 'center',
              padding: 10,
            }}>
            <Text style={{color: '#000'}}>{item.food}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DataFiltering;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inputStyle: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
    color: 'green',
  },
});
