import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {height} from '../Dimensions';

export default class CardProjectbasicInformation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleInformation}>
          <Text style={styles.textInformation}>Thông tin cơ bản</Text>
        </View>
        <View style={styles.groupInformation}>
          <View style={styles.groupTextInformation}>
            <View style={styles.containerTextForm}>
              <Text style={styles.textForm}>Chủ đầu tư</Text>
            </View>
            <View style={styles.containerTextInformation}>
              <Text style={styles.textInformation}>Tap doan abcasd</Text>
            </View>
          </View>
          <View style={styles.groupTextInformation}>
            <View style={styles.containerTextForm}>
              <Text style={styles.textForm}>Loại hình</Text>
            </View>
            <View style={styles.containerTextInformation}>
              <Text style={styles.textInformation}>Tap doan abcasds</Text>
            </View>
          </View>
          <View style={styles.groupTextInformation}>
            <View style={styles.containerTextForm}>
              <Text style={styles.textForm}>Số căn</Text>
            </View>
            <View style={styles.containerTextInformation}>
              <Text style={styles.textInformation}>Tap doan abcasd</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: height / 3.5,
    marginHorizontal: 8,
    marginBottom: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleInformation: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5,
  },
  groupInformation: {
    flex: 3,
    backgroundColor: '#EEF4ED',
  },
  containerTextForm: {
    flex: 1.4,
    justifyContent: 'center',
  },
  containerTextInformation: {
    flex: 2,
    justifyContent: 'center',
  },
  textForm: {
    fontSize: 14,
    marginLeft: 5,
  },
  groupTextInformation: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 0.3,
  },
  textInformation: {
    fontSize: 15,
    marginRight: 5,
  },
});
