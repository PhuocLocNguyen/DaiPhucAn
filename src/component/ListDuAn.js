import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, FlatList} from 'react-native';
const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: '4444444444444444444 Item',
  },
  {
    id: '5',
    title: '5555 Item',
  },
  {
    id: '6',
    title: '6666 Item',
  },
  {
    id: '7',
    title: '7777 Item',
  },
  {
    id: '8',
    title: '888 Item',
  },
  {
    id: '9',
    title: '999 Item',
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
            <View style={{backgroundColor: 'white'}}>
              <Text>{item.title}</Text>
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
    backgroundColor: 'blue',
  },
});
