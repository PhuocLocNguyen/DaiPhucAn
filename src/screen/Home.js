import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../component/Header';
import Title from '../component/Title';
import ListDuAn from '../component/ListDuAn';
import ListCounselors from '../component/ListCounselors';
import ListNews from '../component/ListNews';
import {connect} from 'react-redux';
import {actionCreator} from '../redux/action/actionCreator';

class Home extends Component {
  componentDidMount() {
    this.props.fetchDataProjects();
  }
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

const mapStateToProps = function (state) {
  return {projects: state};
};

export default connect(mapStateToProps, actionCreator)(Home);
