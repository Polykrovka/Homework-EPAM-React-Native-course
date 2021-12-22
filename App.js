import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {NavBar} from './src/components/Nav-bar';
import {NavBarDetails} from './src/components/Nav-bar-details';
import {SearchInput} from './src/components/Search-input';
import {Card} from './src/components/Card';
import mockCards from './src/components/mockCards';
import {CardLarge} from './src/components/Card-Large';

const RenderCards = mockCards.map(item => <Card key={item.name} data={item} />);

const App = () => {
  return (
    // <ScrollView
    //   contentContainerStyle={{alignItems: 'center'}}
    //   style={styles.main}>
    //   <NavBar />
    //   <SearchInput />
    //   <View style={styles.cardsWrapper}>{RenderCards}</View>
    // </ScrollView>
    //============================
    <ScrollView
      style={styles.main}
      contentContainerStyle={{alignItems: 'center'}}>
      <NavBarDetails />
      <View style={styles.cardsWrapper}>
        <CardLarge data={mockCards[0]} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
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
