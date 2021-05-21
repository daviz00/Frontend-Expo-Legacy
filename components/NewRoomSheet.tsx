import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';

const NewRoomSheet = ({ styles }) => {
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

export default NewRoomSheet;
