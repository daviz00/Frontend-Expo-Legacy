import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

const Row = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/580383480850358272/hGdszCo0_400x400.jpg',
        }}
        style={{...styles.imageCommon, marginTop: 10}}
      />
      <Image
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1361631454795546624/7fnmx7Fq_400x400.jpg',
        }}
        style={{...styles.imageCommon, marginTop: 30}}
      />
      <Image
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/464912469278728192/X7T2lRQ5_400x400.png',
        }}
        style={{...styles.imageCommon, marginTop: 30}}
      />
      <Image
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1289046130366406656/-s-fxoLn_400x400.jpg',
        }}
        style={{...styles.imageCommon, marginTop: 10}}
      />
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  imageCommon: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginHorizontal: 5,
  },
});
