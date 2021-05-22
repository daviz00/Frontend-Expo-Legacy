import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet
} from 'react-native';

const NewRoomSheet = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{marginTop: 21}}>
          <Text>Let's start the best conversations</Text>
        </View>
        <View style={{marginVertical: 21}}>
          <TextInput
            style={styles.input}
            // value={text}
            // onChangeText={text => setText(text)}
            placeholder="New Room Name"
          />
        </View>
        <View style={{marginBottom: 25}}>
          <TouchableOpacity
            style={{
              ...styles.button,
              ...styles.buttonClose,
              backgroundColor: '#FF9E01',
              marginLeft: 21,
            }}
            onPress={() => {
              // setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>LET'S START</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    color: "#FFFFFF",
  },
  button: {
    borderRadius: 30,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    height: Dimensions.get("screen").height / 19.31,
    paddingHorizontal:Dimensions.get("screen").width / 32.75,
    // width: Dimensions.get('screen').width / 3.02,
  },
  input: {
    width: Dimensions.get("screen").width / 1.965 ,
    padding: 10,
    marginTop: Dimensions.get("screen").height / 40.3,
    marginBottom: Dimensions.get("screen").height / 80.6,
    backgroundColor: "#fff",
    borderBottomWidth: 1.5,
  },
});


export default NewRoomSheet;
