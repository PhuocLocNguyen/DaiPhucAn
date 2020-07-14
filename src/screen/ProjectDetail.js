import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from '../component/Header';
export default class ProjectDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>Dự án</Text>
        <Text>Thuận Hòa</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
