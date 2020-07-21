import React, {Component} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import CardViewCounselor from './cardcomponent/CardViewCounselor';
import {verticalScale} from './function/Dimensions';
import {connect} from 'react-redux';
import {actionCreator} from '../redux/action/actionCreator';
class ListCounselors extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          extraData={this.props.counselors}
          keyExtractor={(item, index) => item._id.toString()}
          data={this.props.counselors}
          horizontal={true}
          renderItem={({item, index, separators}) => (
            <View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('InfoCounselors', {
                    _id: item._id.toString(),
                  })
                }>
                <CardViewCounselor name={item.name} img={item.image} />
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
    height: verticalScale(120),
  },
});

const mapStateToProps = function (state) {
  return {counselors: state.counselors};
};

export default connect(mapStateToProps, actionCreator)(ListCounselors);
