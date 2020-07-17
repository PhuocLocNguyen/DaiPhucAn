import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './src/screen/Home';
import ProjectDetail from './src/screen/ProjectDetail';
import CardProjectDetail from './src/component/cardcomponent/CardProjectDetail';
import CardLocation from './src/component/cardcomponent/CardLocation';
import Test from './src/component/cardcomponent/Test';
import InfoCounselors from './src/screen/InfoCounselors';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();

const store = createStore((state = 0, action) => {
  return state;
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="ProjectDetail" component={ProjectDetail} />
              <Stack.Screen name="InfoCounselors" component={InfoCounselors} />
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
