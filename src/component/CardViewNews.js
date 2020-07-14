import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';

export default class CardViewNews extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={this.props.img} />
        <View style={styles.groupTxtTitle}>
          <View style={styles.containerTxtTitle}>
            <Text
              style={styles.txtTitle}
              numberOfLines={1}
              ellipsizeMode="tail">
              {this.props.title}
            </Text>
          </View>
          <View style={styles.containerTxtContent}>
            <Text
              style={styles.txtContent}
              numberOfLines={2}
              ellipsizeMode="tail">
              {this.props.address}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 5,
    flexDirection: 'row',
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
  img: {
    resizeMode: 'stretch',
    width: Dimensions.get('window').height / 5,
    height: Dimensions.get('window').height / 5,
    flex: 1.15,
  },
  groupTxtTitle: {
    marginLeft: 10,
    marginRight: 10,
    flex: 2,
  },
  containerTxtTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 0.3,
  },
  containerTxtContent: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  txtContent: {
    fontSize: 14,
  },
});
