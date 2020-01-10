import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { AuthProvider } from './src/context/Auth';
import { GeoProvider } from './src/context/Geo';
import { TracksProvider } from './src/context/Tracks';

import LoadingScreen from './src/screens/LoadingScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';

import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Login: LoginScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const TrackApp = createAppContainer(switchNavigator);

const App = () => (
  <AuthProvider>
    <GeoProvider>
      <TracksProvider>
        <TrackApp ref={navigator => setNavigator(navigator)} />
      </TracksProvider>
    </GeoProvider>
  </AuthProvider>
);

export default App;
