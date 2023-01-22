import React, { Component } from 'react';
import { StyleSheet, Text,Image, View, TouchableOpacity, onPress} from 'react-native';

class Awardbig extends Component {
    render() {
    var sval = this.props.Award;
    if(sval>global.limit)
    {
      return(
        <View style = {styles.widgetspacing}>
            <View style={styles.awardsContainer}>
                <View style={styles.awardSubContainer}>
                    <View>
                      <Image source = { require('./componentsAssets/turtle_black.png')} style={styles.bigWidgetSwitch}/>
                    </View>
                    <Text style = {styles.Text1}>{'Perfect Week'}</Text>
                </View>
            </View>
        </View>
        );
    }
    else
    {
      return(
        <View style = {styles.widgetspacing}>
            <View style={styles.awardsContainer}>
                <View style={styles.awardSubContainer}>
                    <View>
                      <Image source = { require('./componentsAssets/turtle.png')} style={styles.bigWidgetSwitch}/>
                    </View>
                    <Text style = {styles.Text1}>{'Perfect Week'}</Text>
                </View>
            </View>
        </View>
            
        );
      }

    }
}

export default Awardbig;

const styles = StyleSheet.create({
    awardsContainer: {
        flexDirection: 'row',
        width: 338,
        height: 500, 
        alignSelf: 'center'
      },
      awardSubContainer: {
        flex: 1,
        flexDirection: 'collumn',
        paddingLeft: 5
      },
      Text1: {
        fontSize: 15,
        color: "#000",
        fontFamily: 'LatoRegular'
      },
      Text2: {
        paddingBottom: 10,
        fontSize: 15,
        color: "#9AA049",
        fontFamily: 'LatoRegular'
      },
      widgetspacing: {
        paddingTop: 22,
        paddingBottom: 11
      },
      bigWidgetSwitch: {
        width: 85,
        height: 86,
        paddingBottom: 20
      },
  });