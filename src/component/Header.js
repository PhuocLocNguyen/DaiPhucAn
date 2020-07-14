import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {height} from './Dimensions';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imgHeader}
          source={require('../../assets/images/dai-phuc-an-dat-nen-binh-phuoc-bia-1.jpg')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: height / 3.5,
  },
  imgHeader: {
    flex: 1,
    resizeMode: 'stretch',
  },
});
