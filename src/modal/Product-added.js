import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import IconAdded from '../images/icons/Icon-Added.svg';
import {commonStyles} from '../styles/common-styles';
import {useNavigation} from '@react-navigation/native';

export const ProductAdded = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <IconAdded style={styles.icon} />
      <Text style={styles.title}>Product added to your cart</Text>
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>OK</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: 'white',
    height: 225,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '45%',
  },
  icon: {
    marginTop: 24.5,
  },
  title: {
    fontSize: 20,
    color: '#8F8F8F',
    fontWeight: 'bold',
    marginTop: 14.5,
  },
  button: {
    backgroundColor: '#008ACE',
    width: 125,
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
});
