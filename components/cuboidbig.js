import React, { Component } from 'react';
import { StyleSheet, Text,Image, View, TouchableOpacity, onPress} from 'react-native';

class Cuboidbig extends Component {
  state = {outletSwitch: this.props.InState};
  render() {
  
    var tcons= this.props.TCons;
    var tval= this.props.TVal;
    var ws = new WebSocket('ws://192.168.2.7:2014');
    ws.onopen = () => {
      console.log('opened');
      
      
        if (this.state.outletSwitch)
        {
          ws.send('TurnOn {"xMAC":"' + this.props.MACadd + '","Number":10}');
        }
        else
        {
          ws.send('TurnOff {"xMAC":"' + this.props.MACadd + '","Number":10}');
        }
      
      
        
    } 

    ws.onclose = e => {
      // connection closed
      //console.log(e.code, e.reason);
    };

    return(
    <View style = {styles.widgetspacing}>
        <View style={styles.cuboidContainer}>
            <View style={styles.cuboidSubContainer}>
                <Text style={styles.cuboidbigTitle}>{'DOMO Cuboid'}</Text>
                <Text style={styles.cuboidbigText1}>{"Today's Consumption"}</Text>
                <Text style={styles.cuboidbigText2}>{tcons.toFixed(2)} kWh ~ {tval.toFixed(4)} €</Text>
                <TouchableOpacity onPress={() => {this.setState({outletSwitch: !this.state.outletSwitch})}}>
                    <View>
                        <Image source = {this.state.outletSwitch ? require('./componentsAssets/ON_OFF_Green_Pressed.png') : require('./componentsAssets/ON_OFF_Green.png')} style={styles.WidgetSwitch}/>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Image source = {require('./componentsAssets/DOMOCuboidSmall.png')} style={styles.bigWidgetImage}/>
            </View>
        </View>
    </View>
        
    );
  }
}

export default Cuboidbig;

const styles = StyleSheet.create({
    cuboidContainer: {
        flexDirection: 'row',
        backgroundColor: "#C6C67A",
        borderRadius: 20,
        width: 338,
        height: 158, 
        alignSelf: 'center'
      },
      cuboidSubContainer: {
        flex: 1,
        alignSelf: "center",
        flexDirection: 'collumn',
        paddingLeft: 15
      },
      cuboidbigTitle:{
        fontSize: 30,
        color: "#000",
        fontFamily: 'LatoBold'
      },
      cuboidbigText1: {
        fontSize: 15,
        color: "#000",
        fontFamily: 'LatoRegular'
      },
      cuboidbigText2: {
        paddingBottom: 10,
        fontSize: 15,
        color: "#9AA049",
        fontFamily: 'LatoRegular'
      },
      widgetspacing: {
        paddingTop: 22,
        paddingBottom: 11
      },
      bigWidgetImage: {
        width: 95,
        height: 160
      },
      WidgetSwitch: {
        alignSelf: "left",
        width: 35,
        height: 36
      }
  });

