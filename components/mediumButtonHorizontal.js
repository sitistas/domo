import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, onPress} from 'react-native';
import Smallbutton from './smallButton';

class MediumbuttonHorizontal extends Component {
    state = {outletSwitch: false};
  
    render() {
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
                <Smallbutton MACadd = '124B0002CC7EF6'/>
              </View>
            </View>

            <View style={styles.mediumWidgetContainer}>
              <View style={styles.mediumWidgetSubContainer}>
                <Text style={styles.mediumText1}>{'2.'}</Text>
                <Text style={styles.mediumText2}>{'Last session'}</Text>
                <Text style={styles.mediumText3}>{'800 Wh ~ 0.5€'}</Text>
              </View>
              <View style = {styles.smallWidget}>
                <Smallbutton MACadd = '124B0002CC81B5'/>
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

