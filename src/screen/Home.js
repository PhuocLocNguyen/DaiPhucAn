import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Header from '../component/Header';
import Title from '../component/Title';
import ListDuAn from '../component/ListDuAn';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header />
          <Title title="Dự án" seeMore="Xem thêm >" />
          <ListDuAn />
          <Title title="Tư vấn viên" seeMore="Xem thêm >" />
          <View style={styles.listTuVanVien}>
            <Text>list tu van vien</Text>
          </View>
          <Title title="Tin Tức" seeMore="Xem thêm >" />
          <View style={styles.listTinTuc}>
            <Text>list tin tuc</Text>
          </View>
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
  listDuAn: {
    height: Dimensions.get('window').height / 3,
    backgroundColor: 'blue',
  },
  listTuVanVien: {
    height: Dimensions.get('window').height / 5,
    backgroundColor: 'blue',
  },
  listTinTuc: {
    height: Dimensions.get('window').height / 2,
    backgroundColor: 'blue',
  },
});
