import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../component/Header';
import CardProjectbasicInformation from '../component/cardcomponent/CardProjectbasicInformation';
import CardNameProject from '../component/cardcomponent/CardNameProject';
import CardProjectDetail from '../component/cardcomponent/CardProjectDetail';
import CardDescription from '../component/cardcomponent/CardDescription';
import CardLocation from '../component/cardcomponent/CardLocation';
export default class ProjectDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header />
          <CardNameProject />
          <CardProjectbasicInformation />
          <CardProjectDetail />
          <CardDescription title="Mô tả" />
          <CardLocation />
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
