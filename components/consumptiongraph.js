import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, onPress} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { NavigationContainer } from '@react-navigation/native';

class Consumptiongraph extends Component {
  render() {
    
    var todCons = this.props.Consumption;

    const data1= [20, 45, 28, 80, 60,10,20, 45, 28, 80, 60,10,20, 45, 28, 80, 60,10,20, 45, 28, 80, 60,10]
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
                <Text style = {styles.consumptionText1}>      Electricity Consumption</Text>
                <LineChart
                    style={styles.graphStyle}
                    data={data}
                    width={320}
                    height={240}
                    fromZero="true"
                    yAxisLabel="kWh "
                    chartConfig={{
                        backgroundColor: "#EAEAB9",
                        backgroundGradientFrom: "#EAEAB9",
                        backgroundGradientTo: "#EAEAB9",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(154, 160, 73, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(154, 160, 73, ${opacity})`,
                        
                    }}
                    //verticalLabelRotation={30}
                    bezier
                    />
                <Text style = {styles.consumptionText2}>       TOTAL: {tot} kWh</Text>
            </View>
            
        
          </View>
        </View>
    );
  }
}

export default Consumptiongraph;

const styles = StyleSheet.create({
   
      consumptionContainer: {
        flexDirection: 'row',
        backgroundColor: "#EAEAB9",
        borderRadius: 20,
        width: 338,
        height: 338, 
        alignSelf: 'center'
      },
      consumptionSubContainer: {
        flex: 1,
        alignSelf: "center",
        flexDirection: 'collumn'
      },
      graphStyle: {
        paddingTop: 10,
        alignSelf: 'center'
      },
      consumptionText1: {
        paddingBottom: 15,
        paddingleft: 30,
        fontSize: 15,
        color: "#9AA049",
        fontFamily: 'LatoBold'
      },
      consumptionText2: {
        paddingleft: 30,
        fontSize: 15,
        color: "#9AA049",
        fontFamily: 'LatoBold'
      },
      widgetspacing: {
        paddingTop: 22
      },
  });

