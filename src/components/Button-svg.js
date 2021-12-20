import React from 'react';
import {TouchableHighlight, View, GestureResponderEvent} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import IconBurgerMenu from '../images/icons/Icon-Burger-Menu.svg'

export function ButtonSVG({onPress}) {
  const lineProps = {
    strokeOpacity: 1,
    strokeWidth: 1,
    strokeLineCap: 'round',
    strokeLineJoin: 'round',
  };

  return (
    <TouchableHighlight>
      <View style={{width: 25, height: 25, backgroundColor: 'black'}}>
        {/* <IconBurgerMenu width={25} height={25} /> */}
      </View>
    </TouchableHighlight>
  );
}
