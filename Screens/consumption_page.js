import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground, TouchableOpacity, onPress, Dimensions, ScrollView } from 'react-native';
import Consumptionbutton from '../components/consumptionButton';
import Consumptiongraph from '../components/consumptiongraph';
import Consumptionsmall from '../components/consumptionsmall';
import AwardsWidget from '../components/AwardsWidget';

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
              <View style = {styles.widgetRow}>
                <Consumptionsmall MonthlyCost = {global.montlycost.toFixed(2)} Cost = {global.cost.toFixed(2)}/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Awards')}>
                  <AwardsWidget/>
                </TouchableOpacity>
                
              </View>
              <Consumptionbutton ConsValue = {global.wattcons} ConsCost = {global.cost.toFixed(2)}/>
              <Consumptiongraph Consumption = {global.TodayConsumption}/>
              <View style = {styles.bottomgap}></View>
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
      bottomgap: {
        paddingBottom: 20
      }
      
    });
  
  