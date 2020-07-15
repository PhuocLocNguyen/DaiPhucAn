import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {height} from '../Dimensions';

export default class CardDescription extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleInformation}>
          <Text style={styles.textInformation}>Mô tả</Text>
        </View>
        <View style={styles.groupInformation}>
          <Text style={styles.textDescription}>
            Với quy mô 2,4 ha, số lượng sản phẩm cung ứng 112 lô đất nền có diện
            tích đa dạng trung bình từ 106 – 180m2, Khu dân cư Thuận Hoà Lucky
            Home có pháp lý hoàn chỉnh, sổ đỏ riêng từng lô, xây dựng tự do, cơ
            sở hạ tầng nội khu hoàn thiện. Sở hữu vị trí đắc địa là cửa ngõ giao
            thương giữa TP Đồng Xoài và TP Hồ Chí Minh, Bình Dương, Đồng Nai…Đất
            nền Thuận Hoà Lucky Home hứa hẹn sẽ là nơi an cư, cũng như đầu tư
            cực kì lí tưởng với tiềm năng sinh lời lớn.
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
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
    height: height / 14,
    justifyContent: 'center',
  },
  groupInformation: {
    backgroundColor: '#EEF4ED',
  },
  textInformation: {
    fontSize: 15,
    marginHorizontal: 5,
  },
  textDescription: {
    fontSize: 14,
    marginHorizontal: 5,
    marginVertical: 7,
  },
});
