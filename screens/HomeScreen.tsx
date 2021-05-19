import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';

import { Card, Button } from 'react-native-elements'

import { MaterialIcons } from '@expo/vector-icons';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text
        h3
        style={styles.title} >All Rooms</Text>


      <View style={{height: 32}} />
      <Card
        containerStyle={{
          // height: 517,
          width: 335,
          alignItems: 'center',
          flex: 1,
          borderRadius: 24,
          elevation: 6,
      }}
      >

        <Text style={{
          marginTop: 10,
          marginBottom: 10,
          fontSize: 20,
          lineHeight: 26,
          fontWeight: 'bold',
          marginLeft: 5,
          textAlign: 'left',

        }}>
          The theory of constructivism and conventionalism.
    </Text>
        <View style={{
          backgroundColor: "white",
          flexDirection: "row",
          marginVertical: 5,
        }}>
          <MaterialIcons name="people" size={21} color="#999999" style={{
            marginLeft: 5,
            marginRight: 5
          }} />
          <Text style={{
            marginRight: 10,
            fontSize: 15,
          }}>
            420
          </Text>
          <Text style={{
            marginRight: 10,
            fontSize: 15,
          }}>
              |
          </Text>
        <MaterialIcons name="record-voice-over" size={19} color="#999999"
            style={{ marginRight: 10 }}
          />
          <Text style={{
            marginRight: 10,
            fontSize: 15,
          }}>
              69
          </Text>
        </View>

        <View style={{ backgroundColor: "white", marginTop:20, alignItems: "center"}} >
          <Image

              source={{ uri: 'https://pbs.twimg.com/profile_images/1334955566993604608/vo4Ep1TZ_400x400.jpg' }}
            style={{ width: 90, height: 90, borderRadius: 50, borderWidth: 2, borderColor: '#2B32B2'}} />


          <View style={{ backgroundColor: "white",  flexDirection: "row" }} >
            <Image
              source={{ uri: 'https://pbs.twimg.com/profile_images/580383480850358272/hGdszCo0_400x400.jpg' }}
              style={{ width: 60, height: 60, borderRadius: 50, marginTop: 10, marginRight: 5}} />
          <Image
              source={{ uri: 'https://pbs.twimg.com/profile_images/1361631454795546624/7fnmx7Fq_400x400.jpg' }}
              style={{ width: 60, height: 60, borderRadius: 50, marginTop: 30, marginHorizontal: 5}} />
            <Image
              source={{ uri: 'https://pbs.twimg.com/profile_images/464912469278728192/X7T2lRQ5_400x400.png' }}
              style={{ width: 60, height: 60, borderRadius: 50, marginTop: 30, marginHorizontal: 5, }} />
            <Image
              source={{ uri: 'https://pbs.twimg.com/profile_images/1289046130366406656/-s-fxoLn_400x400.jpg' }}
              style={{ width: 60, height: 60, borderRadius: 50, marginTop: 10, marginLeft: 5}}/>
          </View>

        </View>

          <View style={{ backgroundColor: "white",  flexDirection: "row", justifyContent: "center"}} >
            <Image
              source={{ uri: 'https://pbs.twimg.com/profile_images/804990434455887872/BG0Xh7Oa_400x400.jpg' }}
              style={{ width: 60, height: 60, borderRadius: 50, marginTop: 10, marginRight: 5}} />
          <Image
              source={{ uri: 'https://pbs.twimg.com/profile_images/1009469376490192896/hW_ZFLHm_400x400.jpg' }}
              style={{ width: 60, height: 60, borderRadius: 50, marginTop: 30, marginHorizontal: 5}} />
            <Image
              source={{ uri: 'https://pbs.twimg.com/profile_images/1190747917998546944/D3U5FNa7_400x400.jpg' }}
              style={{ width: 60, height: 60, borderRadius: 50, marginTop: 30, marginHorizontal: 5}} />
            <Image
              source={{ uri: 'https://pbs.twimg.com/profile_images/1223294220351483906/lIm_oWsh_400x400.jpg' }}
              style={{ width: 60, height: 60, borderRadius: 50, marginTop: 10, marginLeft: 5}}/>
          </View>



        <View style={{
          flexDirection: "column-reverse",
          flex: 1,
          backgroundColor: "white",

        // flexDirection: "row",
            // alignItems: 'center',
        }}>
          <Button
          type="outline"
          buttonStyle={{
          // borderRadius: 40,
          borderWidth: 3,
            borderColor: '#71A1FF',
          }}
          containerStyle={{
          marginTop: 12,
          flexDirection: 'column-reverse',
          }}
          titleStyle={{ color: '#71A1FF' }}
          title="Enter Room"
          icon={
            <MaterialIcons name="multitrack-audio" size={20} color="#71A1FF"
            style={{ marginRight: 10 }}
              />}
          />
</View>


</Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 30,
    alignItems: 'center',
    paddingBottom: 140
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    // textAlign: 'left',
    marginRight: 195,
  },

});
