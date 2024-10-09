import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {HeartIcon} from 'react-native-heroicons/solid';

const FavoriteCard = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#000', fontSize: 21, fontWeight: 'bold'}}>
        {title}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.2}
          onPress={onPress}>
          <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>
            Remove
          </Text>
          <HeartIcon color={'red'} size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FavoriteCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 8,
    borderRadius: 10,
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
