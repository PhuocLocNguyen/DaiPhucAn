import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {verticalScale} from './function/Dimensions';
import CardViewNews from './cardcomponent/CardViewNews';
import {connect} from 'react-redux';
import {actionCreator} from '../redux/action/actionCreator';

class ListFirstNews extends Component {
  render() {
    const {listNews} = this.props;
    return (
      <View style={styles.container}>
        {listNews.map((news, index) => {
          if (index < 3) {
            return (
              <TouchableOpacity
                key={news._id}
                onPress={() =>
                  this.props.navigation.navigate('NewsDetail', {
                    news: news,
                  })
                }>
                <CardViewNews news={news} />
              </TouchableOpacity>
            );
          }
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: verticalScale(381),
  },
});

const mapStateToProps = function (state) {
  return {listNews: state.listNews};
};

export default connect(mapStateToProps, actionCreator)(ListFirstNews);
