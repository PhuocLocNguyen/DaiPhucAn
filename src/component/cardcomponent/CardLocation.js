import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {height} from '../function/Dimensions';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

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
    marginHorizontal: 8,
    marginBottom: 8,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleInformation: {
    height: height / 14,
    justifyContent: 'center',
  },
  groupInformation: {
    height: height / 3,
    backgroundColor: '#EEF4ED',
  },
  textInformation: {
    fontSize: 15,
    marginHorizontal: 5,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  viewCallout: {
    width: 100,
    height: 100,
  },
  textCallout: {
    width: 100,
    height: 100,
  },
  imgCallout: {
    width: 50,
    height: 50,
  },
});
