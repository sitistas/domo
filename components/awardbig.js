import React, { Component } from 'react';
import { StyleSheet, Text,Image, View, TouchableOpacity, onPress} from 'react-native';

class Awardbig extends Component {
    state = {awardSwitch: false};
    render() {
    
    return(
    <View style = {styles.widgetspacing}>
        <View style={styles.awardsContainer}>
            <View style={styles.awardSubContainer}>
                <Text style={styles.cuboidbigText2}>{'5,08 kWh ~ 0.1€'}</Text>
                <TouchableOpacity onPress={() => {this.setState({awardSwitch: !this.state.awardSwitch})}}>
                    <View>
                        <Image source = {this.state.awardSwitch ? require('../componentsAssets/questionmark.svg') : require('../componentsAssets/Sea-turtle.svg')} style={styles.WidgetSwitch}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
        
    );
  }
}

export default Awardbig;

const styles = StyleSheet.create({
    awardsContainer: {
        flexDirection: 'row',
        borderColor:"#EAEAB9",
        borderWidth: 5,
        width: 338,
        height: 500, 
        alignSelf: 'center'
      },
      awardSubContainer: {
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