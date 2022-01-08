import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './src/pages/Main-screen';
import {Product} from './src/pages/Product';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
    //============================
    // <ScrollView
    //   style={styles.main}
    //   contentContainerStyle={styles.contentContainerStyle}>
    //   <NavBarDetails />
    //   <View style={styles.cardsWrapper}>
    //     <CardLarge data={mockCards[0]} />
    //   </View>
    // </ScrollView>
  );
};

export default App;
