import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageCard from '../../components/ImageCard';
import CameraButton from '../../components/CameraButton';
import {useNavigation} from '@react-navigation/native';
const CapturePhotos = ({route}) => {
  const {photoPath} = route.params;
  console.log('img in pictures', photoPath);
  const navigations = useNavigation();
  const handleOnPress = () => {
    navigations.navigate('CameraScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={{color: '#000', fontSize: 28, fontWeight: '900'}}>
        Pictures
      </Text>
      <View style={{flex: 1}}>
        <ImageCard img={photoPath} />
      </View>
      <CameraButton onPress={() => handleOnPress()} />
    </View>
  );
};

export default CapturePhotos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    gap: 15,
  },
});
