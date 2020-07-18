import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {height} from './Dimensions';
import {SliderBox} from 'react-native-image-slider-box';

export default class Header extends Component {
  // shouldComponentUpdate(nextProps) {
  //   if (this.props.imgs) {
  //     return false;
  //   }
  //   return true;
  // }
  render() {
    if (this.props.imgs) {
      //console.log(this.props.imgs.hinh_anh);
      return (
        <View style={styles.container}>
          <SliderBox images={this.props.imgs} autoplay circleLoop />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>Load</Text>
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
