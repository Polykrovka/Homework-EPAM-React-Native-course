import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import IconLogin from '../images/icons/Icon-Login.svg';
import {commonStyles} from '../styles/common-styles';
import {useNavigation} from '@react-navigation/native';

export const LoginToContinue = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <IconLogin style={styles.icon} />
      <Text style={styles.title}>Product added to your cart</Text>
      <Text style={styles.discription}>
        Please login to add product in your cart
      </Text>
      <View style={styles.buttonsConteiner}>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: 'white',
    height: 275,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '45%',
    borderRadius: 5,
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
  discription: {
    width: '55%',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
  buttonsConteiner: {
    flexDirection: 'row',
    width: '73%',
    justifyContent: 'space-between',
  },
});
