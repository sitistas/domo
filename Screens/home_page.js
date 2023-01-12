import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground, TouchableOpacity, onPress, Dimensions } from 'react-native';
import Smallbutton from '../components/smallButton';
import Mediumbutton from '../components/mediumButton';
import Consumptionbutton from '../components/consumptionButton';


class HomePage extends Component {
    render() {
      return(
        <View style = {styles.root}>
        <ImageBackground source = {require('../assets/background.png')} resizeMode="cover" style={styles.imageBackground}>
          <StatusBar style="auto" />
        
          <View style = {styles.appContainer}>
            
            <View style = {styles.logoContainer}>
              <Image source = {require('../assets/Logo.png')} style={styles.logo}/>
            </View>
            <View>
              <Text style = {styles.welcomeText}>Hello Koto</Text>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Consumption')}>
              <Consumptionbutton/>

            </TouchableOpacity>
            

            <View>
              <Text style = {styles.roomText}>Living Room</Text>
            </View>

            <View style = {styles.widgetRow}>
                <Mediumbutton />
                <Smallbutton />
                <Smallbutton />
            </View>
          </View>
        </ImageBackground>
      </View>
      );
    }
  }
  
  export default HomePage;
  
  const styles = StyleSheet.create({
    root: {
        flex: 1
      }, 
      imageBackground: {
        flex: 1,
        justifyContent: "center",
      },
      
      logoContainer: {
        paddingLeft: 17,
        paddingTop: 20,
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
        paddingHorizontal: (Dimensions.get('window').width-360)/2,
        zIndex: 2
      }, 
      welcomeText: {
        paddingTop: 0,
        paddingLeft: 17,
        paddingBottom: 6,
        fontFamily: 'LatoBold',
        fontSize: 15,
        color: '#848487'
      },
      roomText: {
        paddingTop: 30,
        paddingLeft: 17,
        fontFamily: 'LatoBold',
        fontSize: 34,
        color: '#000'
      },
      widgetRow: {
        flex: 1,
        flexDirection: 'row',
      },
    });
  
  