import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavBar} from './src/components/Nav-bar';

const App = () => {
  return (
    <View style={styles.main}>
      <NavBar mainWrapper={styles.mainWrapper} />
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
    width: '90%',
    backgroundColor: 'black',
  },
});

export default App;
