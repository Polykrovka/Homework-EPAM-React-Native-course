import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ButtonSVG} from './Button-svg';
import IconVector from '../images/icons/Icon-Vector.svg';
import {useNavigation} from '@react-navigation/native';

export const NavBarCart = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navBar}>
      <View style={styles.wrapper}>
        <ButtonSVG icon={IconVector} touch={() => navigation.goBack()} />
        <Text style={styles.titleHeader}> Ecommerce Store </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: 55,
    width: '100%',
    backgroundColor: '#008ACE',
    alignItems: 'center',
  },
  wrapper: {
    height: '100%',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleHeader: {
    marginLeft: '18%',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    alignSelf: 'center',
  },
});
