import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import {useNavigation} from '@react-navigation/native';
import {commonStyles} from '../styles/common-styles';

function login() {
  console.log('login');
}

export const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.mainWrapper}>
        <Text style={styles.title}>Ecomerce Store</Text>
        <CustomTextInput label="Email Address" />
        <CustomTextInput label="Password" />
        <Text style={styles.fogotPass}>Forgot Password?</Text>
        <Pressable style={styles.buttonAdd} onPress={() => login()}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </Pressable>
        <Text style={styles.signUp}>Forgot Password?</Text>
        <Pressable
          style={styles.skipButton}
          onPress={() => navigation.navigate('MainDrawer')}>
          <Text style={styles.buttonText}>SKIP LOGIN</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    height: '100%',
  },
  mainWrapper: {
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  title: {
    color: '#00A8F3',
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    paddingTop: 125,
    width: 180,
    paddingBottom: 70,
  },
  fogotPass: {
    color: '#00A8F3',
    alignSelf: 'flex-start',
    marginTop: -10,
    marginBottom: 35,
  },
  signUp: {
    color: '#00A8F3',
    marginTop: 10,
    marginBottom: 35,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
  },
  buttonAdd: {
    backgroundColor: '#008ACE',
    width: '100%',
    height: 40,
    borderRadius: 4,
    ...commonStyles.shadow,
    bottom: 10,
  },
  skipButton: {
    backgroundColor: '#8F8F8F',
    width: '100%',
    height: 40,
    borderRadius: 4,
    ...commonStyles.shadow,
    bottom: 10,
  },
});
