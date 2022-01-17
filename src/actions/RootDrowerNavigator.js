import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainScreen} from '../pages/Main-screen';
import {RegisteredCart} from '../components/Registered-cart';
import {UnregisteredCart} from '../components/Unregistered-cart';

const RootDrawer = createDrawerNavigator();

const DrawerNavigator = () => {
  // User registration has not yet been implemented
  let registered = true;
  return (
    <RootDrawer.Navigator initialRouteName="MainScreen">
      <RootDrawer.Screen name="MainScreen" component={MainScreen} />
      {registered ? (
        <RootDrawer.Screen name="RegisteredCart" component={RegisteredCart} />
      ) : (
        <RootDrawer.Screen
          name="UnregisteredCart"
          component={UnregisteredCart}
        />
      )}
    </RootDrawer.Navigator>
  );
};
export default DrawerNavigator;
