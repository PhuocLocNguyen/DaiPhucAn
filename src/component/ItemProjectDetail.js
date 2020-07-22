import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {moderateScale} from './function/Dimensions';

export default class ItemProjectDetail extends Component {
  render() {
    return (
      <View style={styles.groupTextInformation}>
        <View style={styles.containerTextForm}>
          <Text style={styles.textForm}>{this.props.titleDetail}</Text>
        </View>
        <View style={styles.containerTextInformation}>
          <Text style={styles.textInformation}>{this.props.content}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  groupTextInformation: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 0.3,
  },
  containerTextForm: {
    flex: 1,
    justifyContent: 'center',
  },
  textForm: {
    fontSize: moderateScale(15),
    marginHorizontal: 10,
  },
  containerTextInformation: {
    flex: 1,
    justifyContent: 'center',
  },
  textInformation: {
    fontSize: moderateScale(15),
    marginHorizontal: 10,
  },
});
