import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {commonStyles} from '../styles/common-styles';
import {useNavigation} from '@react-navigation/native';
import IconBox from '../images/icons/Icon-Box.svg';
import {NavBarCart} from '../components/Nav-bar-cart';

export const RegistredCart = () => {
  const navigation = useNavigation();
  return (
    <>
      <NavBarCart />
      <View style={styles.container}>
        <IconBox style={styles.icon} />
        <Text style={styles.title}>Your Cart is Empty!</Text>
        <Text style={styles.discription}>Add product in your cart now</Text>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>SHOP NOW</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
  },
  icon: {
    marginTop: 130,
  },
  title: {
    fontSize: 20,
    color: '#8F8F8F',
    fontWeight: 'bold',
    marginTop: 14.5,
  },
  button: {
    backgroundColor: '#008ACE',
    width: '90%',
    height: 40,
    borderRadius: 4,
    ...commonStyles.shadow,
    bottom: 10,
    marginTop: 37,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
  },
  discription: {
    width: '55%',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
});
