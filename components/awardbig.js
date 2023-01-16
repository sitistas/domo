import React, { Component } from 'react';
import { StyleSheet, Text,Image, View, TouchableOpacity, onPress} from 'react-native';

class Awardbig extends Component {
  state = {awardSwitch: false};
    render() {
    
    return(
    <View style = {styles.widgetspacing}>
        <View style={styles.awardsContainer}>
            <View style={styles.awardSubContainer}>
                <TouchableOpacity onPress={() => {this.setState({awardSwitch: !this.state.awardSwitch})}}>
                  <View>
                      <Image source = {this.state.awardSwitch ? require('./componentsAssets/turtle.png') : require('./componentsAssets/qm.png')} style={styles.bigWidgetSwitch}/>
                  </View>
                </TouchableOpacity>
                <Text style = {styles.Text1}>{'Perfect Week'}</Text>
            </View>
        </View>
    </View>
        
    );
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