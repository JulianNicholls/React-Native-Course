import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListsScreen from './src/screens/ListsScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColourScreen from './src/screens/ColourScreen';
import SquareScreen from './src/screens/SquareScreen';
import InputScreen from './src/screens/InputScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Lists: ListsScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Colour: ColourScreen,
    Square: SquareScreen,
    Input: InputScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'First App',
    },
  }
);

export default createAppContainer(navigator);
