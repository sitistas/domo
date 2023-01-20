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
    var j;
      
    for (j = 0; j < todCons.length; j++){
      
      for(i = 1; i < todCons[j].length; i++){
        //check if hour is between 
        if (new Date(todCons[j][i].last_changed).getHours() == 0){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time01 = time01 + parseFloat(temp3)*1000 ;
          
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 1){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time02 = time02 + parseFloat(temp3)*1000 ;
          
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 2){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time03 = time03 + parseFloat(temp3)*1000 ;
          
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 3){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time04 = time04 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 4){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time05 = time05 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 5){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time06 = time06 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 6){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time07 = time07 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 7){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time08 = time08 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 8){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time09 = time09 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 9){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time10 = time10 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 10){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time11 = time11 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 11){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time12 = time12 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 12){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = (parseFloat(temp1)-parseFloat(temp2));
          time13 = time13 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 13){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time14 = time14 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 14){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time15 = time15 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 15){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time16 = time16 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 16){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time17 = time17 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 17){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time18 = time18 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 18){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time19 = time19 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 19){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time20 = time20 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 20){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time21 = time21 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 21){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time22 = time22 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 22){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time23 = time23 + parseFloat(temp3)*1000 ;
        }
        if (new Date(todCons[j][i].last_changed).getHours() == 23){
          var temp1 = todCons[j][i].state;
          var temp2 = todCons[j][i-1].state;
          if(temp2 == 'unknown' || temp1 == 'unknown'){temp2 = 0; temp1 = 0;}
          if(!temp1){temp1 = 0; temp2 = 0}
          if(!temp2){temp1 = 0; temp2 = 0;}
          var temp3 = parseFloat(temp1)-parseFloat(temp2);
          time24 = time24 + parseFloat(temp3)*1000 ;
        }

      }

    }
      

    const data1= [time01,
      time02,
      time03,
      time04,
      time05,
      time06,
      time07,
      time08,
      time09,
      time10,
      time11,
      time12,
      time13,
      time14,
      time15,
      time16,
      time17,
      time18,
      time19,
      time20,
      time21,
      time22,
      time23,
      time24,]
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

