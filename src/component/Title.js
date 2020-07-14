import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {height} from './Dimensions';

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
    height: height / 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2.5,
  },
  text: {
    marginLeft: 10,
    fontSize: 17,
  },
  icon: {
    marginRight: 10,
  },
});
