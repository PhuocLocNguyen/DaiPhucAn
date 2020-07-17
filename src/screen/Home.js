import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Header from '../component/Header';
import Title from '../component/Title';
import ListDuAn from '../component/ListDuAn';
import ListCounselors from '../component/ListCounselors';
import ListNews from '../component/ListNews';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header />
          <Title title="Dự án" seeMore="Xem thêm >" />
          <ListDuAn navigation={this.props.navigation} />
          <Title title="Tư vấn viên" seeMore="Xem thêm >" />
          <ListCounselors navigation={this.props.navigation} />
          <Title title="Tin Tức" seeMore="Xem thêm >" />
          {/* <ListNews /> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
