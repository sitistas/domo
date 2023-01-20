import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, onPress} from 'react-native';



class Smallbutton extends Component {
  state = {outletSwitch: false};

  render() {
    
    var ws = new WebSocket('ws://192.168.2.7:2014');
    ws.onopen = () => {
      
      var temp;
      
      ws.send('ReportStates')
      
      ws.onmessage = e => {
        
        if (e.data[0] == 'P'){
          temp = JSON.parse(e.data.slice(10,e.data.length));
          

          if (temp.xMAC == this.props.MACadd){
            this.state.outletSwitch = temp.IsOn;
            console.log(temp.xMAC, this.state.outletSwitch );
          }
        }
      }; 
      
        if (this.state.outletSwitch)
        {
          ws.send('TurnOn {"xMAC":"' + this.props.MACadd + '","Number":10}');
        }
        else
        {
          ws.send('TurnOff {"xMAC":"' + this.props.MACadd + '","Number":10}');
        }
        
    } 

    

    
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

