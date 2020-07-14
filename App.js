import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './src/screen/Home';
import ProjectDetail from './src/screen/ProjectDetail';
import CardProjectbasicInformation from './src/component/cardcomponent/CardProjectbasicInformation';

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
