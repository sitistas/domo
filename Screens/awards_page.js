import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground, TouchableOpacity, onPress, Dimensions } from 'react-native';


class AwardsPage extends Component{
    render() {

        return(
            <View style = {styles.root}>
            <ImageBackground source = {require('../assets/background.png')} resizeMode="cover" style={styles.imageBackground}>
            




            </ImageBackground>
            </View>
        );
    
    }
}

export default AwardsPage;


const styles= StyleSheet.create({
    root: {
        flex: 1
      }, 
      imageBackground: {
        flex: 1,
        justifyContent: "center",
      },






});