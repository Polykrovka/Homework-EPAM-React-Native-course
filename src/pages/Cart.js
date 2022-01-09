import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {NavBarCart} from '../../src/components/Nav-bar-cart';
import {RegistredCart} from '../components/Registered-cart';
import {UnregisteredCart} from '../components/Unregistered-cart';

export const Cart = () => {
  let registered = false;
  return (
    <>
      <NavBarCart />
      {registered ? <RegistredCart /> : <UnregisteredCart />}
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
