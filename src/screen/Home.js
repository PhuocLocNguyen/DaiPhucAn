import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {height} from '../component/Dimensions';
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
    this.props.fetchDataCounselor();
  }
  renderHeader = () => {
    if (this.props.projects[1]) {
      return <Header imgs={this.props.projects[1].hinh_anh} />;
    }
    return (
      <View style={styles.viewLoad}>
        <Text>load</Text>
      </View>
    );
  };
  render() {
    // console.log(this.props.projects[1].hinh_anh);
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderHeader()}
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
  viewLoad: {
    height: height / 3.5,
  },
});

const mapStateToProps = function (state) {
  return {projects: state.projects};
};

export default connect(mapStateToProps, actionCreator)(Home);
