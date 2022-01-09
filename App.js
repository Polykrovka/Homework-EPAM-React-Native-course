import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './src/pages/Main-screen';
import {Product} from './src/pages/Product';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProductAdded} from './src/modal/Product-added';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
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
        </Drawer.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Product-added" component={ProductAdded} />
        </Stack.Group>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
