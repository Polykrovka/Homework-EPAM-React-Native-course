import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavBar} from './src/components/Nav-bar';

const App = () => {
  return (
    <View style={styles.main}>
      <NavBar />
      <View style={styles.mainWrapper}>
        <Text>Check </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  mainWrapper: {
    color: 'red',
    width: '90%',
    height: '100%',
    backgroundColor: 'black',
    zIndex: 1,
  },
});

export default App;
