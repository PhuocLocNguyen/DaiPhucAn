import {View, Text, StyleSheet} from 'react-native';
import {height} from './Dimensions';
import Header from '../Header';
export const renderHeader = (hinh_anh) => {
  if (this.props.projects[1]) {
    return <Header imgs={hinh_anh} />;
  }
  return (
    <View style={styles.viewLoad}>
      <Text>load</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewLoad: {
    height: height / 3.5,
  },
});
