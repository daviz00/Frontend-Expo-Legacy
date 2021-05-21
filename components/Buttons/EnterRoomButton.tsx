import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import Layout from '../../constants/Layout';
const { window: { height, width }, isSmallDevice } = Layout
const EnterRoomButton = ({onPress, text, sending = false}) => {
  console.log({ height, width, isSmallDevice })
  return (
    <View style={styles.btnView}>
      <Button
        mode="outlined"
        onPress={onPress}
        labelStyle={styles.labelStyle}
        disabled={sending}
        icon="access-point"
        color="#FF9E01"
        style={styles.btn}>
        {text}
      </Button>
    </View>
  );
};

export default EnterRoomButton;

const styles = StyleSheet.create({
  btnView: {
    flex: 1,
    marginBottom: height * 0.024,
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    marginHorizontal: width * 0.1273,
  },
  btn: {
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#FF9E01',
  },
  labelStyle: {
    fontSize: height * 0.022,
    paddingVertical: height *  0.005,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    minHeight: height * 0.03,
  },
});
