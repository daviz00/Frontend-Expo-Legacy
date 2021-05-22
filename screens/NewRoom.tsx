import React, { useRef, useCallback } from "react";
import { View, Button, Text, Dimensions } from "react-native";
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

