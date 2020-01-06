import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SearchScreen from './src/screens/SearchScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestaurantShow: RestaurantScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
