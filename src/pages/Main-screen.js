import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import {SearchInput} from '../../src/components/Search-input';
import {Card} from '../../src/components/Card';

const randomPick = {uri: 'https://picsum.photos/100'};
const BASE_URL = 'https://demo.spreecommerce.org';
const API_PATH = `${BASE_URL}/api/v2/storefront/products`;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const MainScreen = () => {
  const [backData, getBackData] = useState();

  function fetchRequest() {
    fetch(API_PATH)
      .then(response => response.json())
      .then(data => getBackData(data));
  }

  useEffect(() => {
    fetchRequest();
  }, []);

  const RenderCards = backData?.data.map(item => (
    <Card key={item.id} data={item.attributes} icon={randomPick} />
  ));

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    fetchRequest();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={styles.main}>
      <SearchInput />
      <View style={styles.cardsWrapper}>{RenderCards}</View>
    </ScrollView>
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
