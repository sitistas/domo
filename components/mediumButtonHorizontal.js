import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, onPress} from 'react-native';
import Smallbutton from './smallButton';

class MediumbuttonHorizontal extends Component {
  

  render() {

    

    var cons1=this.props.Consume1*1000;
    var val1=this.props.Val1;
    var cons2=this.props.Consume2*1000;
    var val2=this.props.Val2;


    return(
        <View style = {styles.widgetSpacing}>

          <View style={styles.widgetRow}>

            <View style={styles.mediumWidgetContainer}>
              <View style={styles.mediumWidgetSubContainer}>
                <Text style={styles.mediumText2}>{"Cons. today"}</Text>
                <Text style={styles.mediumText3}>{cons1.toFixed(2)+"Wh"}</Text>
                <Text style={styles.mediumText3}>{val1.toFixed(4)+"€"}</Text>
              </View>
              <View style = {styles.smallWidget}>
              <Smallbutton MACadd = {global.outlets.xMAC1} InState = {global.outlets.state1}/>
              </View>
            </View>

            <View style={styles.mediumWidgetContainer}>
              <View style={styles.mediumWidgetSubContainer}>
                <Text style={styles.mediumText2}>{"Cons. today"}</Text>
                <Text style={styles.mediumText3}>{cons2.toFixed(2)+"Wh"}</Text>
                <Text style={styles.mediumText3}>{val2.toFixed(4)+"€"}</Text>
              </View>
              <View style = {styles.smallWidget}>
              <Smallbutton MACadd = {global.outlets.xMAC2} InState = {global.outlets.state2}/>
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
        fontSize: 12,
        color: "#9AA049",
        fontFamily: 'LatoRegular'
      },
      smallWidget:{
        margin: -11
      }
      
  });

