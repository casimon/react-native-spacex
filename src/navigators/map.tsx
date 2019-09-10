import {createStackNavigator} from 'react-navigation-stack';
import MapScreen from '../screens/MapScreen';
import stack from '../constants/stack';

const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    initialRouteName: 'Map',
    ...stack
  }
);

export default MapStack;
