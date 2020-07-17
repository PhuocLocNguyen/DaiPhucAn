import React, {Component} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import CardViewCounselor from './cardcomponent/CardViewCounselor';
import {height} from './Dimensions';
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
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('InfoCounselors')
                }>
                <CardViewCounselor name={item.name} img={item.img} />
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
    height: height / 5,
  },
});
