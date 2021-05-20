import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Title} from 'react-native-paper';
import SingleRoomCard from '../components/SingleRoom/SingleRoomCard';
import SwipeCards from "react-native-swipe-cards-deck";

function Card() {
  return (
    <SingleRoomCard />
  );
}

export default function HomeScreen() {

  const [cards, setCards] = useState();

  // replace with real remote data fetching
  useEffect(() => {
    setTimeout(() => {
      setCards([
        {}, {},
      ]);
    }, 5000);
  }, []);

  function handleSwipe(card) {
    return true;
  }

  function handleMaybe(card) {
    return false;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Title style={styles.title}>
        All Rooms
      </Title>
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
    paddingTop: 60,
    paddingHorizontal: 30,
    alignItems: 'center',
    backgroundColor: '#13120E',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 195,
    marginBottom: -80,
    color: '#FFFFFF'
  },
});
