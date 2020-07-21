import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {verticalScale, moderateScale} from '../function/Dimensions';

export default class CardViewNews extends Component {
  render() {
    const {title, description, images} = this.props.news;
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: images[0]}} />
        <View style={styles.groupTextTitle}>
          <View style={styles.containerTextTitle}>
            <Text
              style={styles.txtTitle}
              numberOfLines={3}
              ellipsizeMode="tail">
              {title}
            </Text>
          </View>
          <View style={styles.containerTextContent}>
            <Text
              style={styles.textContent}
              numberOfLines={2}
              ellipsizeMode="tail">
              {description}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: verticalScale(120),
    flexDirection: 'row',
    backgroundColor: '#4C796B',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: moderateScale(7),
    marginBottom: moderateScale(7),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  img: {
    resizeMode: 'stretch',
    flex: 1.5,
  },
  groupTextTitle: {
    marginHorizontal: moderateScale(10),
    flex: 2,
  },
  containerTextTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1.5,
    borderBottomWidth: 0.3,
    borderColor: 'white',
  },
  containerTextContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: moderateScale(17),
    fontWeight: '500',
    color: 'white',
  },
  textContent: {
    fontSize: moderateScale(14),
    color: 'white',
  },
});
