import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, { Polyline } from 'react-native-maps';

import { useTracks } from '../context/Tracks';

const TrackDetailScreen = ({ navigation }) => {
  const {
    state: { tracks },
  } = useTracks();
  const trackId = navigation.getParam('_id');
  const track = tracks.find(({ _id }) => _id === trackId);
  const locations = track.locations.map(({ coords }) => coords);

  return (
    <>
      <Text h3>{track.name}</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: locations[0].latitude,
          longitude: locations[0].longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={locations} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    marginTop: 15,
    height: 300,
  },
});

TrackDetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default TrackDetailScreen;
