import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {verticalScale, moderateScale} from '../component/function/Dimensions';
import CardDescription from '../component/cardcomponent/CardDescription';
import {connect} from 'react-redux';
import {actionCreator} from '../redux/action/actionCreator';
import Communications from 'react-native-communications';
import {Icon} from 'react-native-elements';
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
      phone,
    } = this.props.counselor;
    return (
      <View style={styles.container}>
        <ScrollView>
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
            <TouchableOpacity
              style={styles.containerTouchable}
              onPress={() => Communications.phonecall(phone, true)}>
              <Icon name="phone" color="#517fa4" />
              <Text style={styles.textContact}>Gọi điện</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.containerTouchable}
              onPress={() => Communications.text(phone)}>
              <Icon name="message" color="#517fa4" />
              <Text style={styles.textContact}>Nhắn tin</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInfo: {
    height: verticalScale(285),
    margin: 7,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  groupImageInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  containerImageCounselor: {
    height: verticalScale(150),
    width: verticalScale(150),
    borderRadius: verticalScale(75),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4C796B',
  },
  imgCounselor: {
    width: verticalScale(140),
    height: verticalScale(140),
    borderRadius: verticalScale(70),
  },
  groupTextInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textName: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
  },
  textMS: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  textKV: {
    fontSize: moderateScale(15),
  },
  containerContact: {
    height: verticalScale(45),
    flexDirection: 'row',
    marginHorizontal: 7,
    marginBottom: 7,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  containerTouchable: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContact: {
    fontSize: moderateScale(15),
    marginLeft: 5,
  },
});

const mapStateToProps = function (state) {
  return {counselor: state.counselor};
};

export default connect(mapStateToProps, actionCreator)(InfoCounselors);
