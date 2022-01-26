import React, {useState} from 'react';

import {
  Text,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

let scaleValue = new Animated.Value(0);

function scale() {
  scaleValue.setValue(0);
  Animated.timing(scaleValue, {
    toValue: 1,
    duration: 1000,
    easing: Easing.easeOutBack,
    useNativeDriver: true,
  }).start();
}

const buttonScale = scaleValue.interpolate({
  inputRange: [0, 0.5, 1],
  outputRange: [1, 0.165, 0.2],
});

const ButtonAnimation = props => {
  const [content, setContent] = useState(
    <Text style={[props.styles ? props.styles.buttonText : '']}>
      {props.label}
    </Text>,
  );

  function onPress() {
    setContent(null);
    scale();
    // props.onPress();
  }

  // console.log(buttonContent);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          props.styles ? props.styles.buttonAdd : '',
          {
            transform: [{scaleX: buttonScale}],
          },
        ]}>
        {content}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

// const styles = StyleSheet.create({
//   dots: {
//     fontSize: 30,
//   },
// });
export default ButtonAnimation;
