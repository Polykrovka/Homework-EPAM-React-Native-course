import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainScreen} from '../pages/Main-screen';
import {RegisteredCart} from '../components/Registered-cart';
import {UnregisteredCart} from '../components/Unregistered-cart';
import IconBasket from '../images/icons/Icon-Basket.svg';
import {ButtonSVG} from '../components/Button-svg';
import {useNavigation} from '@react-navigation/native';

const RootDrawer = createDrawerNavigator();

const DrawerNavigator = () => {
  // User registration has not yet been implemented
  let registered = true;
  const navigation = useNavigation();
  return (
    <RootDrawer.Navigator initialRouteName="MainScreen">
      <RootDrawer.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: 'Ecommerce Store',
          headerRight: () => (
            <ButtonSVG
              icon={IconBasket}
              touch={() => navigation.navigate('RegisteredCart')}
            />
          ),
          ...HeaderStyles,
        }}
      />
      {registered ? (
        <RootDrawer.Screen
          name="RegisteredCart"
          options={{headerShown: false}}
          component={RegisteredCart}
        />
      ) : (
        <RootDrawer.Screen
          options={{headerShown: false}}
          name="UnregisteredCart"
          component={UnregisteredCart}
        />
      )}
    </RootDrawer.Navigator>
  );
};

const HeaderStyles = {
  headerStyle: {
    backgroundColor: '#008ACE',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '500',
  },
  headerRightContainerStyle: {
    paddingRight: 16,
  },
  headerTitleAlign: 'center',
};

export default DrawerNavigator;
