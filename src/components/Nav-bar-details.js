/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonSVG} from './Button-svg';
import IconVector from '../images/icons/Icon-Vector.svg';
import IconBasket from '../images/icons/Icon-Basket.svg';
import IconHurn from '../images/icons/Icon-Hurt.svg';

export const NavBarDetails = () => {
  return (
    <View style={styles.navBar}>
      <View style={styles.wrapper}>
        <ButtonSVG icon={IconVector}/>
        <View style={styles.rightIconsWrapper}>
          <ButtonSVG icon={IconHurn}/>
          <ButtonSVG icon={IconBasket}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rightIconsWrapper: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
  },
  navBar: {
    height: 55,
    width: '100%',
    backgroundColor: '#008ACE',
    alignItems: 'center',
  },
  wrapper: {
    height: '100%',
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
