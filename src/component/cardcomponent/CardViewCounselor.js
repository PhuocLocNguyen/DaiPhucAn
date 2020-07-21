import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {verticalScale, moderateScale} from '../function/Dimensions';

export default class CardViewCounselor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerImageCounselor}>
          <Image
            source={{
              uri: this.props.img,
            }}
            style={styles.imgCounselor}
          />
        </View>
        <View style={styles.containerTextName}>
          <Text style={styles.textName}>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: verticalScale(120),
    width: verticalScale(100),
    marginLeft: moderateScale(7),
    alignItems: 'center',
  },
  containerImageCounselor: {
    height: verticalScale(100),
    width: verticalScale(100),
    borderRadius: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.2,
    borderColor: '#4C796B',
  },
  containerTextName: {
    height: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgCounselor: {
    width: verticalScale(90),
    height: verticalScale(90),
    borderRadius: verticalScale(45),
  },
  txtName: {
    fontSize: moderateScale(15),
  },
});
