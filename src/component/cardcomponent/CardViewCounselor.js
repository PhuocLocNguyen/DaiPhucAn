import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';

export default class CardViewCounselor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerImageCounselor}>
          <Image
            source={require('../../../assets/images/dongphu.jpg')}
            style={styles.imgCounselor}
          />
        </View>
        <Text style={styles.txtName}>Loc</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').height / 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  containerImageCounselor: {
    flex: 4,
    height: Dimensions.get('window').height / 6,
    width: Dimensions.get('window').height / 6,
    borderRadius: Dimensions.get('window').height / 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#134074',
  },
  imgCounselor: {
    width: Dimensions.get('window').height / 6.5,
    height: Dimensions.get('window').height / 6.5,
    borderRadius: Dimensions.get('window').height / 4,
  },
  txtName: {
    flex: 1,
    fontSize: Dimensions.get('window').height / 37,
  },
});
