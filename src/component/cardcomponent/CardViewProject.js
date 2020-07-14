import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {height, width} from '../Dimensions';

export default class CardViewProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imgProject} source={this.props.img} />
        <View style={styles.groupTxtTitle}>
          <Text
            style={styles.txtTitleProject}
            numberOfLines={1}
            ellipsizeMode="tail">
            {this.props.title}
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
    height: height / 3.05,
    width: width / 1.6,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 5,
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
    width: width / 1.6,
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
