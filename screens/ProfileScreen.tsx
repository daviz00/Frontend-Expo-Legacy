import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    ScrollView,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Card, Button } from 'react-native-elements'

import FollowButton from '../components/Buttons/FollowButton';


export default function ProfileScreen() {
return (
    <SafeAreaView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignSelf: 'center'}}>
        <View style={styles.profileImage}>
        <Image
            source={{
                uri:
                'https://pbs.twimg.com/profile_images/1334955566993604608/vo4Ep1TZ_400x400.jpg',
                }}
                style={styles.image}
                resizeMode="center"></Image>
        </View>
        </View>

        <View style={styles.headContainer}>
            <Text style={[styles.text, {fontWeight: 'bold', fontSize: 20}]}>
                Devansh Agarwal
            </Text>
            <Text style={[styles.text, {color: '#AEB5BC', fontSize: 14}]}>
                @daviz00
            </Text>
        </View>
        <View style={styles.statsContainer}>
        <View
            style={[
                styles.statsBox,
                {borderColor: '#DFD8C8', borderRightWidth: 1},
            ]}>
            <Text style={[styles.text, {fontSize: 16}]}>
                420
            </Text>
            <Text style={[styles.text, styles.subText]}>Followers</Text>
            </View>
            <View style={styles.statsBox}>
            <Text style={[styles.text, {fontSize: 16}]}>
                69
            </Text>
            <Text style={[styles.text, styles.subText]}>Following</Text>
            </View>
            </View>
            <FollowButton />
            <View style={styles.infoContainer}>
            <Text
                style={[ styles.text,
                        {
                        color: '#1A1A1A',
                        fontSize: 14,
                        textAlign: 'center',
                        lineHeight: 22,
                        },
                        ]}>

            Software Engineer 👩‍💻 @Verse | Globe trotter 🌎| Community Enthusiast
            | Breathing resilience, empowerment for social impact ✨| Swimmer 🏊
            | Listener & Learner ⚒️
            {'\n'}
            🌟 Lived in 5 countries 🇩🇪🇬🇧🇨🇦🇪🇸🇫🇷
            {'\n'}
            🧠 Fascinated by neuroscience, psychology, behavioural, cognitive &
            social sciences
            {'\n'}
            Diving into Tech - Majored in Computer Science, Data Science and
            International Relations minor
            {'\n'}
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
    paddingTop: 60,
    paddingHorizontal: 30,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
},
headContainer: {
    marginVertical: 20,
    alignItems: 'center',
    // height:200,
},
text: {
    color: '#52575D',
},
image: {
    flex: 1,
    height: undefined,
    width: undefined,
},

subText: {
    fontSize: 12,
    color: '#AEB5BC',
    textTransform: 'uppercase',
    fontWeight: '500',
},
profileImage: {
    width: 150,
    height: 150,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 10,
    elevation: 8,
},

infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 35,
},
statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 0,
},
statsBox: {
    alignItems: 'center',
    flex: 1,
},
});
