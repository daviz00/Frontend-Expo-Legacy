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
      }}
    >
      <Home />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
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
    // lineHeight: '180.52%',
    textAlign: "center",
    // letterSpacing: '0.035em',
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
    paddingHorizontal: 12,
    // width: Dimensions.get('screen').width / 3.02,
  },
  input: {
    width: 200,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1.5,
  },
});
