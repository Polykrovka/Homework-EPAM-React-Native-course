import React, {Component} from 'react';
import {commonStyles} from '../styles/common-styles';

import {
  StyleSheet,
  Text,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';

let scaleValue = new Animated.Value(0);

function scale() {
  scaleValue.setValue(0);
  Animated.timing(scaleValue, {
    toValue: 1,
    duration: 3000,
    easing: Easing.easeOutBack,
    useNativeDriver: true,
  }).start();
}

const buttonScale = scaleValue.interpolate({
  inputRange: [0, 0.5, 1],
  outputRange: [1, 0.3, 0.3],
});

const ButtonAnimation = props => {
  let buttonContent = (
    <Text style={[props.styles ? props.styles.buttonText : '']}>
      {props.label}
    </Text>
  );

  function onPress() {
    buttonContent = '45454';
    scale();
    props.onPress();
  }

  console.log(buttonContent);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          props.styles ? props.styles.buttonAdd : '',
          {
            transform: [{scaleX: buttonScale}],
          },
        ]}>
        {buttonContent}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default ButtonAnimation;
