import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { View, StyleSheet, Image, Pressable, Vibration } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { BottomTabParamList, HomeParamList, ProfileParamList } from "../types";
import TabComponent from "../components/Tab";

import { SafeAreaProvider } from "react-native-safe-area-context";
import Trial from "../screens/NewRoom";
import { useNavigation } from "@react-navigation/native";
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const AddRoomButton = ({ children, onPress }) => {
  const navigation = useNavigation()
  return(
  <Pressable
    onPress={() => navigation.navigate('Room')}
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <LinearGradient
      // colors={['#d00000', '#3a0ca3']}
      colors={["#FF9905", "#FB5D36"]}
      style={{
        width: 60,
        height: 60,
        borderRadius: 35,
        elevation: 12,
        overflow: "visible",
        borderWidth: 0,
        borderColor: "#000000",
      }}
    >
      {children}
    </LinearGradient>
  </Pressable>
)};

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <BottomTab.Navigator
        initialRouteName="Home"
        showLabel="false"
        tabBarOptions={{
          activeTintColor: Colors[colorScheme].tint,
          showLabel: false,
          style: {
            position: "absolute",
            height: 60,
            backgroundColor: "black",
            paddingHorizontal: 20,
            borderTopWidth: 0,
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
          component={Trial}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("../assets/images/plus.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: "black",
                }}
              />
            ),
            tabBarButton: (props) => <AddRoomButton {...props} />,
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="profile" {...props} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </SafeAreaProvider>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
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
          headerTitle: "Home Screen",
          headerShown: false,
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
          headerTitle: "Profile Screen",
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
}
