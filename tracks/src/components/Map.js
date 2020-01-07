import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  const points = [];

  for (let i = 0; i < 20; ++i) {
    if (i & 1) {
      points.push({
        latitude: 50.733 + i * 0.0003,
        longitude: -1.83 + i * 0.0003,
      });
    } else {
      points.push({
        latitude: 50.733 - i * 0.0001,
        longitude: -1.83 - i * 0.0001,
      });
    }
  }

  return (
    <MapView
      initialRegion={{
        latitude: 50.733,
        longitude: -1.83,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      style={styles.map}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
