import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {height} from '../component/Dimensions';

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
    height: height / 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  textDescription: {
    fontSize: 15,
    marginHorizontal: 5,
  },
  img: {
    resizeMode: 'stretch',
    height: height / 2.5,
    margin: 5,
  },
});
