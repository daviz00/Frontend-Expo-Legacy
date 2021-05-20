import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Title} from 'react-native-paper';
import SingleRoomCard from '../components/SingleRoom/SingleRoomCard';

export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <Title style={styles.title}>
        All Rooms
      </Title>
      <SingleRoomCard />
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
  roomCard: {
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 195,
    marginBottom: 60,
    color: '#E9E9E9'
  },
});
