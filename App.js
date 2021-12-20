import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ButtonSVG} from './src/components/Button-svg';

const Header = () => {
  return (
    <View style={styles.header}>
      <ButtonSVG />
      <Text style={styles.titleHeader}> Ecommerce Store </Text>
      <Button
        style={styles.headerButton}
        title="2"
        onPress={() => console.log('Burger button')}
      />
    </View>
  );
};

const App = () => {
  return (
    <ScrollView>
      <Header />
      <Text> Check </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleHeader: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  header: {
    height: 55,
    backgroundColor: '#008ACE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerButton: {
    height: 25,
    width: 25,
    // dont work
    padding: 15,
  },
});

export default App;
