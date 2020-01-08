import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet } from 'react-native';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';
import { Text } from 'react-native-elements';

import Map from '../components/Map';

//  import '../_mockLocation'; // Fake locations

const TrackCreateScreen = () => {
  const [error, setError] = useState(null);

  const startWatching = async () => {
    try {
      // Currently requestPermissionsAsync does not throw an error on iOS,
      // so we check the response here.
      const response = await requestPermissionsAsync();
      if (!response.granted) return setError('denied');

      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 2000,
          distanceInterval: 20,
        },
        location => {
          console.log(
            location.coords.latitude.toFixed(4),
            location.coords.longitude.toFixed(4)
          );
        }
      );
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

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

export default TrackCreateScreen;
