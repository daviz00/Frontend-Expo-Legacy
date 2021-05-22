import React, { useRef, useCallback } from "react";
import { View, Button, Text, StyleSheet, Dimensions } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Home from "./HomeScreen";
import NewRoomSheet from "../components/NewRoomSheet";

export default function Example() {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  useFocusEffect(
    useCallback(() => {
      refRBSheet.current.open();
      return () => refRBSheet.current.close();
    })
  );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#13120E",
      }}
    >
      <Home />
      <RBSheet
        ref={refRBSheet}
        animationType='slide'
        keyboardAvoidingViewEnabled={false}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
        onClose={() => navigation.navigate("Home")}
      >
        <NewRoomSheet styles={styles} />
      </RBSheet>
    </View>
  );
}

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
