import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from '../function/Dimensions';

export default class CardViewProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imgProject}
          source={{
            uri: this.props.img,
          }}
        />
        <View style={styles.groupTxtTitle}>
          <Text
            style={styles.txtTitleProject}
            numberOfLines={1}
            ellipsizeMode="tail">
            {this.props.name}
          </Text>
          <Text
            style={styles.txtaddress}
            numberOfLines={2}
            ellipsizeMode="tail">
            {this.props.address}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: verticalScale(210),
    width: scale(240),
    backgroundColor: '#4C796B',
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: verticalScale(7),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  imgProject: {
    resizeMode: 'stretch',
    width: scale(240),
    flex: 5,
  },
  groupTxtTitle: {
    flex: 2,
    marginHorizontal: verticalScale(7),
  },
  txtTitleProject: {
    flex: 1,
    fontSize: moderateScale(17),
    fontWeight: '500',
    color: 'white',
  },
  txtaddress: {
    flex: 2,
    fontSize: moderateScale(14),
    color: 'white',
  },
});
