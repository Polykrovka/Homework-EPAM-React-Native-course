import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';

const {interpolateNode, Extrapolate} = Animated;
const size = 16;

const Dots = () => {
  let progress = new Animated.Value(0);
  Animated.timing(progress, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  const bubbles = [0, 1, 2];
  const delta = 1 / bubbles.length;
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {bubbles.map(i => {
          const start = i * delta;
          const end = start + delta;
          const scale = interpolateNode(progress, {
            inputRange: [start, end],
            outputRange: [1, 1.5],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View
              key={i}
              style={[styles.bubble, {transform: [{scale}]}]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bubble: {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: 'black',
  },
});

export default Dots;
