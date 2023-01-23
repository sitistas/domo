import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground, TouchableOpacity, onPress, Dimensions, ScrollView } from 'react-native';
import Cuboidbig from '../components/cuboidbig';
import MediumbuttonHorizontal from '../components/mediumButtonHorizontal';
import Consumptiongraph from '../components/consumptiongraph';

class CuboidPage extends Component{
  
  

  render()
  {
    var wattconscub1 = (global.TodayConsumption[0].at(-1).state - global.TodayConsumption[0][0].state);
    var wattconscub2 = (global.TodayConsumption[1].at(-1).state - global.TodayConsumption[1][0].state);
    var twattcons= wattconscub1+wattconscub2;
    var tgval= wattconscub1*global.price + wattconscub2*global.price;
    
    
    
    return(
        <View style = {styles.root}>
        <ImageBackground source = {require('../assets/background.png')} resizeMode="cover" style={styles.imageBackground}>
        <StatusBar style="auto" />
        
        <View style = {styles.appContainer}>
            
            <ScrollView>
                <Cuboidbig TCons={twattcons} TVal={tgval} MACadd = {global.outlets.xMAC4} InState = {global.outlets.state4}/>
                <MediumbuttonHorizontal Consume1= {wattconscub1} Val1={wattconscub1*global.price} Consume2= {wattconscub2} Val2={wattconscub2*global.price} />
                <View>
                    <Text style = {styles.roomText}>Device Consumption</Text>
                </View>
                <Consumptiongraph Consumption = {global.TodayConsumption.slice(0,1)} ConsValue = {twattcons}/>
                <View style = {styles.bottomgap}></View>
            </ScrollView>
            
        </View>
        </ImageBackground>
    </View>
    );
  }
}

export default CuboidPage;

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
     
      widgetRow: {
        flex: 1,
        flexDirection: 'row',
      },
      scrollviewbottom: {
        paddingBottom: 20,
      },
      mediumWidget: {
        flex: 1,
        flexDirection: 'row',
        background: "#DDE29B",
        borderRadius: 20,
        width: 68,
        height: 158
      },
      roomText: {
        paddingTop: 30,
        fontFamily: 'LatoBold',
        fontSize: 34,
        color: '#000',
        alignSelf:"center"
      },
      bottomgap: {
        paddingBottom: 20
      }
      
    });