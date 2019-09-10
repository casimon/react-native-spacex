import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeStack from './home';
import MapStack from './map';
import PhotosStack from './photos';

import TabImage from '../components/TabImage';
import colors from '../constants/colors';

let nav = {
  Home: HomeStack,
  Photos: PhotosStack
};

if (Platform.OS === 'ios') {
  nav = {
    Home: HomeStack,
    Map: MapStack,
    Photos: PhotosStack
  };
}

const AppNavigator = createBottomTabNavigator(
  {
    ...nav
  },
  {
    defaultNavigationOptions: ({navigation}: any) => ({
      tabBarOptions: {
        showLabel: false,
        style: {
          borderTopWidth: 0,
          backgroundColor: colors.grey
        }
      },
      tabBarIcon: ({focused}: any) => {
        const {routeName} = navigation.state;
        return (
          <TabImage
            routeName={routeName}
            size={32}
            color={focused ? colors.purple : colors.black}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

export default AppNavigator;
