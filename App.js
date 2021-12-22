import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavBar} from './src/components/Nav-bar';
import {SearchInput} from './src/components/Search-input';
import {Card} from './src/components/Card';
import mockCards from './src/components/mockCards';

const RenderCards = mockCards.map(item => <Card key={item.name} data={item} />);

const App = () => {
  return (
    <View style={styles.main}>
      <NavBar />
      <SearchInput />
      <View style={styles.cardsWrapper}>{RenderCards}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardsWrapper: {
    width: '90%',
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default App;
