import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, onPress, RefreshControl} from 'react-native';



class Smallbutton extends Component {
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
    
    //setTimeout(() => {  console.log("Wait"); }, 5000);

    return(
      <View style = {styles.widgetSpacing}>
        <TouchableOpacity onPress={() => {
          
          this.setState({outletSwitch: !this.state.outletSwitch}
            
            )
        }} style={ this.state.outletSwitch ? styles.smallWidgetContainerPressed : styles.smallWidgetContainer}>
            <View style={styles.smallmWidget}>
              <Image source = {this.state.outletSwitch ? require('./componentsAssets/OutletImageDark.png') : require('./componentsAssets/OutletImage.png')} style={styles.smallWidgetImage}/>
            </View>
        </TouchableOpacity>
      </View>
    );
  }  
}

export default Smallbutton;

const styles = StyleSheet.create({
    smallWidgetContainer: {
      backgroundColor: "#C6C67A",
      borderRadius: 20,
      width: 68,
      height: 68,
    },
    smallWidgetContainerPressed: {
      backgroundColor: "#8D933E",
      borderRadius: 20,
      width: 68,
      height: 68,
    },
    widgetSpacing: {
      padding: 11
    },
    smallmWidget: {
      flex: 1,
      flexDirection: 'collumn', 
      justifyContent: 'center',
      alignSelf: 'center'
    },
    smallWidgetImage: {
      width: 40,
      height: 40,
      
    },
  });

