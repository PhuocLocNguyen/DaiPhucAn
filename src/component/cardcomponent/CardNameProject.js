import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {verticalScale, moderateScale} from '../function/Dimensions';
import {connect} from 'react-redux';
import {actionCreator} from '../../redux/action/actionCreator';
class CardNameProject extends Component {
  render() {
    const {ten_du_an, vi_tri} = this.props.project;
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
          <Text style={styles.textName}>{ten_du_an}</Text>
        </View>
        <View style={styles.containerTextAddress}>
          <Text style={styles.textAddress}>{vi_tri}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: verticalScale(130),
    margin: 7,
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
    marginHorizontal: 10,
  },
  textTitle: {
    fontSize: moderateScale(15),
    marginHorizontal: 10,
  },
  textAddress: {
    fontSize: moderateScale(15),
    marginHorizontal: 10,
  },
});

const mapStateToProps = function (state) {
  return {project: state.project};
};

export default connect(mapStateToProps, actionCreator)(CardNameProject);
