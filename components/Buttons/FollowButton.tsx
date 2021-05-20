import React from 'react';
import {StyleSheet, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {Button} from 'react-native-paper';

const FollowButton = ({onPress, text}) => {
  return (
      <View style={styles.btnView}>
        <Button
          mode="contained"
          labelStyle={styles.labelStyle}
          color="#FF9E01"
          onPress={onPress}
          icon="account-plus"
          style={styles.btn}>
          {text}
        </Button>
      </View>
    );
};

export default FollowButton;

const styles = StyleSheet.create({
  btnView: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    marginHorizontal: 70,
  },
  btn: {
    borderRadius: 15,
  },
  labelStyle: {
    fontSize: 18,
    paddingVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    minHeight: 24,
  },
});
