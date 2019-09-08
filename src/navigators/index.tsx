import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import PhotosScreen from '../screens/PhotosScreen';
import TabImage from '../components/TabImage';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: 'Home',
    animationEnabled: false,
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0
      }
    }),
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000000'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Photos: PhotosScreen
  },
  {
    defaultNavigationOptions: ({navigation}: any) => ({
      tabBarOptions: {
        showLabel: false,
        style: {
          backgroundColor: '#000'
        }
      },
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        let iconName;

        if (routeName === 'Home') {
          iconName = `tabHome`;
        } else if (routeName === 'Photos') {
          iconName = `tabPhotos`;
        }
        return (
          <TabImage
            iconName={iconName}
            size={32}
            color={focused ? '#524AB3' : '#fff'}
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

export default createAppContainer(AppNavigator);
