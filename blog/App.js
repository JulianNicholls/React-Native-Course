import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { BlogProvider } from './src/context';

import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Simple Blog',
    },
  }
);

const BlogApp = createAppContainer(navigator);

const App = () => {
  return (
    <BlogProvider>
      <BlogApp />
    </BlogProvider>
  );
};

export default App;
