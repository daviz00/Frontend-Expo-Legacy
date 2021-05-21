import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Card, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import FollowButton from "../components/Buttons/FollowButton";
import Layout from "../constants/Layout";
const {
  window: { width, height },
  isSmallDevice,
} = Layout;

export default function ProfileScreen() {
  const { navigate, goBack } = useNavigation();
  const submitHandler = () => {
    navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={{
                uri: "https://pbs.twimg.com/profile_images/1334955566993604608/vo4Ep1TZ_400x400.jpg",
              }}
              style={styles.image}
              resizeMode="center"
            />
          </View>
        </View>

        <View style={styles.headContainer}>
          <Text style={[styles.text, { fontWeight: "bold", fontSize: 20 }]}>
            Devansh Agarwal
          </Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
            @daviz00
          </Text>
        </View>
        <View style={styles.statsContainer}>
          <View
            style={[
              styles.statsBox,
              { borderColor: "#DFD8C8", borderRightWidth: 1 },
            ]}
          >
            <Text style={[styles.text, { fontSize: 16 }]}>420</Text>
            <Text style={[styles.text, styles.subText]}>Followers</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 16 }]}>69</Text>
            <Text style={[styles.text, styles.subText]}>Following</Text>
          </View>
        </View>
        <FollowButton onPress={submitHandler} text="Follow" />
        <View style={styles.infoContainer}>
          <Text
            style={[
              styles.text,
              {
                // color: '#1A1A1A',
                color: "#E9E9E9",
                fontSize: 14,
                textAlign: "center",
                lineHeight: 22,
              },
            ]}
          >
            Software Engineer 👩‍💻 @Verse | Globe trotter 🌎| Community Enthusiast
            | Breathing resilience, empowerment for social impact ✨| Swimmer 🏊
            | Listener & Learner ⚒️
            {"\n"}
            🌟 Lived in 5 countries 🇩🇪🇬🇧🇨🇦🇪🇸🇫🇷
            {"\n"}
            🧠 Fascinated by neuroscience, psychology, behavioural, cognitive &
            social sciences
            {"\n"}
            Diving into Tech - Majored in Computer Science, Data Science and
            International Relations minor
            {"\n"}
            📚Speaking 5 languages
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height / 13.43,
    paddingHorizontal: width / 13.1,
    alignItems: "center",
    backgroundColor: "#13120E",
  },
  headContainer: {
    marginVertical: height / 40.3,
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    borderWidth: 3,
  },

  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: width / 2.62,
    height: height / 5.37,
    borderRadius: 15,
    overflow: "hidden",
    marginTop: height / 80.6,
  },

  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: height / 23.0285,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 0,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
});
