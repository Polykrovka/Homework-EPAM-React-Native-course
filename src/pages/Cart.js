import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {NavBarCart} from '../../src/components/Nav-bar-cart';

export const Cart = () => {
  return (
    <>
      <NavBarCart />
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
  cardsWrapper: {
    paddingHorizontal: '5%',
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
