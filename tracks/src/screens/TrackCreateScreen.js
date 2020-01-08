import React from 'react';
import PropTypes from 'prop-types';

import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import Map from '../components/Map';
import { useGeo } from '../context/Geo';
import useLocation from '../hooks/useLocation';

import '../_mockLocation'; // Fake locations

const TrackCreateScreen = ({ isFocused }) => {
  const { geoAddLocation } = useGeo();
  const [error] = useLocation(isFocused, geoAddLocation);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a new track</Text>
      <Map />
      {error !== null && (
        <Text style={styles.error}>Please enable location services</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  error: {
    fontSize: 16,
    color: 'red',
  },
});

TrackCreateScreen.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(TrackCreateScreen);
