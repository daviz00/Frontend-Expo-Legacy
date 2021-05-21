import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import Layout from '../../constants/Layout';
const { window: { height, width }, isSmallDevice } = Layout

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
    width: width * 0.178,
    height: height * 0.086,
    borderRadius: 50,
    marginHorizontal: width * 0.012,
  },
});
