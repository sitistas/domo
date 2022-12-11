import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground, TouchableOpacity, onPress, Dimensions } from 'react-native';

export default function App() {
  
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  

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
    <View style = {styles.root}>
      <ImageBackground source = {require('./assets/background.png')} resizeMode="cover" style={styles.imageBackground}>
        <StatusBar style="auto" />
      
        <View style = {styles.appContainer}>
          
          <View style = {styles.logoContainer}>
            <Image source = {require('./assets/Logo.png')} style={styles.logo}/>
          </View>
          <View>
            <Text style = {styles.welcomeText}>Hello Koto</Text>
          </View>
          <TouchableOpacity onPress={onPress} style={styles.consumptionContainer}>
            <View style={styles.consumptionSubContainer}>
              
            </View>
            <View style={styles.consumptionSubContainer}>
              <Text style={styles.consumptionButtonText1}>{'Electricity consumed'}</Text>
              <Text style={styles.consumptionButtonText2}>{'100 kWh'}</Text>
              <Text style={styles.consumptionButtonText1}>{'Electricity bill'}</Text>
              <Text style={styles.consumptionButtonText2}>{'20€'}</Text>
            </View>
            
          </TouchableOpacity>
          <View>
            <Text style = {styles.roomText}>Living Room</Text>
          </View>
          <View style = {styles.widgetRow}>
              <View style = {styles.widgetSpacing}>
                <TouchableOpacity onPress={onPress} style={styles.mediumWidgetContainer}>
                  <View style={styles.mediumWidget}>
                    <Image source = {require('./assets/DOMOCuboidSmall.png')} style={styles.mediumWidgetImage}/>
                  </View>
                </TouchableOpacity>
              </View>
              <View style = {styles.widgetSpacing}>
                <TouchableOpacity onPress={onPress} style={styles.smallWidgetContainer}>
                  <View style={styles.smallmWidget}>
                    <Image source = {require('./assets/OutletImage.png')} style={styles.smallWidgetImage}/>
                  </View>
                </TouchableOpacity>
              </View>
              <View style = {styles.widgetSpacing}>
                <TouchableOpacity onPress={onPress} style={styles.smallWidgetContainer}>
                  <View style={styles.smallmWidget}>
                    <Image source = {require('./assets/OutletImage.png')} style={styles.smallWidgetImage}/>
                  </View>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }, 
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
  
  logoContainer: {
    paddingLeft: 6,
    paddingTop: 10,
    paddingBottom: 11,
    zIndex: 3
  },
  logo: {
    width: 150,
    height: 35,
  },
  appContainer: {
    flex: 1,
    paddingTop: 30, 
    paddingHorizontal: (Dimensions.get('window').width-338)/2,
    zIndex: 2
  }, 
  welcomeText: {
    paddingTop: 0,
    paddingLeft: 6,
    paddingBottom: 28,
    fontFamily: 'LatoBold',
    fontSize: 15,
    color: '#848487'
  },
  consumptionContainer: {
    flexDirection: 'row',
    backgroundColor: "#EAEAB9",
    borderRadius: 20,
    width: 338,
    height: 158, 
    alignSelf: 'center'
  },
  consumptionSubContainer: {
    flex: 1,
    flexDirection: 'collumn'
  },
  consumptionButtonText1: {
    paddingTop: 19,
    fontSize: 15,
    color: "#000",
    fontFamily: 'LatoBold'
    
  },
  consumptionButtonText2: {
    fontSize: 15,
    color: "#9AA049",
    fontFamily: 'LatoBold'
    
  },
  roomText: {
    paddingTop: 30,
    paddingLeft: 6,
    paddingBottom: 11,
    fontFamily: 'LatoBold',
    fontSize: 34,
    color: '#000'
  },
  widgetRow: {
    flex: 1,
    flexDirection: 'row',
  },
  mediumWidgetContainer: {
    flexDirection: 'collumn',
    backgroundColor: "#C6C67A",
    borderRadius: 20,
    width: 68,
    height: 158,
  },
  widgetSpacing: {
    paddingRight: 22
  },
  mediumWidget: {
    flex: 1,
    flexDirection: 'collumn'
  },
  mediumWidgetImage: {
    width: 68,
    height: 110,
  },
  smallWidgetContainer: {
    backgroundColor: "#C6C67A",
    borderRadius: 20,
    width: 68,
    height: 68,
  },
  widgetSpacing: {
    paddingRight: 22
  },
  smallmWidget: {
    flex: 1,
    flexDirection: 'collumn', 
    justifyContent: 'center',
    alignSelf: 'center'
  },
  smallWidgetImage: {
    width: 40,
    height: 40,
    
  },
});
