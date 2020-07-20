import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {height} from './Dimensions';
import {SliderBox} from 'react-native-image-slider-box';

export default class Header extends Component {
  render() {
    if (this.props.imgs) {
      return (
        <View style={styles.container}>
          <SliderBox images={this.props.imgs} autoplay />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
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
