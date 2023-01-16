
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

  // const [data, setData] = useState([]);
  //     //console.log(data);

  //     useEffect(() => {
  //       fetch('http://129.152.26.72:8123/api/history/period/2023-1-14T00:20:00+02:00?filter_entity_id=sensor.pc_energy&minimal_response', {
  //         headers: {
  //           "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI4Y2I1OTk5YTRiZDI0Mjg0OGZmMjFkZmM0NmU1MTY1NSIsImlhdCI6MTY2OTU0ODU3OSwiZXhwIjoxOTg0OTA4NTc5fQ.0Xjp3tXMRBxQzMcpBJfycOt_BKAgmD2darfnJKUg5J4",
  //           "content-type": "application/json",
  //       }})
  //         .then((response) => response.json())
  //         .then((json) => setData(json))
  //         .catch((error) => console.error(error))
  //         .finally(() => setLoading(false));
  //     }, []);

  //     var test = data[0]
  //     var test1 = data[0]
  //     console.log(typeof(test));
  //     //console.log(test1);

  
  if (!loaded) {
    return null;
  }  
  
  return (
    
    // <View> 
    //   {/* <Text style = {{padding: 40}}>{test}</Text>
    //   <Text style = {{padding: 40}}>{test1}</Text> */}
      
    //   {/* <FlatList
    //   data={data}
    //   keyExtractor={({ id }, entity_id) => id}
    //   renderItem={({ item }) => (
    //     <Text>{item.id + '. ' + item.id}</Text>
    //   )}
    //   />  */}
    // </View> 
    
    
    
    
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


