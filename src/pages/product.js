import React from 'react';
import {NavBarDetails} from '../components/Nav-bar-details';
import {StyleSheet, View, ScrollView} from 'react-native';
import {CardLarge} from '../components/Card-Large';
import {mockCards} from '../components/mockCards';

export const Product = () => {
  return (
    <>
      <NavBarDetails />
      <ScrollView
        style={styles.main}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.cardsWrapper}>
          <CardLarge data={mockCards[0]} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
  cardsWrapper: {
    paddingHorizontal: '5%',
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
