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
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

class instagramgrid extends Component {
  render() {
    return (
      <View style={styles.container}>

        <ScrollView style={styles.scroll}>
          <View style={styles.topSection}></View>
          <View style={styles.imageGrid}>
            <View style={styles.image} />
            <View style={styles.image} />
            <View style={styles.image} />
            <View style={styles.image} />
            <View style={styles.image} />
            <View style={styles.image} />
            <View style={styles.image} />
            <View style={styles.image} />
            <View style={styles.image} />
            <View style={styles.image} />
            <View style={styles.image} />
            <View style={styles.image} />
          </View>
        </ScrollView>

        <View style={styles.iconBar}>
          <Text>Icon bar</Text>
        </View>

      </View>
    );
  }
}

var {height, width} = Dimensions.get('window');
const GRID = (width / 3) - 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  topSection: {
    backgroundColor: '#999',
    height: 300,
    alignSelf: 'stretch'
  },
  imageGrid: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    height: GRID,
    marginBottom: 2,
    width: GRID,
    backgroundColor: 'red'
  },
  iconBar: {
    height: 50,
    backgroundColor: 'blue',
  }
});

AppRegistry.registerComponent('instagramgrid', () => instagramgrid);
