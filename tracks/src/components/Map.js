import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

import { useLocation } from '../context/Location';

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useLocation();

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  const coords = locations.map(({ coords }) => coords);

  const centre = {
    ...currentLocation.coords,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <MapView initialRegion={centre} region={centre} style={styles.map}>
      <Polyline coordinates={coords} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
