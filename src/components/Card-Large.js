import React from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import IconNextL from '../images/icons/next-l.svg';
import IconNextR from '../images/icons/next-r.svg';
import {ButtonSVG} from './Button-svg';
import IconBar from '../images/icons/Icon-bar.svg';
import {commonStyles} from '../styles/common-styles';

export function CardLarge(props) {
  return (
    <View style={styles.card}>
      <View style={styles.carousel}>
        <ButtonSVG icon={IconNextL} />
        <Image
          style={styles.cardImg}
          source={require('../images/mobiles/card-1-large.png')}
        />
        <ButtonSVG icon={IconNextR} />
      </View>
      <IconBar style={styles.IconBar} />
      <Text style={styles.cardName}>{props.data.name}</Text>
      <View style={styles.priceString}>
        <Text style={styles.discountPrice}>${props.data.discountPrice} </Text>
        {Boolean(props.data.price) && (
          <Text style={styles.price}>${props.data.price}</Text>
        )}
        {Boolean(props.data.discountPercent) && (
          <Text style={styles.discountPercent}>
            {' '}
            {props.data.discountPercent}% Off
          </Text>
        )}
      </View>
      <Text style={styles.selectStore}>Select Color</Text>
      <Pressable style={styles.chose}>
        <Text style={styles.choseText}>Blue</Text>
      </Pressable>
      <View style={styles.line} />
      <Text style={styles.selectStore}>Description</Text>
      <Text style={styles.description}>
        The phone features a 6.088 inch HD+ (1560 x 720 pixel) resolution,
        283ppi Super AMOLED display, a glass and plastic body, with Corning
        Gorilla Glass 5 protection on its front as well as its back. It is
        powered by a Qualcomm Snapdragon 665 SoC. It also has a 2.0, Type-C 1.0
        reversible connector.
      </Text>
      <Pressable style={styles.buttonAdd}>
        <Text style={styles.buttonText}>ADD TO CART</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
  },
  buttonAdd: {
    backgroundColor: '#008ACE',
    width: '100%',
    height: 40,
    borderRadius: 4,
    ...commonStyles.shadow,
    bottom: 10,
  },
  description: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: '#4A4A4A',
    marginBottom: 50,
  },
  line: {
    paddingBottom: 25,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  choseText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 4,
  },
  chose: {
    backgroundColor: '#F7F7F7',
    height: 30,
    width: 50,
    marginTop: 10,
  },
  IconBar: {
    alignSelf: 'center',
    marginVertical: 30,
  },
  selectStore: {
    color: '#4A4A4A',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Roboto',
    marginTop: 20,
  },
  carousel: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: 10,
  },
  cardName: {
    marginTop: 5,
    fontSize: 15,
  },
  priceString: {
    flexDirection: 'row',
    marginTop: 5,
    paddingBottom: 25,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
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
    height: 250,
    maxWidth: 250,
  },
});
