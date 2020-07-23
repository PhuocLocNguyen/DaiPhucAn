import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {verticalScale, moderateScale} from '../component/function/Dimensions';

export default class NewsDetail extends Component {
  render() {
    const {title, images, description} = this.props.route.params.news;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerTitle}>
            <Text style={styles.textTitle}>{title}</Text>
          </View>
          <View style={styles.containerDescription}>
            <Text style={styles.textDescription}>{description}</Text>
          </View>
          {images.map((image, index) => {
            return (
              <Image style={styles.img} key={index} source={{uri: image}} />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    height: verticalScale(75),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: moderateScale(23),
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  textDescription: {
    fontSize: moderateScale(15),
    marginHorizontal: 10,
  },
  img: {
    resizeMode: 'stretch',
    height: verticalScale(250),
    marginHorizontal: 7,
    marginTop: 7,
  },
});
