import { StatusBar } from 'expo-status-bar';
import React, {Component} from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground, TouchableOpacity, onPress, Dimensions, ScrollView } from 'react-native';
import Awardbig from '../components/awardbig';

class AwardsPage extends Component {
    
  
  render() {

      var today = new Date().toDateString();
      return(
        <View style = {styles.root}>
        <ImageBackground source = {require('../assets/background.png')} resizeMode="cover" style={styles.imageBackground}>
          <StatusBar style="auto" />
        
          <View style = {styles.appContainer}>
            
            <View>
              <Text style = {styles.roomText}>Awards</Text>
            </View>

            <View>
              <Text style = {styles.welcomeText}>{today}</Text>
            </View>

            <ScrollView>
              <Awardbig Award = {global.wattcons}/>
            </ScrollView>
           

          </View>
        </ImageBackground>
      </View>
      );
    }
  }
  
  export default AwardsPage;
  
  const styles = StyleSheet.create({
    root: {
        flex: 1
      }, 
      imageBackground: {
        flex: 1,
        justifyContent: "center",
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
    
      
    });
  
  