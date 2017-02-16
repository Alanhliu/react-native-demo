/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-13 09:43:08
 * @version $Id$
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert
} from 'react-native';

import SecondScene from './SecondScene.js';

export default class FirstScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => 

          // Alert.alert(
          //   'Alert Title',
          //   'My Alert Msg',
          //   [
          //     {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          //     {text: 'OK', onPress: () => console.log('OK Pressed')},
          //   ],
          //   { cancelable: false }
          // )

          // this.props.navigator.push({title:"ListViewScene", name:'ListViewScene'})
          this.props.navigator.push({title:"TabBarIOSDemo",name:'TabBarIOSDemo'})

        }>
          <Text>push Scene</Text>
        </TouchableHighlight>
        <Text style={styles.welcome}>
          Welcome to React Native FirstScene!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});