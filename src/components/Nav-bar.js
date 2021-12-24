/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonSVG} from './Button-svg';
import IconBurgerMenu from '../images/icons/Icon-Burger-Menu.svg';
import IconBasket from '../images/icons/Icon-Basket.svg';

export const NavBar = () => {
  return (
    <View style={styles.navBar}>
      {/* You already have navBar view. There is no need to make additional wrapper */}
      <View style={styles.wrapper}>
        <ButtonSVG icon={IconBurgerMenu}/>
        <Text style={styles.titleHeader}> Ecommerce Store </Text>
        <ButtonSVG icon={IconBasket}/>
      </View>
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
    alignItems: 'center',
  },
  wrapper: {
    height: '100%',
    // You can use padding here. It will more useful on most cases
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
