import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, FlatList} from 'react-native';
import CardViewProject from './CardViewProject';
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

export default class ListDuAn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          horizontal={true}
          renderItem={({item, index, separators}) => (
            <View>
              <CardViewProject
                title={item.title}
                address={item.address}
                img={item.img}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 3,
  },
});
