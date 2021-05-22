import React, { useState } from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import { Subheading } from "react-native-paper";
import NextButton from "../components/Buttons/AuthNextButton";
import * as Google from "expo-google-app-auth";

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
      <Image
        style={styles.hero}
        source={{
          uri: "https://cdn.pixabay.com/photo/2017/08/10/05/15/headphones-2618483__340.jpg",
        }}
      />
      <Subheading style={styles.title}>
        A new type of social{"\n"}network based on voice
      </Subheading>
      <NextButton
        onPress={submitHandler}
        text="Signin with Google"
        sending={loading}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    marginTop: 50,
  },
  hero: {
    alignSelf: "stretch",
    height: 400,
    borderRadius: 10,
    // marginTop: 46,
  },
  title: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 28,
    lineHeight: 35,
    letterSpacing: 0.5,
    fontWeight: "bold",
    color: "black",
  },
});
