import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../component/Header';
import CardProjectbasicInformation from '../component/cardcomponent/CardProjectbasicInformation';
import CardNameProject from '../component/cardcomponent/CardNameProject';
import CardProjectDetail from '../component/cardcomponent/CardProjectDetail';
import CardDescription from '../component/cardcomponent/CardDescription';
import CardLocation from '../component/cardcomponent/CardLocation';
import {connect} from 'react-redux';
import {actionCreator} from '../redux/action/actionCreator';
class ProjectDetail extends Component {
  componentDidMount() {
    this.props.fetchDataProjectFindByID(this.props.route.params._id);
  }
  render() {
    const {mo_ta} = this.props.project;
    //console.log(this.props.project);
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header imgs={this.props.project.hinh_anh} />
          <CardNameProject />
          <CardProjectbasicInformation />
          <CardProjectDetail />
          <CardDescription title="Mô tả" description={mo_ta} />
          <CardLocation />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const mapStateToProps = function (state) {
  return {project: state.project};
};

export default connect(mapStateToProps, actionCreator)(ProjectDetail);
