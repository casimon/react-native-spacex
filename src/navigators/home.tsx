import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import stack from '../constants/stack';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: 'Home',
    ...stack
  }
);

export default HomeStack;
