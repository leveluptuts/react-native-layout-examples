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
  View
} from 'react-native';

class flexboxintro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxOne} />
        <View style={styles.boxTwo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  boxOne: {
    flex: 3,
    backgroundColor: 'blue'
  },
  boxTwo: {
    flex: 3,
    backgroundColor: 'red'
  },
});

AppRegistry.registerComponent('flexboxintro', () => flexboxintro);
