import React, { useRef } from 'react';
import styled from 'styled-components/native';
import { Transition, Transitioning } from 'react-native-reanimated';

import Images from '../assets/images';

const bgColors = {
  home: '#D6E4FF',
  profile: '#D6E4FF',
};

const textColors = {
  home: '#71A1FF',
  profile: '#71A1FF',
};

const Container = styled.TouchableWithoutFeedback``;

const Background = styled(Transitioning.View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.focused ? bgColors[props.label] : '#F2F2F2')};
  border-radius: 100px;
  margin: 8px;
`;
const Icon = styled.Image`
  height: 24px;
  width: 24px;
`;

const Label = styled.Text`
  color: ${(props) => textColors[props.label]};
  font-weight: bold;
  margin-left: 8px;
`;

function Tab({ label, accessibilityState, onPress }) {
  const focused = accessibilityState.selected;
  const icon = !focused ? Images.icons[label] : Images.icons[`${label}Focused`];

  const transition = (
    <Transition.Sequence>
      <Transition.Out type='fade' durationMs={0} />
      <Transition.Change interpolation='easeInOut' durationMs={100} />
      <Transition.In type='fade' durationMs={10} />
    </Transition.Sequence>
  );

  const ref = useRef();

  return (
    <Container
      onPress={() => {
        ref.current.animateNextTransition();
        onPress();
      }}>
      <Background
        focused={focused}
        label={label}
        ref={ref}
        transition={transition}>
        <Icon source={icon} />
        {focused && (
          <Label label={label}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Label>
        )}
      </Background>
    </Container>
  );
}

export default Tab;