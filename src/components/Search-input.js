/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {commonStyles} from '../styles/common-styles';
import IconSearch from '../images/icons/Icon-Search.svg';

export const SearchInput = () => {
  return (
    <View style={styles.searchInput}>
      {/* Again, you can use only one wrapper view */}
      <View style={styles.wrapper}>
        <TextInput style={styles.textInput} />
        <IconSearch style={styles.iconSearch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: 'white',
    height: 74,
    width: '100%',
    alignItems: 'center',
    ...commonStyles.shadow,
  },
  wrapper: {
    height: '100%',
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
      width: '100%',
      borderColor: '#8F8F8F',
      borderRadius: 4,
      borderWidth: 1,
      height: 34,
  },
  iconSearch: {
      position: 'absolute',
      left: 12,
  },
});

