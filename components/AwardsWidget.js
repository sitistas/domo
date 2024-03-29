import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, onPress} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

class AwardsWidget extends Component {
  render() {
    const data1= [20, 45, 28, 80, 60]
    const data = {
        labels: ["00:00", "06:00", "12:00", "18:00", "23:59"],
        datasets: [
          {
            data: data1
          }
        ]
      };

    
    var tot = data1[0]+data1[1]+data1[2]+data1[3]+data1[4];
    
    return(
        
        <View style = {styles.widgetspacing}>
          <View style={styles.consumptionContainer}>
            <View style={styles.consumptionSubContainer}>
                
              <Text style={styles.consumptionButtonText1}>{'AWARDS'}</Text>
           
            </View>
          </View>
        
      
        </View>
    );
  }
}

export default AwardsWidget;

const styles = StyleSheet.create({
      consumptionContainer: {
        flex: 1,
        backgroundColor: "#C6C67A",
        borderRadius: 20,
        width: 158,
        height: 158, 
        flexDirection: 'collumn',
      },
      consumptionSubContainer: {
        alignSelf: 'center'
      },
      consumptionButtonText1: {
        paddingTop: 11,
        fontSize: 15,
        color: "#000",
        fontFamily: 'LatoBold'
      },
      consumptionButtonText2: {
        paddingBottom: 2,
        fontSize: 15,
        color: "#9AA049",
        fontFamily: 'LatoBold'
      },
      widgetspacing: {
        paddingTop: 22,
        paddingLeft: 11,
        paddingRight: 11
      },
  });

