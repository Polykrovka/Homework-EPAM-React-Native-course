import React, {useState} from 'react';
import Dots from './dots';

import {
  Text,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

const ButtonAnimation = props => {
  const [content, setContent] = useState(
    <Text style={[props.styles ? props.styles.buttonText : '']}>
      {props.label}
    </Text>,
  );

  let [width, setWidth] = useState({
    width: '100%',
  });

  let scaleValue = new Animated.Value(1);

  function scale() {
    Animated.timing(scaleValue, {
      toValue: 200,
      duration: 1000,
      easing: Easing.easeOutBack,
      useNativeDriver: false,
    }).start();

    setWidth({
      width: buttonScale,
    });
  }

  function onPress() {
    scale();
    setContent(<Dots />);
    // props.onPress();
  }

  const buttonScale = scaleValue.interpolate({
    inputRange: [100, 150, 200],
    outputRange: [240, 150, 100],
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[props.styles ? props.styles.buttonAdd : '', width]}>
        {content}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default ButtonAnimation;
