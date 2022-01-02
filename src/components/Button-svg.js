import React from 'react';
import {TouchableHighlight, View} from 'react-native';

export function ButtonSVG(props) {
  const Icon = props.icon;
  return (
    <TouchableHighlight>
      <View >
        <Icon />
      </View>
    </TouchableHighlight>
  );
}
