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
      resultMonth: [],
      isLoadingMonth: true,
      outlets: {
        xMAC1: '124B0002CC7EF6', 
        state1: false,
        xMAC2: '124B0002CC81B5', 
        state2: false,
        xMAC3: '124B0002CC92BA', 
        state3: false,
        xMAC4: '124B00040A82B8', 
        state4: false},
      // date: new Date()
    };
  
  }
  



  // componentWillUnmount() {
  //     clearInterval(this.timerID);
  //     //this.willFocusSubscription();
  //   }
    
  //   tick() {
  //     this.setState({
  //       date: new Date()
  //     });
  //   }

  async getConsData(){
    const result = await fetch('http://204.216.218.14:8123/api/history/period/' + new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + 'T00:00:00+02:00?filter_entity_id=sensor.pc_energy,sensor.cuboid_1_energy,sensor.3rd_energy&minimal_response&no_attributes', {
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
  
  // async componentDidMount() {
  //   let result_data = await this.consData();
  //   this.setState({ result: result_data, isLoading: false });
  // }

  
  async getConsDataMonth(){
    const resultMonth = await fetch('http://204.216.218.14:8123/api/history/period/' + new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-01T00:00:00+02:00?end_time=' + new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + 'T23%3A59%3A59%2B02%3A00&filter_entity_id=sensor.pc_energy,sensor.cuboid_1_energy,sensor.3rd_energy&minimal_response&no_attributes', {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI4Y2I1OTk5YTRiZDI0Mjg0OGZmMjFkZmM0NmU1MTY1NSIsImlhdCI6MTY2OTU0ODU3OSwiZXhwIjoxOTg0OTA4NTc5fQ.0Xjp3tXMRBxQzMcpBJfycOt_BKAgmD2darfnJKUg5J4",
        "content-type": "application/json",
    }});
    const resultJsonMonth = await resultMonth.json();
    console.log('http://204.216.218.14:8123/api/history/period/' + new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + 'T00:00:00+02:00?filter_entity_id=sensor.pc_energy,sensor.cuboid_1_energy,sensor.3rd_energy&minimal_response&no_attributes');
    return resultJsonMonth;
  }
  
  consDataMonth = async () => {
    let resultMonth = await this.getConsDataMonth();
    return resultMonth;
  }
  
 

  async componentDidMount() {
    let result_data = await this.consData();
    let result_dataMonth = await this.consDataMonth();
    this.setState({ result: result_data, isLoading: false, resultMonth: result_dataMonth, isLoadingMonth: false });
    // this.timerID = setInterval(
    //   () => this.tick(),
    //   5000
    // );

    // this.props.fetchData();
    // this.willFocusSubscription = this.props.navigation.addListener(
    //   'Cuboid',
    //   () => {
    //     this.props.fetchData();
    //   }
    // );
  }

  

  
  
  
  render() {
    
    // var outlet1 = {
    //   xMAC1: '124B0002CC7EF6', 
    //   state1: false
    // }
    // var outlet2 = {
    //   xMAC2: '124B0002CC81B5', 
    //   state2: false
    // }
    // var outlet3 = {
    //   xMAC3: '124B0002CC92BA', 
    //   state3: false
    // }
    
    
    var ws = new WebSocket('ws://192.168.2.7:2014');
    ws.onopen = () => {
      console.log('opened');
      var temp;
      
      ws.send('ReportStates')
      
      ws.onmessage = e => {
        
        if (e.data[0] == 'P'){
          temp = JSON.parse(e.data.slice(10,e.data.length));
          

          if (temp.xMAC == this.state.outlets.xMAC1){
            if (temp.lastSeen == 0){this.state.outlets.state1 = temp.IsOn;}
            else {this.state.outlets.state1 = false}
            //this.state.isLoading = false;
            //var result = temp.IsOn;
            console.log(temp.xMAC, this.state.outlets.state1);
            
          }
          if (temp.xMAC == this.state.outlets.xMAC2){
            if (temp.lastSeen == 0){this.state.outlets.state2 = temp.IsOn;}
            else {this.state.outlets.state2 = false}
            //this.state.isLoading = false;
            //var result = temp.IsOn;
            console.log(temp.xMAC, this.state.outlets.state2);
            
          }
          if (temp.xMAC == this.state.outlets.xMAC3){
            this.state.outlets.state3 = temp.IsOn;
            //this.state.isLoading = false;
            //var result = temp.IsOn;
            console.log(temp.xMAC, this.state.outlets.state3);
            
          }
          if (temp.xMAC == this.state.outlets.xMAC4){
            this.state.outlets.state4 = temp.IsOn;
            //this.state.isLoading = false;
            //var result = temp.IsOn;
            console.log(temp.xMAC, this.state.outlets.state4);
            
          }
        }
      };         
    } 
    
    ws.onclose = e => {
      // connection closed
      //console.log(e.code, e.reason);
    };
    
    


    
    
    
    if (this.state.isLoading || this.state.isLoadingMonth) {
      return (
        <View style = {styles.logoContainer}>
          <Text>Loading data...</Text>
        </View>
      );
    } else {
      //console.log(this.state.result[2]);
      //calculate today's consumption
      

      var wattcons = (this.state.result[0].at(-1).state - this.state.result[0][0].state) + (this.state.result[1].at(-1).state - this.state.result[1][1].state) + (this.state.result[2].at(-1).state - this.state.result[2][1].state) ;
      // var wattcons = 0;
      // var i;
      // for(i = 1; i < this.state.result[0].length; i++){
      //   var minutes = new Date(this.state.result[0][i].last_changed).getMinutes() - new Date(this.state.result[0][i-1].last_changed).getMinutes();
      //   if (minutes <= 0) {minutes = 1;}
      //   var temp = parseFloat(this.state.result[0][i].state);
      //   if (!temp){temp = 0;}
      //   var w = temp / (minutes*60);
      //   wattcons = wattcons + parseFloat(w.toFixed(2));
      //   //console.log(w.toFixed(2));
      // }
      //wattcons = wattcons/1000;
      //console.log(wattcons)
      // var wattconsMonth = 0;
      // var i;
      // for(i = 1; i < this.state.resultMonth[0].length; i++){
      //   var minutes = new Date(this.state.resultMonth[0][i].last_changed).getMinutes() - new Date(this.state.resultMonth[0][i-1].last_changed).getMinutes();
      //   if (minutes <= 0) {minutes = 1;}
      //   var temp = parseFloat(this.state.resultMonth[0][i].state);
      //   if (!temp){temp = 0;}
      //   var w = temp / (minutes*60);
      //   wattconsMonth = wattconsMonth + parseFloat(w.toFixed(2));
      //   // console.log(i)
      //   // console.log(parseFloat(this.state.resultMonth[0][i].state))
      //   // console.log(w)
      //   // console.log(wattconsMonth);
      // }
      
      var wattconsMonth = (this.state.resultMonth[0].at(-1).state - this.state.resultMonth[0][1].state) + (this.state.resultMonth[1].at(-1).state - this.state.resultMonth[1][1].state) + (this.state.resultMonth[2].at(-1).state - this.state.resultMonth[2][1].state) ;

      //Global variables
      global.price = 0.132
      global.cost = wattcons*global.price;
      global.montlycost = wattconsMonth*global.price
      global.wattcons = wattcons;
      global.wattconsMonth = wattconsMonth;
      global.TodayConsumption = this.state.result;
      global.limit = 2;
      global.outlets = this.state.outlets;
      
      //Console log

      //console.log(wattconsMonth);
      // const daysBetween = new Date(this.state.result[0].at(-1).last_changed).getMinutes() - new Date(this.state.result[0].at(-2).last_changed).getMinutes()
      // console.log('Diafora ' + daysBetween);
      // console.log(new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate());
      // console.log(global.TodayConsumption);
      // console.log(this.state.result[0].length);
      //console.log(global.outlets);
      // console.log(this.state.result[0][this.state.result[0].length-1]);
      // console.log(this.state.result[0].at(-1).last_changed);
      // console.log(this.state.result[0].at(-1).state);
      // console.log(wattcons);
      // console.log(global.cost.toFixed(2));

      

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
                <Consumptionbutton ConsValue = {global.wattcons.toFixed(2)} ConsValueMonth = {global.wattconsMonth.toFixed(2)} ConsCost = {global.montlycost.toFixed(2)} limit = {global.limit}/>
              </TouchableOpacity>
              <View>
                <Text style = {styles.roomText}>Living Room</Text>
              </View>
              <View style = {styles.widgetRow}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Cuboid')}>
                  <Mediumbutton MACadd = {this.state.outlets.xMAC4} InState = {this.state.outlets.state4}/>
                </TouchableOpacity>
                  <Smallbutton MACadd = {this.state.outlets.xMAC1} InState = {this.state.outlets.state1} />
                  <Smallbutton MACadd = {this.state.outlets.xMAC2} InState = {this.state.outlets.state2} />
                  <Smallbutton MACadd = {this.state.outlets.xMAC3} InState = {this.state.outlets.state3} />
                  
              </View>
              {/* <Smallbutton MACadd = {this.state.outlets.xMAC4} InState = {this.state.outlets.state4} Date = {this.state.date.toLocaleTimeString()}/> */}
              
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
  
  