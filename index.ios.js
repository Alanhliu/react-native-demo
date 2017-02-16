/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import FirstScene from './js/FirstScene.js';
import SecondScene from './js/SecondScene.js';
import ListViewScene from './js/ListViewScene.js';
import TabBarIOSDemo from './js/TabBarIOSDemo.js';

// var FirstScene = require('./js/FirstScene');
// var SecondScene = require('./js/SecondScene');

export default class NavigatorDemo extends Component {
  
  renderScene(route,navigator) {
    if (route.name==="FirstScene") {
      return <FirstScene navigator={navigator}/>
    }

    if (route.name==="SecondScene") {
      return <SecondScene navigator={navigator}/>
    }

    if (route.name==="ListViewScene") {
      return <ListViewScene navigator={navigator}/>
    }

    if (route.name==="TabBarIOSDemo") {
      return <TabBarIOSDemo navigator={navigator}/>
    }
  }

  render() {
    const routes = [
      {title: 'FirstScene', name: 'FirstScene'},
      {title: 'SecondScene', name: 'SecondScene'},
      {title: 'ListViewScene', name: 'ListViewScene'},
      {title: 'TabBarIOSDemo', name: 'TabBarIOSDemo'}
    ];

    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}

        renderScene={this.renderScene}

        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.PushFromRight
        }

        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
              {
                if (route.name === 'FirstScene') {
                  return null;
                } else {
                  return (
                    <TouchableOpacity 
                    onPress={() => navigator.pop()}
                    style={{
                      margin:5,width:40,height:30
                    }}>
                      <Text style={{textAlign:'center',lineHeight:30}}>Back</Text>
                    </TouchableOpacity>
                  );
                }
              },

              RightButton: (route, navigator, index, navState) =>
                { return (<Text style={{marginRight:5,width:40,height:30,textAlign:'center',lineHeight:30}}>Done</Text>); },

              Title: (route, navigator, index, navState) =>
                { return (<Text style={{height:30,lineHeight:30}}>{route.title}</Text>); },
           }}
           style={{backgroundColor: 'gray'}}
          />
        }

        style={{padding: 0}}
      />
    );
  }
}

AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
