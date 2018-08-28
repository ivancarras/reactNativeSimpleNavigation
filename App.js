import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './myApp/Home/HomeScreen'
import SecondScreen from './myApp/SecondScreen/SecondScreen';
import ThirdScreen from './myApp/ThirdScreen/ThirdScreen';

export default class App extends React.Component {
  render() {
    return (
      <StackNavigator />
    );
  }
}

const StackNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  SScreen: { screen: SecondScreen },
  ThScreen: { screen: ThirdScreen }
},
  {
    initialRouteName: 'Home',
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


