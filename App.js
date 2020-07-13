import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './src/screen/Home';
import CarViewCounselor from './src/component/CarViewCounselor';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
        {/* <CarViewCounselor /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
