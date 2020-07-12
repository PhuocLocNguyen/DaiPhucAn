import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

export default class Title extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
        <Text style={styles.icon}>{this.props.seeMore}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 12,
    backgroundColor: '#EEF4ED',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    borderRadius: 8,
  },
  text: {
    marginLeft: 10,
    fontSize: 17,
  },
  icon: {
    marginRight: 10,
  },
});
