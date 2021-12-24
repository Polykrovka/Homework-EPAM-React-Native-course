/* eslint-disable prettier/prettier */ // This is always bad :) What happened with prettier here?
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {commonStyles} from '../styles/common-styles';

// You can use destructuring here
export function Card(props) {
  //This is the formula for calculating the discount. Unfortunately,
  //there are no discounts in our data, but I'll leave it for the future.

  // Better to put all calculations in useMemo
  const discount = ` ${((props.data.price - props.data.price) / props.data.price) * 100} %Off`;
  return (
    <View style={styles.card} >
      <View style={styles.cardWrapper}>
        <Image style={styles.cardImg} source={props.icon}/>
        <Text numberOfLines={1} style={styles.cardName}>{props.data.name}</Text>
        <View style={styles.priceString}>
          <Text style={styles.discountPrice}>{props.data.display_price} </Text>
          <Text style={styles.price}>{props.data.display_price}</Text>
          <Text style={styles.discountPercent}> {discount}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
      width: '47%',
      height: 160,
      backgroundColor: 'white',
      marginBottom: 20,
      borderRadius: 5,
      ...commonStyles.shadow,
    },
    cardWrapper: {
      margin: 5,
    },
    cardName: {
      marginTop: 5,
      fontSize: 15,
      color: '#4A4A4A',
    },
    priceString: {
      flexDirection: 'row',
      marginTop: 5,
    },
    discountPrice: {
      color: '#4A4A4A',
      fontWeight: 'bold',
      fontSize: 14,
    },
    price: {
      color: '#8F8F8F',
      fontWeight: 'bold',
      fontSize: 14,
      textDecorationLine: 'line-through',
    },
    discountPercent: {
      color: '#00A8F3',
      fontWeight: 'bold',
      fontSize: 14,
    },
    cardImg: {
      height: 100,
      width: 100,
      alignSelf: 'center',
    },
  });
