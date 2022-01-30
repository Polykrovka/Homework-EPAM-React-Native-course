import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {commonStyles} from '../styles/common-styles';
import {useNavigation} from '@react-navigation/native';
import IconAvatar from '../images/icons/Icon-Avatar.svg';
import {NavBarCart} from '../components/Nav-bar-cart';

export const UnregisteredCart = () => {
  const navigation = useNavigation();
  return (
    <>
      <NavBarCart />
      <View style={styles.container}>
        <IconAvatar style={styles.icon} />
        <Text style={styles.title}>Login First!</Text>
        <Text style={styles.discription}>Login first to view your cart</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>LOGIN NOW</Text>
        </Pressable>
        <Text style={styles.signUpLabel}>New here? Sign Up</Text>
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
  signUpLabel: {
    color: '#00A8F3',
    fontSize: 15,
  },
});
