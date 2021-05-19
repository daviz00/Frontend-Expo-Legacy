import { useNavigation } from "@react-navigation/native";
import React, { FC, memo, useMemo } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultAvatar from "../../assets/default-avatar";
import Touchable from '../Core/Touchable';
// import { useRoom } from "../../contexts/room/context";
// import { User } from "../../models/channel";
// import { useTheme } from "../../contexts/theme/context";
import { useSelector } from "react-redux";
// import { RootState } from "../../store/store";

// interface Props {
//   user: User;
// }

const UserCell = ({ user, isSpeaking = false }) => {
  const { goBack, navigate } = useNavigation();
  const isAudience = !user.is_speaker || !user.is_followed_by_speaker;
  return (
    <Touchable
      style={[
        styles.user,
        { backgroundColor: '#eee' },
        isAudience && styles.userSmall,
      ]}
      onPress={() =>
        navigate("UserProfile", { user_id: user.user_id, user: user })
      }
      key={user.user_id.toString()}
    >
      <View
        style={[
          styles.userAvatar,
          isAudience && styles.userAvatarSmall,
          isSpeaking && styles.userAvatarSpeaking,
        ]}
      >
        <Image
          source={{
            uri: user.photo_url ?? defaultAvatar,
          }}
          style={[
            {
              height: "100%",
              width: "100%",
              borderRadius: styles.userAvatar["borderRadius"],
            },
            isAudience && styles.userAvatarSmall,
          ]}
        />
        {user.is_speaker && (
          <View
            style={[styles.userMicContainer, { backgroundColor: '#eee' }]}
          >
            <MaterialCommunityIcons
              name="microphone"
              size={18}
              color={'#000'}
            />
          </View>
        )}
      </View>

      <Text style={[styles.userName, { color: '#000' }]}>{user.name}</Text>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  user: {
    width: 100 / 3 + "%",
    alignItems: "center",
    marginBottom: 24,
    height: 110,
  },
  userSmall: {
    width: 100 / 4 + "%",
    height: 110,
  },
  userName: {
    fontFamily: "Nunito-Bold",
    color: "#4e4b4e",
    fontSize: 13,
    marginTop: 8,
    textAlign: "center",
  },
  userAvatar: {
    borderRadius: 72 / 2.5,
    width: 72,
    height: 72,
  },
  userAvatarSmall: {
    borderRadius: 28,
    width: 54,
    height: 54,
  },
  userAvatarSpeaking: {
    borderWidth: 3,
    borderColor: "#CCCBC5",
    padding: 3,
    borderRadius: 34,
  },
  userMicContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#FEFCFF",
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(UserCell);
