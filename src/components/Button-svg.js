/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableHighlight, View} from 'react-native';

export function ButtonSVG(props) {
  const Icon = props.icon;
  return (
    <TouchableHighlight style={{width: 25, height: 25, paddingLeft: 15, paddingRight: 40,}}>
      <View >
        <Icon />
      </View>
    </TouchableHighlight>
  );
}
