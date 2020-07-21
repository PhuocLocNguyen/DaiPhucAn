import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {height} from '../component/Dimensions';
import CardDescription from '../component/cardcomponent/CardDescription';
import {connect} from 'react-redux';
import {actionCreator} from '../redux/action/actionCreator';
import Communications from 'react-native-communications';
class InfoCounselors extends Component {
  componentDidMount() {
    this.props.fetchDataCounselorFindByID(this.props.route.params._id);
  }
  render() {
    const {
      full_name,
      address,
      description,
      image,
      code_number,
    } = this.props.counselor;
    return (
      <View style={styles.container}>
        <View style={styles.containerInfo}>
          <View style={styles.groupImageInfo}>
            <View style={styles.containerImageCounselor}>
              <Image source={{uri: image}} style={styles.imgCounselor} />
            </View>
          </View>

          <View style={styles.groupTextInfo}>
            <Text style={styles.textName}>{full_name}</Text>
            <Text style={styles.textMS}>{`MS: ${code_number}`}</Text>
            <Text style={styles.textKV}>{address}</Text>
          </View>
        </View>
        <View style={styles.containerIntroduce}>
          <CardDescription title="Giới thiệu" description={description} />
        </View>
        <View style={styles.containerContact}>
          <View style={styles.containerCall}>
            <TouchableOpacity
              onPress={() => Communications.phonecall('0123456789', true)}>
              <Text style={styles.textCall}>Gọi điện</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerMessage}>
            <TouchableOpacity onPress={() => Communications.text('0123456789')}>
              <Text style={styles.textMessage}>Nhắn tin</Text>
            </TouchableOpacity>
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
  containerInfo: {
    flex: 5,
    margin: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  groupImageInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  containerImageCounselor: {
    height: height / 4,
    width: height / 4,
    borderRadius: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#134074',
  },
  imgCounselor: {
    width: height / 4.3,
    height: height / 4.3,
    borderRadius: height / 4,
  },
  groupTextInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textName: {
    fontSize: height / 30,
    fontWeight: 'bold',
  },
  textMS: {
    fontSize: height / 35,
    fontWeight: 'bold',
  },
  textKV: {
    fontSize: height / 40,
  },
  containerIntroduce: {
    flex: 4,
  },
  containerContact: {
    flex: 1,
    flexDirection: 'row',
  },
  containerCall: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCall: {
    paddingVertical: 12,
    paddingHorizontal: 55,
    backgroundColor: 'blue',
    color: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textMessage: {
    paddingVertical: 12,
    paddingHorizontal: 55,
    backgroundColor: 'blue',
    color: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

const mapStateToProps = function (state) {
  return {counselor: state.counselor};
};

export default connect(mapStateToProps, actionCreator)(InfoCounselors);
