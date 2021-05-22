import * as React from "react";
import {
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import { Button } from 'react-native-paper'
const { width, height } = Dimensions.get("screen");
import AuthNextButton from './components/Buttons/AuthNextButton'

const bgs = ["#A5BBFF", "#DDBEFE", "#FF63ED", "#B98EFF"];
const DATA = [
  {
    key: "3571572",
    title: "Multi-lateral intermediate moratorium",
    description:
      "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    image: "https://image.flaticon.com/icons/png/256/3571/3571572.png",
  },
  {
    key: "3571747",
    title: "Automated radical data-warehouse",
    description:
      "Use the optical SAS system, then you can navigate the auxiliary alarm!",
    image: "https://image.flaticon.com/icons/png/256/3571/3571747.png",
  },
  {
    key: "3571680",
    title: "Inverse attitude-oriented system engine",
    description:
      "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
    image: "https://image.flaticon.com/icons/png/256/3571/3571680.png",
  },
  {
    key: "3571603",
    title: "Monitored global data-warehouse",
    description: "We need to program the open-source IB interface!",
    image: "https://image.flaticon.com/icons/png/256/3571/3571603.png",
  },
];

const Indicator = ({ scrollX }) => {
  return (
    <View style={{ position: "absolute", bottom: 100, flexDirection: "row" }}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: "#fff",
              margin: 10,
              transform: [{ scale }],
              opacity,
            }}
          ></Animated.View>
        );
      })}
    </View>
  );
};

const Square = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );
  const rotate = YOLO.interpolate({
    inputRange: [0, 0.9, 1],
    outputRange: ["35deg", "-15deg", "35deg"],
  });
  return (
    <Animated.View
      style={{
        height,
        width: height,
        backgroundColor: "#fff",
        borderRadius: 86,
        transform: [{ rotate }],
        position: "absolute",
        top: -height * 0.6,
        left: -height * 0.3,
      }}
    />
  );
};

const BackDrop = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((_) => _),
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, { backgroundColor }]}
    />
  );
};

export default function App() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <BackDrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        pagingEnabled
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsHorizontalScrollIndication={false}
        renderItem={({ item }) => {
          return (
            <View style={{ width, alignItems: "center", padding: 20 }}>
              <View style={{ flex: 0.7, justifyContent: "center" }}>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: width / 2,
                    height: height / 2,
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View style={{ flex: 0.3 }}>
                <Text
                  style={{
                    fontWeight: "800",
                    fontSize: 24,
                    marginBottom: 10,
                    color: "#fff",
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
      <Button
        mode="contained"
        color="#71A1FF"
        onPress={() => console.log('op')}
        labelStyle={styles.labelStyle}
        // disabled={sending}
        // loading={sending}
        style={{borderRadius: 15, position: 'absolute', bottom: 150, elevation: 9}}>
        Let's get Started
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  labelStyle: {
    fontSize: 18,
    paddingVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textTransform: 'capitalize',
    minHeight: 24,
  },
});
