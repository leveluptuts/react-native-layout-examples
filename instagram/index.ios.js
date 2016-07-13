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
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

class instagram extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          I'm a logo
        </Text>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>I'm a button</Text>
        </TouchableHighlight>
        <View style={styles.extraDetails}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    color: '#333333',
    height: 40,
    borderStyle: 'solid',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'blue',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  buttonText: {
    fontSize:24,
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  extraDetails: {
    backgroundColor: 'blue',
    height: 40,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
});

AppRegistry.registerComponent('instagram', () => instagram);
