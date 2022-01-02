import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import {NavBar} from './src/components/Nav-bar';
import {NavBarDetails} from './src/components/Nav-bar-details';
import {SearchInput} from './src/components/Search-input';
import {Card} from './src/components/Card';
import mockCards from './src/components/mockCards';
import {CardLarge} from './src/components/Card-Large';

const randomPick = {uri: 'https://picsum.photos/100'};
const BASE_URL = 'https://demo.spreecommerce.org';
const API_PATH = `${BASE_URL}/api/v2/storefront/products`;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const App = () => {
  const [backData, getBackData] = useState();

  useEffect(() => {
    fetch(API_PATH)
      .then(response => response.json())
      .then(data => getBackData(data));
  }, []);

  const RenderCards = backData?.data.map(item => (
    <Card key={item.attributes.name} data={item.attributes} icon={randomPick} />
  ));

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center'}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={styles.main}>
      <NavBar />
      <SearchInput />
      <View style={styles.cardsWrapper}>{RenderCards}</View>
    </ScrollView>
    //============================
    // <ScrollView
    //   style={styles.main}
    //   contentContainerStyle={{alignItems: 'center'}}>
    //   <NavBarDetails />
    //   <View style={styles.cardsWrapper}>
    //     <CardLarge data={mockCards[0]} />
    //   </View>
    // </ScrollView>
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
