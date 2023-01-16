
import { useFonts } from 'expo-font';

import * as React from 'react';
import { useEffect, useState } from 'react';
import HomePage from './Screens/home_page';
import ConsumptionPage from './Screens/consumption_page';
import CuboidPage from './Screens/cuboid_page';
import AwardsPage from './Screens/awards_page';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { FlatList, Text, View, Button, TextInput, Image, ImageBackground, TouchableOpacity, onPress, Dimensions, ScrollView } from 'react-native';

export default function App() {
  const Stack = createStackNavigator();
  const [loaded] = useFonts({
    LatoThin: require('./assets/fonts/Lato-Thin.ttf'),
    LatoLight: require('./assets/fonts/Lato-Light.ttf'),
    LatoRegular: require('./assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('./assets/fonts/Lato-Bold.ttf'),
    LatoBlack: require('./assets/fonts/Lato-Black.ttf'),
  });

 

  
  if (!loaded) {
    return null;
  }  
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="DOMO" component={HomePage} />
        <Stack.Screen name="Consumption" component={ConsumptionPage} />
        <Stack.Screen name="Cuboid" component={CuboidPage}/>
        <Stack.Screen name="Awards" component={AwardsPage}/>
      </Stack.Navigator>
    </NavigationContainer>
    
       
    
  );
}


