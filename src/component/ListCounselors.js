import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, FlatList} from 'react-native';
import CardViewCounselor from './cardcomponent/CardViewCounselor';
const DATA = [
  {
    id: '1',
    name: 'Oanh',
    img: require('../../assets/images/thuanhoa.jpg'),
  },
  {
    id: '2',
    name: 'Oanh',
    img: require('../../assets/images/phuchung.jpg'),
  },
  {
    id: '3',
    name: 'Oanh',
    img: require('../../assets/images/dongphu.jpg'),
  },
  {
    id: '4',
    name: 'Oanh',
    img: require('../../assets/images/thuanhoa.jpg'),
  },
  {
    id: '5',
    name: 'Oanh',
    img: require('../../assets/images/phuchung.jpg'),
  },
  {
    id: '6',
    name: 'Oanh',
    img: require('../../assets/images/dongphu.jpg'),
  },
];

export default class ListCounselors extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          horizontal={true}
          renderItem={({item, index, separators}) => (
            <View>
              <CardViewCounselor name={item.name} img={item.img} />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 5,
  },
});
