import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from '../component/Header';
import CardProjectbasicInformation from '../component/cardcomponent/CardProjectbasicInformation';
import CardNameProject from '../component/cardcomponent/CardNameProject';
export default class ProjectDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <CardNameProject />
        <CardProjectbasicInformation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
