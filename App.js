import React from 'react';
import  RosaryMain  from './components/RosaryMain.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ModalScreen from './components/ModalScreen.js';
import SettingsScreen from './components/SettingsScreen.js';

const AppNavigator = createStackNavigator({
  Home: RosaryMain,
  ModalScreen: ModalScreen,
  SettingsScreen: SettingsScreen
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  
  render() {
    return <AppContainer />;
  }
}

