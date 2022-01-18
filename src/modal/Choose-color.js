import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import IconSelect from '../images/icons/Icon-Select.svg';
import {commonStyles} from '../styles/common-styles';
import {useNavigation} from '@react-navigation/native';

export const ChooseColor = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <IconSelect style={styles.icon} />
      <Text style={styles.title}>Select color</Text>
      <Text style={styles.discription}>
        Please select your color to add this item in your cart
      </Text>
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
    height: 275,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '40%',
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
});
