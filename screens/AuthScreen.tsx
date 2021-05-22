import React, { useState } from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import { Subheading, Title } from "react-native-paper";
import NextButton from "../components/Buttons/AuthNextButton";
import Layout from "../constants/Layout";
const {window: { height, width }, isSmallDevice} = Layout
import * as Google from "expo-google-app-auth";

console.log({height}, {width});

const WelcomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const submitHandler = async () => {
    setLoading(true);
    const ios =
      "368876551725-ejsq2k5jus0al9706qphiq2055mueghk.apps.googleusercontent.com";
    const android =
      "368876551725-vkhr1vuhlkbc9rl88ocvjm54m54tut84.apps.googleusercontent.com";
    try {
      const result = await Google.logInAsync({
        androidClientId: android,
        iosClientId: ios,
        scopes: ["profile", "email"],
      });
      if (result.type === "success") {
        setLoading(false);
        console.log({ result });
        return result.accessToken;
      } else {
        setLoading(false);
        return { cancelled: true };
      }
    } catch (e) {
      setLoading(false);
      return { error: true };
    }
  };
  return (
    <View style={styles.container}>

      <Title style={styles.title}>
        Verse
      </Title>
      <Image
        style={styles.hero}
        source={{
          uri: "https://cdn.pixabay.com/photo/2017/08/10/05/15/headphones-2618483__340.jpg",
        }}
      />
      <Subheading style={styles.subtitle}>
        A new type of social{"\n"}network based on voice
      </Subheading>
      <NextButton
        onPress={submitHandler}
        text="Sign in with Google"
        sending={loading}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.094,
    // marginTop: 50,
    paddingHorizontal: width * 0.07,
    alignItems: "center",
    // marginTop: 50,
    backgroundColor: "#13120E",
  },
  hero: {
    alignSelf: "stretch",
    height: 400,
    borderRadius: 10,
    // marginTop: 46,
  },
  subtitle: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: 0.5,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 28,
    lineHeight: 35,
    letterSpacing: 0.5,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
