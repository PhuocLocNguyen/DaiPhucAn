import React, {Component} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import CardViewProject from './cardcomponent/CardViewProject';
import {verticalScale} from './function/Dimensions';
import {connect} from 'react-redux';
import {actionCreator} from '../redux/action/actionCreator';

class ListProjects extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          extraData={this.props.projects}
          keyExtractor={(item, index) => item._id.toString()}
          data={this.props.projects}
          horizontal={true}
          renderItem={({item, index, separators}) => (
            <View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('ProjectDetail', {
                    _id: item._id.toString(),
                  })
                }>
                <CardViewProject
                  name={item.ten_du_an}
                  address={item.vi_tri}
                  img={item.hinh_anh[2]}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(210),
  },
});

const mapStateToProps = function (state) {
  return {projects: state.projects};
};

export default connect(mapStateToProps, actionCreator)(ListProjects);
