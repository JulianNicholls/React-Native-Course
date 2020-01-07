import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet } from 'react-native';
import { requestPermissionsAsync } from 'expo-location';
import { Text } from 'react-native-elements';

import Map from '../components/Map';

const TrackCreateScreen = () => {
  const [error, setError] = useState(null);

  const startWatching = async () => {
    try {
      const response = await requestPermissionsAsync();
      if (!response.granted) setError('denied');
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
