import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {verticalScale, moderateScale} from '../function/Dimensions';

export default class CardDescription extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleInformation}>
          <Text style={styles.textInformation}>{this.props.title}</Text>
        </View>
        <View style={styles.groupInformation}>
          <Text style={styles.textDescription}>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 7,
    marginBottom: 7,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  titleInformation: {
    height: verticalScale(43.3),
    justifyContent: 'center',
  },
  groupInformation: {
    backgroundColor: '#EEF4ED',
  },
  textInformation: {
    fontSize: moderateScale(15),
    marginHorizontal: 10,
  },
  textDescription: {
    fontSize: moderateScale(15),
    marginHorizontal: 10,
    marginVertical: 7,
  },
});
