import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, onPress} from 'react-native';
import Smallbutton from './smallButton';

class MediumbuttonHorizontal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      outlets: {
        xMAC1: '124B0002CC7EF6', 
        state1: false,
        xMAC2: '124B0002CC81B5', 
        state2: false,
        xMAC3: '124B0002CC92BA', 
        state3: false}
    };
  }

  render() {

    var ws = new WebSocket('ws://192.168.2.7:2014');
    ws.onopen = () => {
      console.log('opened');
      var temp;
      
      ws.send('ReportStates')
      
      ws.onmessage = e => {
        
        if (e.data[0] == 'P'){
          temp = JSON.parse(e.data.slice(10,e.data.length));
          

          if (temp.xMAC == this.state.outlets.xMAC1){
            this.state.outlets.state1 = temp.IsOn;
            //this.state.isLoading = false;
            //var result = temp.IsOn;
            console.log(temp.xMAC, this.state.outlets.state1);
            
          }
          if (temp.xMAC == this.state.outlets.xMAC2){
            this.state.outlets.state2 = temp.IsOn;
            //this.state.isLoading = false;
            //var result = temp.IsOn;
            console.log(temp.xMAC, this.state.outlets.state2);
            
          }
          
        }
      };         
    } 
    
    ws.onclose = e => {
      // connection closed
      //console.log(e.code, e.reason);
    };


    return(
        <View style = {styles.widgetSpacing}>

          <View style={styles.widgetRow}>

            <View style={styles.mediumWidgetContainer}>
              <View style={styles.mediumWidgetSubContainer}>
                <Text style={styles.mediumText1}>{'1.'}</Text>
                <Text style={styles.mediumText2}>{'Last session'}</Text>
                <Text style={styles.mediumText3}>{'140 Wh ~ 0.1€'}</Text>
              </View>
              <View style = {styles.smallWidget}>
              <Smallbutton MACadd = {global.outlets.xMAC1} InState = {global.outlets.state1}/>
              </View>
            </View>

            <View style={styles.mediumWidgetContainer}>
              <View style={styles.mediumWidgetSubContainer}>
                <Text style={styles.mediumText1}>{'2.'}</Text>
                <Text style={styles.mediumText2}>{'Last session'}</Text>
                <Text style={styles.mediumText3}>{'800 Wh ~ 0.5€'}</Text>
              </View>
              <View style = {styles.smallWidget}>
              <Smallbutton MACadd = {global.outlets.xMAC2} InState = {global.outlets.state2}/>
              </View>
            </View>

          </View>

        </View>
    );
  }
}

export default MediumbuttonHorizontal;

const styles = StyleSheet.create({
    mediumWidgetContainer: {
        flexDirection: 'row',
        backgroundColor: "#DDE29B",
        borderRadius: 20,
        width: 158,
        height: 68,
        marginRight: 22
      },
      mediumWidgetSubContainer: {
        flex: 1,
        alignSelf: "center",
        flexDirection: 'collumn',
        paddingLeft: 10
      },
      widgetSpacing: {
        padding: 11, 
      },
      widgetRow: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 10
      },
      mediumText1:{
        fontSize: 12,
        color: "#000",
        fontFamily: 'LatoBold'
      },
      mediumText2: {
        fontSize: 12,
        color: "#000",
        fontFamily: 'LatoRegular'
      },
      mediumText3: {
        paddingBottom: 10,
        fontSize: 12,
        color: "#9AA049",
        fontFamily: 'LatoRegular'
      },
      smallWidget:{
        margin: -11
      }
      
  });

