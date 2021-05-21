import React from 'react';
import {StyleSheet, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {Button} from 'react-native-paper';
import Layout from '../../constants/Layout';
const { window: { height, width }, isSmallDevice } = Layout
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
// {
//   "height": 806.1818181818181,
//   "isSmallDevice": false,
//   "width": 392.72727272727275,
// }

export default FollowButton;

const styles = StyleSheet.create({
  btnView: {
    flex: 1,
    marginTop: height * 0.037,
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    marginHorizontal: width * 0.178,
  },
  btn: {
    borderRadius: 15,
  },
  labelStyle: {
    fontSize: height * 0.022,
    paddingVertical: height * 0.0037,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    minHeight: height * 0.03
  },
});
