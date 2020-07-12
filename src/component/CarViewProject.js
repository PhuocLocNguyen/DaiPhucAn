import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';

export default class CarViewProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imgProject}
          source={require('../../assets/images/thuanhoa.jpg')}
        />
        <View style={styles.groupTxtTitle}>
          <Text
            style={styles.txtTitleProject}
            numberOfLines={1}
            ellipsizeMode="tail">
            Tân Lân Residence
          </Text>
          <Text
            style={styles.txtaddress}
            numberOfLines={2}
            ellipsizeMode="tail">
            Đường tránh Cần Đước, thuộc xã Tân Lân, huyện Cần Đước, tỉnh Long An
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 1.6,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imgProject: {
    resizeMode: 'stretch',
    width: Dimensions.get('window').width / 1.6,
    flex: 5,
  },
  groupTxtTitle: {
    flex: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  txtTitleProject: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
  },
  txtaddress: {
    flex: 2,
    fontSize: 13,
  },
});
