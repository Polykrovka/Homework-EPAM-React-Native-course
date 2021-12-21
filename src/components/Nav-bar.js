/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonSVG} from './Button-svg';
import IconBurgerMenu from '../images/icons/Icon-Burger-Menu.svg';
import IconBasket from '../images/icons/Icon-Basket.svg';

export const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <ButtonSVG icon={IconBurgerMenu}/>
      <Text style={styles.titleHeader}> Ecommerce Store </Text>
      <ButtonSVG icon={IconBasket}/>
    </View>
  );
};

const styles = StyleSheet.create({
  titleHeader: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  navBar: {
    height: 55,
    width: '100%',
    backgroundColor: '#008ACE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
