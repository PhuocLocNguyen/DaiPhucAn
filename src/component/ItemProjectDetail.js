import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class ItemProjectDetail extends Component {
  render() {
    return (
      <View style={styles.groupTextInformation}>
        <View style={styles.containerTextForm}>
          <Text style={styles.textForm}>{this.props.titleDetail}</Text>
        </View>
        <View style={styles.containerTextInformation}>
          <Text style={styles.textInformation}>5.555</Text>
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
    flex: 1.8,
    justifyContent: 'center',
  },
  textForm: {
    fontSize: 14,
    marginHorizontal: 5,
  },
  containerTextInformation: {
    flex: 1,
    justifyContent: 'center',
  },
  textInformation: {
    fontSize: 15,
    marginHorizontal: 5,
  },
});