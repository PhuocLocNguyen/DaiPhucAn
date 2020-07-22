import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {verticalScale, moderateScale} from '../function/Dimensions';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default class CardLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleInformation}>
          <Text style={styles.textInformation}>Vị trí</Text>
        </View>
        <View style={styles.groupInformation}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 11.497302,
              longitude: 106.891039,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={{latitude: 11.497302, longitude: 106.891039}}
              image={require('../../../assets/icon/marker.png')}
              title="Thuận Hòa LuckyHome">
              {/* <Callout>
                <View style={styles.imgCallout}>
                  <Image
                    style={styles.imgCallout}
                    source={require('../../../assets/images/dongphu.jpg')}
                  />
                </View>
              </Callout> */}
            </Marker>
          </MapView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: verticalScale(346.6),
    marginHorizontal: 7,
    marginBottom: 7,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  titleInformation: {
    flex: 1,
    justifyContent: 'center',
  },
  groupInformation: {
    flex: 7,
    backgroundColor: '#EEF4ED',
  },
  textInformation: {
    fontSize: moderateScale(15),
    marginHorizontal: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
