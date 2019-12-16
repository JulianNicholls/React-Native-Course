import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
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
