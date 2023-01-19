import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, onPress} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { NavigationContainer } from '@react-navigation/native';

class Consumptiongraph extends Component {
  render() {
    
    var todCons = this.props.Consumption;

    var time01=0;
    var time02=0;
    var time03=0;
    var time04=0;
    var time05=0;
    var time06=0;
    var time07=0;
    var time08=0;
    var time09=0;
    var time10=0;
    var time11=0;
    var time12=0;
    var time13=0;
    var time14=0;
    var time15=0;
    var time16=0;
    var time17=0;
    var time18=0;
    var time19=0;
    var time20=0;
    var time21=0;
    var time22=0;
    var time23=0;
    var time24=0;
    var i;

    for(i = 1; i < todCons.length; i++){
      //check if hour is between 
      if (new Date(todCons[i].last_changed).getHours() == 0){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time01 = time01 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 1){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time02 = time02 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 2){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time03 = time03 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 3){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time04 = time04 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 4){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time05 = time05 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 5){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time06 = time06 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 6){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time07 = time07 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 7){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time08 = time08 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 8){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time09 = time09 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 9){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time10 = time10 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 10){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time11 = time11 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 11){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time12 = time12 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 12){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time13 = time13 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 13){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time14 = time14 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 14){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time15 = time15 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 15){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time16 = time16 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 16){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time17 = time17 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 17){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time18 = time18 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 18){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time19 = time19 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 19){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time20 = time20 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 20){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time21 = time21 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 21){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time22 = time22 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 22){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time23 = time23 + parseFloat(todCons[i].state) / (minutes*60);
      }
      if (new Date(todCons[i].last_changed).getHours() == 23){
        var minutes = new Date(todCons[i].last_changed).getMinutes() - new Date(todCons[i-1].last_changed).getMinutes();
        if (minutes == 0) {minutes = 1;}
        time24 = time24 + parseFloat(todCons[i].state) / (minutes*60);
      }
    }

    const data1= [time01.toFixed(2), time02.toFixed(2), time03.toFixed(2), time04.toFixed(2), time05.toFixed(2), time06.toFixed(2), time07.toFixed(2), time08.toFixed(2), time09.toFixed(2),
       time10.toFixed(2), time11.toFixed(2), time12.toFixed(2), time13.toFixed(2), time14.toFixed(2), time15.toFixed(2), time16.toFixed(2), time17.toFixed(2), time18.toFixed(2), time19.toFixed(2),
       time20.toFixed(2), time21.toFixed(2), time22.toFixed(2), time23.toFixed(2), time24.toFixed(2)]
    const data = {
        labels: ["01:00", "     06:00", "        12:00", "           18:00", "                23:59"],
        datasets: [
          {
            data: data1
          }
        ]
      };

    
    var tot = this.props.ConsValue*1000;
    
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
                    yAxisLabel="Wh "
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
                <Text style = {styles.consumptionText2}>       TOTAL: {tot.toFixed(2)} Wh</Text>
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

