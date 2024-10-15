import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {dummyChatData} from '../../assets/assets';
import NameCard from '../../components/NameCard';
const ArrayListing = () => {
  const data = dummyChatData;
  const generateColor = () => {
    const colorRandom = Math.floor(Math.random() * 16777215).toString(16);
    return `#${colorRandom}`;
  };
  return (
    <ScrollView style={{flex: 1, padding: 15, marginVertical: 10}}>
      {data.map(items => {
        return (
          <NameCard
            key={items.id}
            name={items.name}
            img={items.image}
            bg={generateColor()}
          />
        );
      })}
    </ScrollView>
  );
};

export default ArrayListing;

const styles = StyleSheet.create({});
