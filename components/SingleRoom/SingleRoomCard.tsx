import React from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
import EnterRoomButton from '../Buttons/EnterRoomButton';
import {Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Row from './Row';
// import {height, width, ACTION_OFFSET, VERTICAL_MARGIN} from '../../utils/constants';
import { MaterialIcons } from '@expo/vector-icons';

const {height, width} = Dimensions.get('screen');
const SingleRoomCard = ({name, source, isFirst, swipe, tiltSign, ...rest}) => {
  const {navigate, goBack} = useNavigation();
  const submitHandler = () => {
    navigate('Room');
  };
  return (
    <Card style={styles.cardContainer}>
      <Text style={styles.titleStyle}>
        The theory of constructivism and conventionalism.
      </Text>
      <View
        style={styles.countView}>
        <MaterialIcons name="people" size={21} color="#999999" style={{
            marginLeft: 5,
            marginRight: 5
          }} />
        <Text
          style={{
            marginRight: 10,
            fontSize: 15,
          }}>
          420
        </Text>
        <Text
          style={{
            marginRight: 10,
            fontSize: 15,
          }}>
          |
        </Text>
        <MaterialIcons name="record-voice-over" size={19} color="#999999"
            style={{ marginRight: 10 }}
          />
        <Text
          style={{
            marginRight: 10,
            fontSize: 15,
          }}>
          69
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Image
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1334955566993604608/vo4Ep1TZ_400x400.jpg',
          }}
          style={styles.hostImage}
        />
        <Row />
        <Row />
      </View>

      <View
        style={{
          flexDirection: 'column',
          // marginTop: 30,
          flex: 1,
        }}>
        <EnterRoomButton onPress={submitHandler} text="Enter Room" />
      </View>
    </Card>
  );
};

export default SingleRoomCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: height / 1.64,
    width: width / 1.17,
    // alignItems: 'center',
    borderRadius: 24,
    elevation: 4,
  },
  titleStyle: {
    marginVertical: 15,
    marginHorizontal: 20,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 1,
  },
  hostImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#2B32B2',
    marginTop: 20,

  },
});
