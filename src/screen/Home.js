import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {verticalScale} from '../component/function/Dimensions';
import Header from '../component/Header';
import Title from '../component/Title';
import ListProjects from '../component/ListProjects';
import ListCounselors from '../component/ListCounselors';
import ListFirstNews from '../component/ListFirstNews';
import {connect} from 'react-redux';
import {actionCreator} from '../redux/action/actionCreator';

class Home extends Component {
  componentDidMount() {
    this.props.fetchDataProjects();
    this.props.fetchDataCounselors();
    this.props.fetchDataNews();
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
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderHeader()}
          <Title title="Dự án" seeMore="Xem thêm >" />
          <ListProjects navigation={this.props.navigation} />
          <Title title="Tư vấn viên" seeMore="Xem thêm >" />
          <ListCounselors navigation={this.props.navigation} />
          <Title title="Tin Tức" seeMore="Xem thêm >" />
          <ListFirstNews navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewLoad: {
    height: verticalScale(250),
  },
});

const mapStateToProps = function (state) {
  return {projects: state.projects, listNews: state.listNews};
};

export default connect(mapStateToProps, actionCreator)(Home);
