import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../component/Header';
import CardProjectbasicInformation from '../component/cardcomponent/CardProjectbasicInformation';
import CardNameProject from '../component/cardcomponent/CardNameProject';
import CardProjectDetail from '../component/cardcomponent/CardProjectDetail';
export default class ProjectDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header />
          <CardNameProject />
          <CardProjectbasicInformation />
          <CardProjectDetail />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
