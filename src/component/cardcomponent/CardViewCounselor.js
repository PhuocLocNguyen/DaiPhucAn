import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {height} from '../Dimensions';

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
        <Text style={styles.txtName}>{this.props.name}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: height / 5,
    width: height / 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  containerImageCounselor: {
    flex: 4,
    height: height / 6,
    width: height / 6,
    borderRadius: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#134074',
  },
  imgCounselor: {
    width: height / 6.5,
    height: height / 6.5,
    borderRadius: height / 4,
  },
  txtName: {
    flex: 1,
    fontSize: height / 37,
  },
});
