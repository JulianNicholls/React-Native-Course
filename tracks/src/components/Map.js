import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';

import { useGeo } from '../context/Geo';

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useGeo();

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
    <MapView initialRegion={centre} style={styles.map}>
      <Polyline coordinates={coords} />
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(255, 128, 128, 1.0)"
        fillColor="rgba(255, 128, 128, 0.3)"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
