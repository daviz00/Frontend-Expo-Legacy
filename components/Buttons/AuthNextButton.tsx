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
        icon='google'
        mode="contained"
        color="#FF9E01"
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
    marginBottom: 80,
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
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'none',
    minHeight: 24,
  },

});
export default NextButton;
