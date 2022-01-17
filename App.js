import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './src/pages/Main-screen';
import {Product} from './src/pages/Product';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProductAdded} from './src/modal/Product-added';
import {ChooseColor} from './src/modal/Choose-color';
import {LoginToContinue} from './src/modal/Login-to-continue';
import {RegisteredCart} from './src/components/Registered-cart';
import {UnregisteredCart} from './src/components/Unregistered-cart';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  // User registration has not yet been implemented
  let registered = true;
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Group>
          <Drawer.Screen name="MainScreen" component={MainScreen} />
          <Drawer.Screen name="Product" component={Product} />
          {registered ? (
            <Drawer.Screen name="RegisteredCart" component={RegisteredCart} />
          ) : (
            <Drawer.Screen
              name="UnregisteredCart"
              component={UnregisteredCart}
            />
          )}
        </Drawer.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Product-added" component={ProductAdded} />
          <Stack.Screen name="Select-color" component={ChooseColor} />
          <Stack.Screen name="Login-to-continue" component={LoginToContinue} />
        </Stack.Group>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
