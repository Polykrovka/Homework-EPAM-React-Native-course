import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import {NavBar} from './src/components/Nav-bar';
import {NavBarDetails} from './src/components/Nav-bar-details';
import {SearchInput} from './src/components/Search-input';
import {Card} from './src/components/Card';
import mockCards from './src/components/mockCards';
import {CardLarge} from './src/components/Card-Large';

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
    <Card
      // according to API docs, item has ID field. I would alway suggest to use it instead of name since it is stable and unique
      key={item.attributes.name}
      data={item.attributes}
      // This object variable is recreated on every render. Better to move it in constants or at least in useMemo
      icon={{uri: 'https://picsum.photos/100'}}
    />
  ));

  const [refreshing, setRefreshing] = React.useState(false);

  // This solution is OK, but it is not actually refreshing data :)
  // Since you have a real request to get data, you can call it on pull-to-refresh
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      // I would propose to always use Stylesheet.Create
      contentContainerStyle={{alignItems: 'center'}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={styles.main}>
      {/*Good Idea is to put NavBar out of ScrollView so only content under NavBar would be scrollable  */}
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
    // It might be an acceptable solution, but looks like paddingHorizontal works here better
    width: '90%',
    // Also I would say that padding works better here.
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default App;
