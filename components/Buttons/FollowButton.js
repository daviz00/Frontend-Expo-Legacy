import React, {useState} from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {Card, Button} from 'react-native-elements';

const FollowButton = () => {
  const [title, setTitle] = useState('Follow');
  const followUser = () => {};
  const unfollowUser = () => {};
  const lol = () => {
    return (
      <>
        {id === user._id ? (
          <span className="btn btn-outline-primary">Edit profile</span>
        ) : user.following.includes(id) ? (
          <span
            onClick={() => dispatch(unfollowUser(id))}
            className="btn btn-outline-primary">
            Unfollow
          </span>
        ) : (
          <span
            onClick={() => dispatch(followUser(id))}
            className="btn btn-outline-primary">
            Follow
          </span>
        )}
      </>
    );
  };
  return (
    <Button
      type="solid"
      buttonStyle={{
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#71A1FF',
        backgroundColor: '#71A1FF',
      }}
      containerStyle={{
        marginTop: 30,
        flexDirection: 'column-reverse',
        marginHorizontal: 10,
      }}
      titleStyle={{color: 'white'}}
      title={title}
      onPress={followUser}
      icon={
        <AntDesignIcon
          name="adduser"
          size={20}
          color="white"
          style={{marginRight: 10}}
        />
      }
    />
  );
};

export default FollowButton;
