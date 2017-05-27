/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Home from './src/components/home/Home.js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class aqhome extends Component {
  render() {
    return (
      <View>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('aqhome', () => aqhome);
