import React from 'react';
import {TouchableHighlight, View} from 'react-native';

export function ButtonSVG(props) {
  const Icon = props.icon;
  const touch = props.touch;
  return (
    <TouchableHighlight onPress={touch}>
      <View>
        <Icon />
      </View>
    </TouchableHighlight>
  );
}
