import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './src/screen/Home';
import ProjectDetail from './src/screen/ProjectDetail';
import CardProjectDetail from './src/component/cardcomponent/CardProjectDetail';
import CardLocation from './src/component/cardcomponent/CardLocation';
import Test from './src/component/cardcomponent/Test';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Home /> */}
        <ProjectDetail />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
