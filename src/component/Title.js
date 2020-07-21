import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {verticalScale, moderateScale} from './function/Dimensions';

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
    height: verticalScale(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#4C796B',
    borderWidth: 0.8,
    margin: verticalScale(7),
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: verticalScale(3.84),
    elevation: 0.7,
  },
  text: {
    marginLeft: verticalScale(10),
    fontSize: moderateScale(17),
  },
  icon: {
    marginRight: verticalScale(10),
  },
});
