import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppNavigator from './app';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppNavigator
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
