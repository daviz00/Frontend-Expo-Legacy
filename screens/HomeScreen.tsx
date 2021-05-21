import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Title } from "react-native-paper";
import SingleRoomCard from "../components/SingleRoom/SingleRoomCard";
import SwipeCards from "react-native-swipe-cards-deck";
import Layout from "../constants/Layout";
const {window: { height, width }, isSmallDevice} = Layout

function Card() {
  return <SingleRoomCard />;
}

export default function HomeScreen() {
  const [cards, setCards] = useState();

  // replace with real remote data fetching
  useEffect(() => {
    setCards([{}, {}]);
  }, []);

  function handleSwipe(card) {
    return true;
  }

  function handleMaybe(card) {
    return false;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Title style={styles.title}>All Rooms</Title>
      <SwipeCards
        cards={cards}
        renderCard={(cardData) => <Card data={cardData} />}
        keyExtractor={(cardData) => String(cardData.text)}
        handleYup={handleSwipe}
        handleNope={handleSwipe}
        handleMaybe={handleMaybe}
        showYup={false}
        showNope={false}
        showMaybe={false}
        hasMaybeAction={false}
        loop={true}
        smoothTransition={false}
        stack={false}
        stackOffsetX={0}
        stackOffsetY={0}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.074,
    paddingHorizontal: width * 0.07,
    alignItems: "center",
    backgroundColor: "#13120E",
  },

  title: {
    fontSize: height * 0.034,
    fontWeight: "bold",
    marginRight: width * 0.4975,
    marginBottom: -(height * 0.099),
    color: "#FFFFFF",
  },
});
