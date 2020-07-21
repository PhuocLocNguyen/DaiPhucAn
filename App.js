import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './src/screen/Home';
import ProjectDetail from './src/screen/ProjectDetail';
import InfoCounselors from './src/screen/InfoCounselors';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import NewsDetail from './src/screen/NewsDetail';
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
              />
              <Stack.Screen name="ProjectDetail" component={ProjectDetail} />
              <Stack.Screen name="InfoCounselors" component={InfoCounselors} />
              <Stack.Screen name="NewsDetail" component={NewsDetail} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
