/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {commonStyles} from '../styles/common-styles';

export function Card(props) {

  return (
    <View style={styles.card} >
      <View style={styles.cardWrapper}>
        <Image style={styles.cardImg} source={props.data.img}/>
        <Text style={styles.cardName}>{props.data.name}</Text>
        <View style={styles.priceString}>
          <Text style={styles.discountPrice}>${props.data.discountPrice}   </Text>
          {props.data.price && <Text style={styles.price}>${props.data.price}</Text>}
          {props.data.discountPercent && <Text style={styles.discountPercent}>   {props.data.discountPercent}% Off</Text>}
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
    },
    priceString: {
      flexDirection: 'row',
      marginTop: 5,
    },
    discountPrice: {
      color: '#4A4A4A',
      fontWeight: 'bold',
      fontSize: 15,
    },
    price: {
      color: '#8F8F8F',
      fontWeight: 'bold',
      fontSize: 15,
      textDecorationLine: 'line-through',
    },
    discountPercent: {
      color: '#00A8F3',
      fontWeight: 'bold',
      fontSize: 15,
    },
    cardImg: {
      height: 100,
      width: 100,
      alignSelf: 'center',
    },
  });
