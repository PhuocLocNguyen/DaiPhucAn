import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {verticalScale, moderateScale} from '../function/Dimensions';
import ItemProjectDetail from '../ItemProjectDetail';
import {connect} from 'react-redux';
import {actionCreator} from '../../redux/action/actionCreator';
class CardProjectDetail extends Component {
  render() {
    const {
      quy_mo,
      so_luong,
      dien_tich_phan_lo,
      hinh_thuc_xay_dung,
      ngan_hang,
      phap_ly,
    } = this.props.project;
    return (
      <View style={styles.container}>
        <View style={styles.titleInformation}>
          <Text style={styles.textInformation}>Thông tin chi tiết</Text>
        </View>
        <View style={styles.groupInformation}>
          <ItemProjectDetail titleDetail="Quy mô" content={quy_mo} />
          <ItemProjectDetail titleDetail="Số lượng" content={so_luong} />
          <ItemProjectDetail
            titleDetail="Diện tích phân lô"
            content={dien_tich_phan_lo}
          />
          <ItemProjectDetail
            titleDetail="Hình thức xây dựng"
            content={hinh_thuc_xay_dung}
          />
          <ItemProjectDetail titleDetail="Ngân hàng" content={ngan_hang} />
          <ItemProjectDetail titleDetail="Pháp Lý" content={phap_ly} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: verticalScale(303.3),
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
  groupInformation: {
    flex: 6,
    backgroundColor: '#EEF4ED',
  },
  titleInformation: {
    flex: 1,
    justifyContent: 'center',
  },
  textInformation: {
    fontSize: moderateScale(15),
    marginHorizontal: 10,
  },
});
const mapStateToProps = function (state) {
  return {project: state.project};
};

export default connect(mapStateToProps, actionCreator)(CardProjectDetail);
