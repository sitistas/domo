import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, onPress} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

class Consumptionsmall extends Component {
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
                
              <Text style={styles.consumptionButtonText1}>{'Electricity bill'}</Text>
              <Text style={styles.consumptionButtonText2}>{this.props.MonthlyCost}€</Text>
              <Text style={styles.consumptionButtonText1}>Today's cost</Text>
              <Text style={styles.consumptionButtonText2}>{this.props.Cost}€</Text>
              <Text style={styles.consumptionButtonText1}>Today's cost/kWh</Text>
              <Text style={styles.consumptionButtonText2}>{global.price}€/kWh</Text>
           
            </View>
          </View>
        
      
        </View>
    );
  }
}

export default Consumptionsmall;

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

