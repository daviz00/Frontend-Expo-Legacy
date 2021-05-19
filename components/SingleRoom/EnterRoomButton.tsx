import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const EnterRoomButton = ({onPress, text, sending = false}) => {
  return (
    <View style={styles.btnView}>
      <Button
        mode="outlined"
        onPress={onPress}
        labelStyle={styles.labelStyle}
        disabled={sending}
        icon="access-point"
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
    marginBottom: 20,
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    marginHorizontal: 30,
  },
  btn: {
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#71A1FF',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  labelStyle: {
    fontSize: 18,
    paddingVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#71A1FF',
    textTransform: 'capitalize',
    minHeight: 24,
  },
});
