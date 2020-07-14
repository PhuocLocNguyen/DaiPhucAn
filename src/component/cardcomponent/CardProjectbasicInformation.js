import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class CardProjectbasicInformation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Thông tin cơ bản</Text>
        </View>
        <View>
          <View>
            <Text>Thuận Hòa</Text>
            <Text>Dự án</Text>
            <Text>Thuận Hòa</Text>
            <Text>Thuận Hòa</Text>
          </View>
          <View>
            <Text>Thuận Hòa</Text>
            <Text>Dự án</Text>
            <Text>Thuận Hòa</Text>
            <Text>Thuận Hòa</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
