import {createStackNavigator} from 'react-navigation-stack';
import PhotosScreen from '../screens/PhotosScreen';
import stack from '../constants/stack';

const PhotosStack = createStackNavigator(
  {
    Photos: PhotosScreen
  },
  {
    initialRouteName: 'Photos',
    ...stack
  }
);

export default PhotosStack;
