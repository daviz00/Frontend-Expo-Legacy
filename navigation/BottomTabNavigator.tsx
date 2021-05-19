import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, Image, Pressable, Vibration } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { BottomTabParamList, HomeParamList, ProfileParamList } from '../types';
import TabComponent from '../components/Tab';

// started

import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-paper';
import withModalProvider from '../components/BottomSheet/ModalProvider';


// end

import { SafeAreaProvider } from 'react-native-safe-area-context';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const AddRoomButton = ({ children, onPress }) => {

  // start

  // state
  const [count, setCount] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);

  // hooks
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { bottom: safeBottomArea } = useSafeAreaInsets();

  // variables
  const snapPoints = useMemo(() => [contentHeight], [contentHeight]);

  // callbacks
  const handleIncreaseContentPress = useCallback(() => {
    setCount(state => state + 1);
  }, []);
  const handleDecreaseContentPress = useCallback(() => {
    setCount(state => Math.max(state - 1, 0));
  }, []);

  const handlePresentPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  const handleDismissPress = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, []);
  const handleOnLayout = useCallback(
    ({
      nativeEvent: {
        layout: { height },
      },
    }) => {
      setContentHeight(height);
    },
    []
  );

  // styles
  const contentContainerStyle = useMemo(
    () => ({
      ...styles.contentContainerStyle,
      paddingBottom: safeBottomArea,
    }),
    [safeBottomArea]
  );
  const emojiContainerStyle = useMemo(
    () => ({
      ...styles.emojiContainer,
      height: 50 * count,
    }),
    [count]
  );

  // end

  <Pressable
    onPress={handlePresentPress}
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <LinearGradient
      colors={['#71A1FF', '#2B32B2']}
      style={{
        width: 60,
        height: 60,
        borderRadius: 35,
        elevation: 12,
        overflow: 'visible',
        borderWidth: 0.5,
        borderColor: '#71A1FF'
      }}>
      {children}
    </LinearGradient>
  </Pressable>
};

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>

    <BottomSheetModal ref={bottomSheetRef} snapPoints={snapPoints}>
        <BottomSheetView
          style={contentContainerStyle}
          onLayout={handleOnLayout}
        >
          <Text style={styles.message}>
            Could this sheet modal resize to its content height ?
          </Text>
          <View style={emojiContainerStyle}>
            <Text style={styles.emoji}>😍</Text>
          </View>
          <Button label="Yes" onPress={handleIncreaseContentPress} />
          <Button label="Maybe" onPress={handleDecreaseContentPress} />
        </BottomSheetView>
      </BottomSheetModal>

    <BottomTab.Navigator
        initialRouteName="Home"
        showLabel='false'
        tabBarOptions={{
          activeTintColor: Colors[colorScheme].tint,
          showLabel: false,
          style: {
            position: 'absolute',
            height: 60,
            backgroundColor: '#ffffff',
            paddingHorizontal: 20,
            elevation: 0,
          },

        }}
      >
      <BottomTab.Screen
        name="Home"
          component={HomeNavigator}
        options={{
          tabBarButton: (props) => <TabComponent label="home" {...props} />,
        }}
        />
        <BottomTab.Screen
        name="Room"
          // component={HomeNavigator}
        component={AddRoomButton}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/images/plus.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: 'white'
              }}
            />),
          tabBarButton: (props) => (
            <AddRoomButton { ... props } />
          )
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarButton: (props) => <TabComponent label="profile" {...props} />,

        }}
      />
      </BottomTab.Navigator>
      </SafeAreaProvider>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'Home Screen',
          headerShown: false
        }}
      />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: 'Profile Screen',
          headerShown: false
        }}
      />
    </ProfileStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  contentContainerStyle: {
    paddingTop: 12,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  message: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
  },
  emoji: {
    fontSize: 156,
    textAlign: 'center',
    alignSelf: 'center',
  },
  emojiContainer: {
    overflow: 'hidden',
    justifyContent: 'center',
  },
});
