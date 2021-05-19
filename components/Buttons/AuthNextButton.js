import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';

const NextButton = ({onPress, text, sending = false}) => {
  return (
    <View style={styles.btnView}>
      <Button
        mode="contained"
        color="#71A1FF"
        onPress={onPress}
        labelStyle={styles.labelStyle}
        disabled={sending}
        loading={sending}
        style={styles.btn}>
        {text}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  btnView: {
    flex: 1,
    marginBottom: 60,
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    marginHorizontal: 30,
  },
  btn: {
    borderRadius: 15,
  },
  labelStyle: {
    fontSize: 18,
    paddingVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textTransform: 'capitalize',
    minHeight: 24,
  },
});
export default NextButton;
