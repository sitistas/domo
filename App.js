
import { useFonts } from 'expo-font';

import * as React from 'react';
import HomePage from './Screens/home_page';
import ConsumptionPage from './Screens/consumption_page';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function App() {
  
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
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{title: 'Welcome'}}
    //     />
    //     <Stack.Screen name="Profile" component={HomePage} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    
    
    
    
      
      <HomePage/>

      // <ConsumptionPage/>

    
    
  );
}
