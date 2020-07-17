import React, {Component} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import CardViewProject from './cardcomponent/CardViewProject';
import {height} from './Dimensions';
import {connect} from 'react-redux';
import {actionCreator} from '../redux/action/actionCreator';
const DATA = [
  {
    id: '1',
    title: 'Thuận Hòa',
    address: 'Đường DT741, Xã Tiến Hưng, Thành phố Đồng Xoài, Tỉnh Bình Phước',
    img: require('../../assets/images/thuanhoa.jpg'),
  },
  {
    id: '2',
    title: 'Đồng Phú',
    address: '20 Trung Mỹ Tây 13, P. Trung Mỹ Tây, Q12, TPHCM',
    img: require('../../assets/images/phuchung.jpg'),
  },
  {
    id: '3',
    title: 'Phúc Hưng',
    address: 'Xã Minh Hưng, Huyện Chơn Thành, tỉnh Bình Phước.',
    img: require('../../assets/images/dongphu.jpg'),
  },
];

class ListDuAn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          extraData={this.props.projects}
          keyExtractor={(item, index) => item._id.toString()}
          data={this.props.projects}
          horizontal={true}
          renderItem={({item, index, separators}) => (
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ProjectDetail')}>
                <CardViewProject
                  name={item.ten_du_an}
                  address={item.vi_tri}
                  img={item.hinh_anh[1]}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height / 3,
  },
});

const mapStateToProps = function (state) {
  return {projects: state.projects};
};

export default connect(mapStateToProps, actionCreator)(ListDuAn);
