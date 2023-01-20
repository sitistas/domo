import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, onPress} from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { NavigationContainer } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

class Consumptionbutton extends Component {
  render() {
    //const navigation = useNavigation();
    var consData = parseFloat(this.props.ConsValue).toFixed(2)/this.props.limit;
    //console.log(typeof(this.props.ConsValue));
    if (parseFloat(consData) >=1) {consData = 1}
    return(
      <View style = {styles.widgetspacing}>
        <View style={styles.consumptionContainer}>
          <View style={styles.consumptionSubContainer}>
              <ProgressChart
                  data={[parseFloat(consData)]}
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
            <Text style={styles.consumptionButtonText1}>{'Today'}</Text>
            <Text style={styles.consumptionButtonText2}>{this.props.ConsValue}/{this.props.limit} kWh</Text>
            <Text style={styles.consumptionButtonText1}>{'This month'}</Text>
            <Text style={styles.consumptionButtonText2}>{this.props.ConsValueMonth}kWh</Text>
            <Text style={styles.consumptionButtonText1}>{'Electricity bill'}</Text>
            <Text style={styles.consumptionButtonText2}>{this.props.ConsCost}€</Text>
          </View>
          
        </View>

      </View>  
        
    );
  }
}



export default Consumptionbutton;

// Consumptionbutton.propTypes = {
//   ConsValue: PropTypes.string.isRequired
// };

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
        paddingTop: 0,
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
        paddingTop: 22
      },
  });

