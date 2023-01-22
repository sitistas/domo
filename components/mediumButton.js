import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, onPress} from 'react-native';


class Mediumbutton extends Component {
    state = {outletSwitch: this.props.InState};
  
    render() {

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
        <View style = {styles.widgetSpacing}>
            <View style={this.state.outletSwitch ? styles.mediumWidgetContainerPressed : styles.mediumWidgetContainer}>
                <View style={styles.mediumWidget}>
                    <Image source = {require('./componentsAssets/DOMOCuboidSmall.png')} style={styles.mediumWidgetImage}/>
                    <TouchableOpacity onPress={() => {
                      this.setState({outletSwitch: !this.state.outletSwitch})
                      }}>
                      
                      <Image source = {this.state.outletSwitch ? require('./componentsAssets/ON_OFF_Green_Pressed.png') : require('./componentsAssets/ON_OFF_Green.png')} style={styles.mediumWidgetSwitch}/>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    );
  }
}

export default Mediumbutton;

const styles = StyleSheet.create({
    mediumWidgetContainer: {
        flexDirection: 'collumn',
        backgroundColor: "#C6C67A",
        borderRadius: 20,
        width: 68,
        height: 158,
      },
      mediumWidgetContainerPressed: {
        flexDirection: 'collumn',
        backgroundColor: "#8D933E",
        borderRadius: 20,
        width: 68,
        height: 158,
      },
      widgetSpacing: {
        padding: 11, 
      },
      mediumWidget: {
        //paddingTop: 20,
        flex: 1,
        flexDirection: 'collumn'
      },
      mediumWidgetImage: {
        width: 68,
        height: 110,
      },
      mediumWidgetSwitch: {
        alignSelf: "center",
        width: 35,
        height: 36,
      },
  });

