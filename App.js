
import { useFonts } from 'expo-font';

import * as React from 'react';
import HomePage from './Screens/home_page';
import ConsumptionPage from './Screens/consumption_page';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


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
      </Stack.Navigator>
    </NavigationContainer>
    
       
    
  );
}
