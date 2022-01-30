import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import {useNavigation} from '@react-navigation/native';
import {commonStyles} from '../styles/common-styles';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import ButtonAnimation from '../components/ButtonAnimation';

export const Login = () => {
  const animatedButton = useAnimatedStyle(() => {
    return {
      // width: withSpring(100),
    };
  });
  function login(email, pass) {
    if ((email === 'test', pass === 'test')) {
      navigation.navigate('MainDrawer');
    } else {
      // animatedButton();
      // Animation Error
    }
  }
  const navigation = useNavigation();
  const [email, onChangeEmail] = useState(null);
  const [pass, onChangePass] = useState(null);
  return (
    <View style={styles.main}>
      <View style={styles.mainWrapper}>
        <Text style={styles.title}>Ecomerce Store</Text>
        <CustomTextInput label="Email Address" onChange={onChangeEmail} />
        <CustomTextInput label="Password" onChange={onChangePass} />
        <Text style={styles.fogotPass}>Forgot Password?</Text>
        {/* <Animated.View style={[styles.bar, animatedButton]} /> */}
        {/* <Pressable style={styles.buttonAdd} onPress={() => login(email, pass)}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </Pressable> */}
        <ButtonAnimation styles={styles} label={'SIGN IN'} onPress={login} />
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
  bar: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
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
