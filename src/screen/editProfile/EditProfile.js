import {StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CommonActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
const EditProfile = ({route}) => {
  const navigation = useNavigation();

  const {profile} = route.params;
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      if (isNavigating) return;

      e.preventDefault();

      setIsNavigating(true);

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    });

    return unsubscribe;
  }, [navigation, isNavigating]);
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={profile.image} />
      <Text style={{color: '#000', fontSize: 24, fontWeight: 'bold'}}>
        {profile.name}
      </Text>
      <Button
        title="Edit"
        color={'green'}
        onPress={() => Alert.alert("You Can't edit now")}
      />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'green',
  },
});
