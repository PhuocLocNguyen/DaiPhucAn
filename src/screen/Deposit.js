import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {
  scale,
  verticalScale,
  moderateScale,
  width,
} from '../component/function/Dimensions';
import {Input, Avatar, Button} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const data1 = [];
export default class Deposit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      name: '',
      description: '',
      address: '',
      phone: '',
      email: '',
      price: '',
    };
  }
  imagePicker = () => {
    ImagePicker.openPicker({
      multiple: false,
    }).then((images) => {
      data1.push(images.path);
      this.setState({images: data1}, console.log(this.state.images));
    });
  };

  addDeposit = () => {
    console.log('adsadasd');
  };
  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.containerImagePicker}>
          <TouchableOpacity onPress={() => this.imagePicker()}>
            <Image
              style={styles.imagePicker}
              source={require('../../assets/icon/photography.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            extraData={this.state.images}
            data={this.state.images}
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View>
                <Image
                  style={styles.imageList}
                  source={{
                    uri: item,
                  }}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.containerInput}>
          <Input
            placeholder="Name"
            inputContainerStyle={styles.input}
            onChangeText={(text) => (this.state.name = text)}
          />
          <Input
            placeholder="Description"
            inputContainerStyle={styles.input}
            onChangeText={(text) => (this.state.description = text)}
          />
          <Input
            placeholder="Address"
            inputContainerStyle={styles.input}
            onChangeText={(text) => (this.state.address = text)}
          />
          <Input
            placeholder="Phone"
            inputContainerStyle={styles.input}
            onChangeText={(text) => (this.state.phone = text)}
          />
          <Input
            placeholder="Email"
            inputContainerStyle={styles.input}
            onChangeText={(text) => (this.state.email = text)}
          />
          <Input
            placeholder="Price"
            inputContainerStyle={styles.input}
            onChangeText={(text) => (this.state.price = text)}
          />
          <Button
            buttonStyle={styles.button}
            onPress={() => this.addDeposit()}
            title="Gửi"
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImagePicker: {
    height: verticalScale(120),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePicker: {
    height: verticalScale(100),
    width: verticalScale(100),
  },
  imageList: {
    marginLeft: 7,
    height: moderateScale(140),
    width: moderateScale(140),
  },
  containerInput: {
    marginTop: moderateScale(15),
  },
  input: {
    height: moderateScale(45),
  },
  button: {
    height: moderateScale(45),
    marginHorizontal: 7,
  },
});
