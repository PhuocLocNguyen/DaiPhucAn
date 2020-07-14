import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {height} from '../Dimensions';

export default class CardNameProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.GroupTextTitle}>
          <View style={styles.containerTextTitle}>
            <Text style={styles.textTitle}>Dự án</Text>
          </View>
          <View style={styles.containerTextTitle}>
            <Text style={styles.textTitle}>Đang bán</Text>
          </View>
        </View>

        <View style={styles.containerTextName}>
          <Text style={styles.textName}>THUẬN HOÀ LUCKY HOME</Text>
        </View>
        <View style={styles.containerTextAddress}>
          <Text style={styles.textAddress}>
            Đường DT741, Xã Tiến Hưng, Thành phố Đồng Xoài, Tỉnh Bình Phước
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: height / 4.75,
    margin: 8,
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
  GroupTextTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  containerTextTitle: {
    justifyContent: 'center',
  },

  containerTextName: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    backgroundColor: '#EEF4ED',
  },
  containerTextAddress: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    backgroundColor: '#EEF4ED',
  },
  textName: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  textTitle: {
    fontSize: 15,
  },
  textAddress: {
    fontSize: 14,
    marginHorizontal: 5,
  },
});
