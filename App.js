import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './src/screen/Home';
import CarViewProject from './src/component/CarViewProject';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Home /> */}
        <CarViewProject />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
