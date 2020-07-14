import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, FlatList} from 'react-native';
import CarViewNews from './CarViewNews';
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
  {
    id: '4',
    title: 'Thuận Hòa 4',
    address: 'Đường DT741, Xã Tiến Hưng, Thành phố Đồng Xoài, Tỉnh Bình Phước',
    img: require('../../assets/images/thuanhoa.jpg'),
  },
  {
    id: '5',
    title: 'Thuận Hòa 5',
    address: 'Đường DT741, Xã Tiến Hưng, Thành phố Đồng Xoài, Tỉnh Bình Phước',
    img: require('../../assets/images/thuanhoa.jpg'),
  },
  {
    id: '6',
    title: 'Thuận Hòa 6',
    address: 'Đường DT741, Xã Tiến Hưng, Thành phố Đồng Xoài, Tỉnh Bình Phước',
    img: require('../../assets/images/thuanhoa.jpg'),
  },
  {
    id: '7',
    title: 'Thuận Hòa 7',
    address: 'Đường DT741, Xã Tiến Hưng, Thành phố Đồng Xoài, Tỉnh Bình Phước',
    img: require('../../assets/images/thuanhoa.jpg'),
  },
];

export default class ListNews extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          windowSize={2}
          renderItem={({item, index, separators}) => (
            <View>
              <CarViewNews
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
    height: Dimensions.get('window').height,
  },
});
