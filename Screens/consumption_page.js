import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground, TouchableOpacity, onPress, Dimensions, ScrollView } from 'react-native';
import Consumptionbutton from '../components/consumptionButton';
import Consumptiongraph from '../components/consumptiongraph';
import Consumptionsmall from '../components/consumptionsmall';

class ConsumptionPage extends Component {
    render() {

      var today = new Date().toDateString();
      return(
        <View style = {styles.root}>
        <ImageBackground source = {require('../assets/background.png')} resizeMode="cover" style={styles.imageBackground}>
          <StatusBar style="auto" />
        
          <View style = {styles.appContainer}>
            
            <View>
              <Text style = {styles.roomText}>Consumption</Text>
            </View>
            
            <View>
              <Text style = {styles.welcomeText}>{today}</Text>
            </View>
            <ScrollView>
              <Consumptionsmall/>
              <Consumptionbutton/>
              <Consumptiongraph/>
              
              <View style = {styles.scrollviewbottom}></View>
              {/* <Button
                    title="Test"
                    onPress={() => this.props.navigation.navigate('DOMO')}
              /> */}
            </ScrollView>
            

          </View>
        </ImageBackground>
      </View>
      );
    }
  }
  
  export default ConsumptionPage;
  
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
        paddingTop: 15,
        paddingLeft: 17,
        fontFamily: 'LatoBold',
        fontSize: 34,
        color: '#000'
      },
      widgetRow: {
        flex: 1,
        flexDirection: 'row',
      },
      scrollviewbottom: {
        paddingBottom: 20,
      },
      
    });
  
  