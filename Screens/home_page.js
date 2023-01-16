import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground, TouchableOpacity, onPress, Dimensions } from 'react-native';
import Smallbutton from '../components/smallButton';
import Mediumbutton from '../components/mediumButton';
import Consumptionbutton from '../components/consumptionButton';


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      isLoading: true,
    };
  }

  async getConsData(){
    const result = await fetch('http://129.152.26.72:8123/api/history/period/2023-1-16T15:45:00+02:00?filter_entity_id=sensor.pc_energy&minimal_response', {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI4Y2I1OTk5YTRiZDI0Mjg0OGZmMjFkZmM0NmU1MTY1NSIsImlhdCI6MTY2OTU0ODU3OSwiZXhwIjoxOTg0OTA4NTc5fQ.0Xjp3tXMRBxQzMcpBJfycOt_BKAgmD2darfnJKUg5J4",
        "content-type": "application/json",
    }});
    const resultJson = await result.json();
    return resultJson;
  }
  
  consData = async () => {
    let result = await this.getConsData();
    return result;
  }
  
  async componentDidMount() {
    let result_data = await this.consData();
    this.setState({ result: result_data, isLoading: false });
  }


  
  render() {
    if (this.state.isLoading) {
      return (
        <View style = {styles.logoContainer}>
          <Text>Loading data...</Text>
        </View>
      );
    } else {
      
      console.log(this.state.result[0].at(-1).last_changed);
      console.log(this.state.result[0][0].last_updated);
      console.log(this.state.result[0][0].state);
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Cuboid')}>
                  <Mediumbutton />
                </TouchableOpacity>
                  <Smallbutton />
                  <Smallbutton />
              </View>
              <Text>{this.state.result[0].at(-1).last_changed}</Text>
              <Text>{this.state.result[0].at(-1).state}</Text>
            </View>
          </ImageBackground>
        </View>
        );
      }  
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
        paddingRight: 10
      },
    });
  
  