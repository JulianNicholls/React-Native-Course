import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListsScreen from './src/screens/ListsScreen';
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Lists: ListsScreen,
    Image: ImageScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'First App',
    },
  }
);

export default createAppContainer(navigator);
