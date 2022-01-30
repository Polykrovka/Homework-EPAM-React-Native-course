import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Product} from './src/pages/Product';
import {ProductAdded} from './src/modal/Product-added';
import {ChooseColor} from './src/modal/Choose-color';
import {LoginToContinue} from './src/modal/Login-to-continue';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './src/actions/RootDrowerNavigator';
import {Login} from './src/pages/Login';

const MainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Group>
          <MainStack.Screen
            name="MainDrawer"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
        </MainStack.Group>

        <MainStack.Group screenOptions={{headerShown: false}}>
          <MainStack.Screen name="Product" component={Product} />
          <MainStack.Screen name="Login" component={Login} />
        </MainStack.Group>

        <MainStack.Group screenOptions={{presentation: 'modal'}}>
          <MainStack.Screen name="Product-added" component={ProductAdded} />
          <MainStack.Screen name="Select-color" component={ChooseColor} />
          <MainStack.Screen
            name="Login-to-continue"
            component={LoginToContinue}
          />
        </MainStack.Group>
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
