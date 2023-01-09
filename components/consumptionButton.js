import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, onPress} from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { NavigationContainer } from '@react-navigation/native';

class Consumptionbutton extends Component {
  render() {
    return(
      <View style = {styles.widgetspacing}>
        <TouchableOpacity onPress={onPress} style={styles.consumptionContainer}>
          <View style={styles.consumptionSubContainer}>
              <ProgressChart
                  data={[0.6]}
                  width={158}
                  height={130}
                  strokeWidth={16}
                  radius={40}
                  chartConfig={{
                      backgroundColor: "#EAEAB9",
                      backgroundGradientFrom: "#EAEAB9",
                      backgroundGradientTo: "#EAEAB9",
                      decimalPlaces: 2, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(154, 160, 73, ${opacity})`,
                      labelColor: (opacity = 1) => `rgba(154, 160, 73, ${opacity})`,
                      style: {
                        borderRadius: 16
                      },
                    }}
                  hideLegend={true}
                  />
          </View>
          <View style={styles.consumptionSubContainer}>
            <Text style={styles.consumptionButtonText1}>{'Electricity consumed'}</Text>
            <Text style={styles.consumptionButtonText2}>{'60/100 kWh'}</Text>
            <Text style={styles.consumptionButtonText1}>{'Electricity bill'}</Text>
            <Text style={styles.consumptionButtonText2}>{'20€'}</Text>
          </View>
          
        </TouchableOpacity>

      </View>  
        
    );
  }
}

export default Consumptionbutton;

const styles = StyleSheet.create({
    consumptionContainer: {
        flexDirection: 'row',
        backgroundColor: "#EAEAB9",
        borderRadius: 20,
        width: 338,
        height: 158, 
        alignSelf: 'center'
      },
      consumptionSubContainer: {
        flex: 1,
        alignSelf: "center",
        flexDirection: 'collumn'
      },
      consumptionButtonText1: {
        paddingTop: 10,
        fontSize: 15,
        color: "#000",
        fontFamily: 'LatoBold'
      },
      consumptionButtonText2: {
        paddingBottom: 10,
        fontSize: 15,
        color: "#9AA049",
        fontFamily: 'LatoBold'
      },
      widgetspacing: {
        paddingTop: 22
      },
  });

