import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {height} from '../Dimensions';
import ItemProjectDetail from '../ItemProjectDetail';
export default class CardProjectDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleInformation}>
          <Text style={styles.textInformation}>Thông tin chi tiết</Text>
        </View>
        <View style={styles.groupInformation}>
          <ItemProjectDetail titleDetail="Tổng diện tích dự án" />
          <ItemProjectDetail titleDetail="Diện tích sàn xây dựng" />
          <ItemProjectDetail titleDetail="DT công viên cây xanh" />
          <ItemProjectDetail titleDetail="DT cây xanh trên công trình" />
          <ItemProjectDetail titleDetail="DT giao thông, sân bãi" />
          <ItemProjectDetail titleDetail="Mật độ phủ xanh" />
          <ItemProjectDetail titleDetail="Mật độ xây dựng" />
          <ItemProjectDetail titleDetail="Quy mô dự án" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: height / 1.4,
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
  groupInformation: {
    flex: 8,
    backgroundColor: '#EEF4ED',
  },
  titleInformation: {
    flex: 1,
    justifyContent: 'center',
  },
  textInformation: {
    fontSize: 15,
    marginHorizontal: 5,
  },
});
