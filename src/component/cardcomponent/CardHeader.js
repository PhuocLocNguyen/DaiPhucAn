import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {verticalScale} from '../function/Dimensions';
import {SliderBox} from 'react-native-image-slider-box';

export default class CardHeader extends Component {
  render() {
    if (this.props.imgs) {
      return (
        <View style={styles.container}>
          <SliderBox
            images={this.props.imgs}
            sliderBoxHeight={verticalScale(250)}
            autoplay
          />
        </View>
      );
    }
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(250),
  },
});
