import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground, TouchableOpacity, onPress, Dimensions } from 'react-native';
import Smallbutton from '../components/smallButton';
import Mediumbutton from '../components/mediumButton';
import Consumptionbutton from '../components/consumptionButton';


class HomePage extends Component {
   
  //communicate with server
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      isLoading: true,
    };
  }

  async getConsData(){
    const result = await fetch('http://129.152.26.72:8123/api/history/period/' + new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + 'T00:00:00+02:00?filter_entity_id=sensor.pc_energy&minimal_response', {
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
      //calculate today's consumption
      var wattcons = 0;
      var i;
      for(i = 1; i < this.state.result[0].length; i++){
        var minutes = new Date(this.state.result[0][i].last_changed).getMinutes() - new Date(this.state.result[0][i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        wattcons = wattcons + parseFloat(this.state.result[0][i].state) / (minutes*60);
        console.log(wattcons);
      }
      wattcons = wattcons/1000;
      
      //Global variables
      global.price = 0.132
      global.cost = wattcons*global.price;
      global.montlycost = wattcons*global.price
      global.wattcons = wattcons.toFixed(2);
      global.TodayConsumption = this.state.result[0];
      
      //Console log
      const daysBetween = new Date(this.state.result[0].at(-1).last_changed).getMinutes() - new Date(this.state.result[0].at(-2).last_changed).getMinutes()
      console.log('Diafora ' + daysBetween);
      console.log(new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate());
      console.log(global.TodayConsumption);
      console.log(this.state.result[0].length);
      console.log(this.state.result[0][this.state.result[0].length-1]);
      console.log(this.state.result[0].at(-1).last_changed);
      console.log(this.state.result[0].at(-1).state);
      console.log(wattcons);
      console.log(global.cost.toFixed(2));

      

      //Main 
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
                <Consumptionbutton ConsValue = {global.wattcons} ConsCost = {global.cost.toFixed(2)}/>
              </TouchableOpacity>
              <View>
                <Text style = {styles.roomText}>Living Room</Text>
              </View>
              <View style = {styles.widgetRow}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Cuboid')}>
                  <Mediumbutton />
                </TouchableOpacity>
                  <Smallbutton MACadd = '00'/>
                  <Smallbutton MACadd = '124B00040A82B8'/>
              </View>
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
  
  