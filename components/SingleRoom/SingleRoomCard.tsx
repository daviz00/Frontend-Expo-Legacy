import React from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  Animated,
} from "react-native";
import EnterRoomButton from "../Buttons/EnterRoomButton";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Row from "./Row";
// import {height, width, ACTION_OFFSET, VERTICAL_MARGIN} from '../../utils/constants';
import { MaterialIcons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("screen");
const SingleRoomCard = ({
  name,
  source,
  isFirst,
  swipe,
  tiltSign,
  ...rest
}) => {
  const { navigate, goBack } = useNavigation();
  const submitHandler = () => {
    navigate("Profile");
  };
  return (
    <Card style={styles.cardContainer}>
      <Text style={styles.titleStyle}>
        The theory of constructivism and conventionalism.
      </Text>
      <View style={styles.countView}>
        <MaterialIcons
          name="people"
          size={21}
          color="#999999"
          style={{
            marginLeft: 5,
            marginRight: 5,
          }}
        />
        <Text
          style={{
            marginRight: 10,
            fontSize: 15,
            color: "#E9E9E9",
          }}
        >
          420
        </Text>
        <Text
          style={{
            marginRight: 10,
            fontSize: 15,
            color: "#E9E9E9",
          }}
        >
          |
        </Text>
        <MaterialIcons
          name="record-voice-over"
          size={19}
          color="#999999"
          style={{ marginRight: 10 }}
        />
        <Text
          style={{
            marginRight: 10,
            fontSize: 15,
            color: "#E9E9E9",
          }}
        >
          69
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image
          source={{
            uri: "https://pbs.twimg.com/profile_images/1334955566993604608/vo4Ep1TZ_400x400.jpg",
          }}
          style={styles.hostImage}
        />
        <Row />
        <Row />
      </View>

      <View
        style={{
          flexDirection: "column",
          // marginTop: 30,
          flex: 1,
        }}
      >
        <EnterRoomButton onPress={submitHandler} text="Enter Room" />
      </View>
    </Card>
  );
};

export default SingleRoomCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: height * 0.609,
    width: width * 0.85,
    // alignItems: 'center',
    backgroundColor: "#201C19",
    borderRadius: 24,
    elevation: 15,
    borderWidth: 2,
    borderColor: "#000814",
  },
  titleStyle: {
    marginVertical: height * 0.0187,
    marginHorizontal: width * 0.05,
    fontSize: height * 0.0248,
    color: "#E9E9E9",
    lineHeight: height * 0.032,
    fontWeight: "bold",
    textAlign: "left",
  },
  countView: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 1,
  },
  hostImage: {
    width: width * 0.23,
    height: height * 0.111,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#d90429",
    marginTop: height * 0.024,
  },
});
